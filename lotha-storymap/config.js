var config = {
    style: 'map/style.json',
    showMarkers: true,
    markerColor: '##a9a9a9',
    inset: true, // if inset map is set to true, legend will be disabled.
    legend: false, // if legend is set to true, inset will be disabled.
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps. You will need to provide your own terrain tiles.
    useCustomLayers: true, //set true for enabling custom layers from sources.js
    bookmarks: true,
    chapterReturn: true,
    title: 'Reflections On A Fall Morning, 1978',
    logo: '',
    subtitle: 'By Lotha Crowder',
    mobileview: '<div id="rotate-mobile"><em>For optimal viewing of this storytelling map on mobile, rotate your device to a horizontal orientation.</em><br><br><img src="images/device.png">', // to add custom messaging in the header for mobile devices
    footer: 'Source: source citations, etc.<br> Created using <a href="https://github.com/digidem/maplibre-storymap" target="_blank">MapLibre Storytelling</a> template.',
    chapters: [
        {
            id: 'pierce',
            alignment: 'left',
            hidden: false,
            title: 'Pierce City, Missouri',
            image: './images/children.jpg',
            caption: 'Homer, Lotha and Nettie Douglas',
            legend: '<span style="font-size: 0.85em;"><em>Legend content</em></span>',
            description: 'I was born in Pierce City, Missouri on February 17, 1902 to Stephen A. and Eva Early Douglas. I had a brother 2 years older than me. Homer Carl Douglas - in K.C. Kansas.',
            location: {
                center: [-94.002,36.945 ],
                zoom: 12,
                pitch: 0,
                speed: 0.2,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            spinGlobe: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'layer-name',
                //     opacity: 1,
                //     duration: 5000
                // }
                // {
                //      layer: 'countries-fill',
                //      opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'layer-name',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'eureka',
            alignment: 'right',
            hidden: false,
            title: 'Eureka Springs, Arkansas',
            image: './images/bath.jpg',
            description: 'We moved a lot when I was little and before long we moved to Eureka Springs, Arkansas. This is where my mother died and was buried. This was in 1905, I was 3 yrs old. Arkansas was Eva Early&apos;s home.',
            location: {
                center: [-93.740,36.4030],
                zoom: 12,
                pitch: 0,
                speed: 0.2,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'westville',
            alignment: 'left',
            hidden: false,
            title: 'Westville, Oklahoma',
            image: './images/lothaCarlStephen.jpg',
            caption: 'Lotha, Stephen and Homer Douglas',
            description: 'Stephen A. married Iola. Later we moved to the Indian Territory which became Oklahoma. At Westville, Oklahoma Stephen A. was a jeweler and music store proprietor. He was the clock and watch inspector for the Kansas City Southern Railway also. At the same time, he preached on Sundays as a visiting speaker.<br><br>They were mostly Indian clientele at the store. I remember in particular one Indian man named Eli Cosalie. He weighed 300 lbs or more. As he walked, his bare feet would splat the dust in the street. Eli died and Father was preacher for the burial. Eli had 2 wives at graveside and one was the mother of the other. This was approx. 1909 or 1910. We had an outhouse at Westville and I remember a large snake slithering across the path one day as I was going to the outhouse. &quotOf course I would always take a lickin&apos; before I gave one.&quot  One day as we were all lining up to march into the school house, one girl wanted my place in line and she came up and hit me on the arm with her tin cup. I didn&apos;t tell the teacher who was very strict, but some of the other kids did and she got into trouble as a result. It was here in this school which had about 30 students from 1st to 6th grade that I was in 4th grade and my first operetta. I sang "Billy Boy" (where have you been Billy Boy?).<br><br> While we were in Westville I had an excellent piano teacher. She was Hildegarde Poppe (pronounced "poppy"). She was German.',
            location: {
                center: [ -94.576,35.992],
                zoom: 12,
                pitch: 0,
                speed: 0.2,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'westville',
            alignment: 'left',
            hidden: false,
            title: 'Westville, Oklahoma',
            image: './images/articles.jpg',
            caption: 'Newspaper clippings from Westville, OK',
            location: {
                center: [ -94.576,35.992],
                zoom: 12,
                pitch: 0,
                speed: 0.2,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'fayetteville',
            alignment: 'right',
            hidden: false,
            title: 'Fayetteville, Arkansas',
            description: 'By now Carl (brother) was beginning to get dissatisfied with life with the family and Father located a small farm near Fayetteville, Arkansas where we moved and lived for a while.',
            location: {
                center: [-94.177, 36.07954],
                zoom: 12,
                pitch: 0,
                speed: 0.2,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'ald',
            alignment: 'left',
            hidden: false,
            title: 'Aldridge, Missouri',
            image: './images/lee.png',
            description: 'Then near Aldridge, Missouri. It was here that I saw my first fruit drying shed. There was a beautiful spring close by and a beautiful Paw Paw tree grew beside it. The fruit would sometimes drop into the spring pool and would get very cool and pleasant. The farm location didn&apos;t seem to help Carl&apos;s dissatisfaction much. Julia Lee lived here and was my tutor.',
            location: {
                center: [-93.551, 37.550],
                zoom: 14,
                pitch: 0,
                speed: 0.2,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'aurora',
            alignment: 'right',
            hidden: false,
            title: 'Aurora, Missouri',
            image: './images/homer1918b.jpg',
            description: 'Next we landed in Aurora, Missouri. Eva was born here. I was approx 11 yrs old. I have a picture of us in front of our horse there.<br><br>By now I was teaching music students along with Father and Mother. We would go out to surrounding communities to have teaching sessions. I remember going by train sometimes to Preston. I also took violin lessons during this time from Ivan C. Franke who was from St. Louis.',
            location: {
                center: [-93.722, 36.9678 ],
                zoom: 12,
                pitch: 0,
                speed: 0.2,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },        {
            id: 'galveston',
            alignment: 'right',
            hidden: false,
            title: 'Galveston, Texas',
            description: 'During our time at Aurora, father was able to buy an orchard farm near Galveston, Texas. There was a black family who lived down the road a bit who worked the orchard and had a big garden at the farm. The family "wintered" there a year or two and we enjoyed the beach and ocean.',
            location: {
                center: [-94.898,29.2542 ],
                zoom: 12,
                pitch: 0,
                speed: 0.2,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'appleton',
            alignment: 'left',
            hidden: false,
            title: 'Appleton City Missouri',
            image: './images/band.jpg',
            description: 'In 1920 we moved to Appleton City Missouri. Vern Crowder had a bakery there and signed up to take violin lessons with me. Vern said that father always guaranteed satisfaction from any lessons from his teachers and Vern finally had to marry his teacher to get satisfaction. Father had a music store and several teachers who taught lessons on various instruments. He also sold Singer sewing machines. This was approx 1914. Julia Lee, Minta Lee and Alice Lee were three old maids who were close friends of the family. I stayed with these 3 women at times when Father and Mother were away. Julia was my tutor and stayed with the family until Vern and I were married. At that time she returned to her home. Another teacher, Macie Johnson also left and got married at this time. Pearl Majors, Nellie Rice, Nora Rice and Marie Taylor had joined the family at this time.',
            location: {
                center: [-94.030, 38.191],
                zoom: 12,
                pitch: 0,
                speed: 0.2,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'marionville',
            alignment: 'left',
            hidden: false,
            title: 'Marionville, Missouri',
            image: './images/sie.jpg',
            caption:'Stephen, Eva and Iola Douglas',
            description: 'After I was married in February 17, 1921 (19 yrs old in Nevada, Missouri), The Douglas family moved to Marionville, Missouri. Stephen A. didn&apos;t think Vern was good enough for me. Vern closed his bakery and together we took over Father&apos;s music store. Kay (Katharine) was born in 1921. There wasn&apos;t enough business at the store to keep us going so Vern applied at Hillsdale School for a teaching job and got it. We then moved to a place in the country where Hubert was born in 1925. Vern was teaching at this time. It was at this farm where the famous turkey incident took place (actually there were two "turkey incidents"). We had bought a turkey and were fattening it up for a big meal when Thanksgiving came around. One morning when Katharine was a small girl, she was playing in the back yard while I swept the back porch. Turkey was nearby and suddenly turned and jumped at Katharine - knocking her down. I yelled and ran to them. I swung my broom and knocked turkey clear off Katharine. I picked Katharine up and found her O.K. - just frightened. I then looked at Turkey and it was still laying limp on the ground. I put Katharine down and ran over and picked its lifeless head and started blowing into its beak. After a while, it stirred, then got up and ambled off. It was O.K. but it never gobbled again after that day.<br><br>The second "turkey incident" happened about a year later. By then we had bought several small turkeys to raise and had built a good pen to house them. There was a market for grown turkeys. One afternoon a couple of coyotes got into the pen and were killing birds right and left. I finally got the coyotes scared off, but the pen was a mess. I cleaned all the dead and dying birds and canned the meat',
            location: {
                center: [-93.63774556214747, 37.00417],
                zoom: 12,
                pitch: 0,
                speed: 0.2,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'other-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Dover, Oklahoma',
            description: 'Later, when Hubert was 18 months old, we packed up and with Francis and Maude Stark, moved to Dover, Oklahoma. We had 400 quarts of turkey sausage, green beans and other vegetables to take along. Vern and Francis worked in the bank there. This was about 1926.',
            location: {
                center: [-97.9142, 35.9804],
                zoom: 12,
                pitch: 0,
                speed: 0.2,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'liberal',
            alignment: 'left',
            hidden: false,
            title: 'Liberal, Kansas',
            image: './images/crowders.png',
            description: 'In June,1927, the Starks and Crowders moved to Liberal, Kansas with the Champlin Refining Co. Later Starks moved to Woodward, Oklahoma with Champlin.<br><br>Harold Eugene was born in Jan 1928. He died at 18 months old in 1929. He is buried in Liberal&apos;s cemetery. Raymond was born in September, 1930. <br><br>Champlin opened a new station in Liberal (pop. 4500). Vern took it over. We had no furniture at the house we rented except an old table and a leather divan. We used wooden oil cases for chairs at the table. We lived 3 weeks on Pershing street next to Ralph Smith&apos;s place near Salley&apos;s.<br><br>One day Marge Stark and the kids and I went out to the fairgrounds for a picnic and while we tried to have our picnic a goat kept charging them. We had to leave, but on the way home we saw the house at 130 South Jordan - and I wanted that house. We bought it from Mabel Grainger for $2700 - paid $25/month. This was in 1929. One day I had Harold in the truck with me and we were on our way home. I looked as we got close and saw smoke coming from the roof. A neighbor called the fire department and to save time the firetruck tried to cut across the open Garfield school playground and got stuck. It took a while to get free and reach the house. Luckily the damage was minor.',
            location: {
                center: [-100.928, 37.0478],
                zoom: 12,
                pitch: 0,
                speed: 0.2,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        },
        {
            id: 'liberal',
            alignment: 'right',
            hidden: false,
            title: 'Liberal, Kansas',
            image: './images/invent.png',
            description: 'Brother Carl (Homer Carl Douglas) was visiting us when Harold died. Carl was visiting local fairs to sell his "invention" - a sea-going craft to raise sunken vessels.',
            location: {
                center: [-100.928, 37.0478],
                zoom: 12,
                pitch: 0,
                speed: 0.2,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            mapInteractive: true,
            callback: '',
            onChapterEnter: [
                // {
                //     layer: 'countries-fill',
                //     opacity: 0
                // }
            ],
            onChapterExit: []
        }
        
    ]
};
