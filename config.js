var config = {
    style: 'mapbox://styles/riyonakasaka/cly98b2jq00wj01p8hjjh9jai',
    accessToken: 'pk.eyJ1Ijoicml5b25ha2FzYWthIiwiYSI6ImNseGRpNWp0NTA1d2Eya3BycGd6bmg0aGQifQ.P5j-tPs9UqJYNfC2VnMtUw',
    showMarkers: false,
    markerColor: '#3FB1CE',
    inset: false,
    theme: 'dark',
    use3dTerrain: false, //set true for enabling 3D maps.
    auto: false,
    title: 'Japan Faces Growing Issue of Vacant Houses',
    subtitle: 'Based on Data Released by the Ministry of Internal Affairs and Communications in April 2024',
    byline: 'Riyo Nakasaka',
    footer: ' <br> <a href="https://github.com/riyonakasaka/Vacanthouses-project1" target="_blank">Here is the link to Github page </a>',
    chapters: [
        {
            id: 'slug-style-id',
            alignment: 'left',
            hidden: false,
            title: 'Increasing Number of Vacant Houses in Japan',
            description: 'In Japan the number of vacant houses continues to increase due to an aging population. According to data released by the government in April, the number of vacant houses reached 8.99 million in 2023, an increase of 500,000 over the past 5 years. Vacant houses can lead to problems such as deteriorating landscapes and the risk of collapse.',
            image: 'akiyachart.png',
            location: {
                center: [138.75537, 37.65700],
                zoom: 4.2,
                speed: 0,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
        
                    {
                    layer: 'forrealakiya',
                    opacity: 0,
                    duration: 0
                         }
            
            ]
        },
        
        {
            id: 'second-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Tokushima and Wakayama Have the Highest Vacancy Rate',
            image:'Akiyatable.png',
            altText: 'aa',
            description: '',
            location: {
                center: [138.75537, 37.65700],
                zoom: 4.2,
                pitch: 0,
                bearing: 0,
               
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'forrealakiya',
                opacity: 1,
                duration: 0
                     }
            ]//,
            //onChapterExit: [
            //    {
            //    layer: 'forrealakiya',
            //    opacity: 0,
            //    duration: 0
            //        }
            //]
        },
        {
            id: 'third-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Top10 Prefectures by Vacancy Rate Also Tend to Rank High in Aging Population Rate',
            image: 'barchart.png',
            description: 'According 2021 report by the Cabinet Office, there is a noticeable trend in Prefectures where a higher proprtion of the population is aged 65 and older. These areas tend to have a higher number of vacannt houses.',
            location: {
                center: [138.75537, 37.65700],
                zoom: 4.2,
                pitch: 0.00,
                bearing: 0.00
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                    layer: 'forrealakiya',
                    opacity: 1,
                    duration: 0
                         }
            ],
            onChapterExit: [
                {
                    layer: 'forrealakiya',
                    opacity: 0,
                    duration: 0
                         }
            ]
        },
        {id: 'fourth-identifier',
            alignment: 'right',
            hidden: false,
            title: 'Reasons for High Number of Vacant Houses in Tokushima',
            image: '',
            description: 'Based on Tokushima Prefecture, the reasons for the high number of vacant houses include "inability to maintain the property due to living far away," "financial constraints preventing maintenance or demolition costs," "inability to maintain the property due to old age or health issues," and "unknown whereabouts of those responsible for managing the property due to inheritance."',
            location: {
                center: [134.58009, 33.81332],
                zoom: 8.41,
                pitch: 45.00,
                bearing: 0.00         
              
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'TokushimaWakayama',
                opacity: 1,
                duration: 0
                     }
            ],
            onChapterExit: [
                {
                    layer: 'TokushimaWakayama',
                    opacity: 0,
                    duration: 0
                     }
            ]
            
        },
        {
        id: 'fifth-identifier',
            alignment: 'left',
            hidden: false,
            title: 'Free Transfer Service for Vacant Houses in Wakayama',
            image: 'wakayama0.png',
            description: "In Wakayama, which has the second-highest vacancy rate, there are specific initiatives to address the issue of vacant houses. One such initiative is a service that matches people who want to transfer ownership of their vacant houses with those who are interested in acquiring them. The vacant houses are listed at a price of 0 yen, and the website provides photos along with details about the house's size, location, and age.",
            location: {
                center: [135.06771, 33.86547],
                zoom: 8.81,
                pitch: 45.00,        
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [
                {
                layer: 'TokushimaWakayama',
                opacity: 1,
                duration: 0
                     }
            ],
            onChapterExit: [
                {
                    layer: 'TokushimaWakayama',
                    opacity: 0,
                    duration: 0
                     }
            ]
           
        },
        {
            id: 'sixth-chapter',
            alignment: 'fully',
            hidden: false,
            title: 'Urgent Measures Needed',
            image: '',
            description: 'Poorly managed and neglected vacant houses are prone to damage, making them susceptible to having exterior materials and roofing blown off during typhoons, or collapsing during earthquakes. Additionally, they pose sanitary and aesthetic issues, such as infestations of rodents and pests, scattered garbage, and damaged or dirty exterior walls. Therefore, measures to address these concerns are necessary.',
            location: {
                center: [138.75537, 37.65700],
                zoom: 4.2,
                pitch: 0,
                bearing: 0
            },
            mapAnimation: 'flyTo',
            rotateAnimation: false,
            callback: '',
            onChapterEnter: [ 
                {
                layer: 'filljapan',
                opacity: 1,
                duration: 0
                     }
                    ],
            onChapterExit: [
                {
                    layer: 'filljapan',
                    opacity: 0,
                    duration: 0
                     }
            ]
        }
    ]
};
