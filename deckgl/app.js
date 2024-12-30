const initialViewState = {
    longitude: 9.18,
    latitude: 45.46,
    zoom: 8,
    pitch: 40.5,
    bearing: -27
};

const deckgl = new deck.DeckGL({
    container: 'map',
    initialViewState: initialViewState,
    controller: true
});

const tooltip = document.getElementById('tooltip');

fetch('data.json')
    .then(response => response.json())
    .then(data => {
        const hexagonLayer = new deck.HexagonLayer({
            id: 'hexagon-layer',
            data,
            pickable: true,
            extruded: true,
            radius: 450,
            elevationScale: 100, // Increase the elevation scale for taller hexagons
            getPosition: d => d.coordinates,
            getElevationWeight: d => d.population,
            elevationAggregation: 'SUM',
            getColorWeight: d => d.population,
            colorAggregation: 'SUM',
            getTooltip: ({object}) => {
                if (!object) {
                    return null;
                }
                console.log('Hovered object:', object);
                const points = object.points || [];
                const aggregatePopulation = points.reduce((acc, point) => acc + (point.source && point.source.population || 0), 0);
                const names = points.map(point => point.source && point.source.name).filter(Boolean).join(', ');
                return `Names: ${names}<br>Aggregate Population: ${aggregatePopulation}`;
            }
        });

        // Load and add the GeoJSON layer
        fetch('lines.geojson')
            .then(response => response.json())
            .then(geojson => {
                const geoJsonLayer = new deck.GeoJsonLayer({
                    id: 'geojson-layer',
                    data: geojson,
                    pickable: true,
                    stroked: true,
                    filled: false,
                    lineWidthScale: 2,
                    lineWidthMinPixels: 2,
                    getLineColor: [255, 0, 0],
                    getLineWidth: 2,
                    getTooltip: ({object}) => object && object.properties && `Name: ${object.properties.name}`
                });

                deckgl.setProps({
                    layers: [hexagonLayer, geoJsonLayer],
                    views: new deck.MapView({repeat: true})
                });
            });
    });

document.getElementById('map').addEventListener('mousemove', event => {
    const {offsetX, offsetY} = event;
    const pickInfo = deckgl.pickObject({x: offsetX, y: offsetY});

    if (pickInfo && pickInfo.object) {
        tooltip.style.display = 'block';
        tooltip.style.left = `${offsetX + 10}px`;
        tooltip.style.top = `${offsetY + 10}px`;
        tooltip.innerHTML = pickInfo.layer.props.getTooltip(pickInfo);
    } else {
        tooltip.style.display = 'none';
    }
});
