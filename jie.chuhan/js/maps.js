
const makeMap = async (target, center={lat: 37.735078, lng: -122.436844}) => {
	await checkData(() => window.google);


	let map_el = $(target);
	// map = map_el.data("map")

	if(!map_el.data("map")) map_el.data({
		"map": new google.maps.Map(
			map_el[0], 
			{
	        	center: center,
	         	zoom: 12,
	         	disableDefaultUI: true,
	         	styles: paperStyles
	        }
    	),
    	"infoWindow": new google.maps.InfoWindow({content: ''})
	});
	return map_el;
}


const makeMarkers = (map_el, map_locs) => {
	let map = map_el.data("map");
	let markers = map_el.data("markers");

	if(markers) markers.forEach(o => o.setMap(null));

	markers = [];

	map_locs.forEach( o => {
		let m = new google.maps.Marker({
	      position: o,
	      map: map,
	      icon: {
	      	url: o.icon,
	      	scaledSize: {
	      		width: 40,
	      		height: 40
	      	}
	      }
	    });
	    markers.push(m);
	});

	map_el.data("markers", markers);

	setTimeout(() => setMapBounds(map_el, map_locs), 150);
}


const setMapBounds = (map_el, map_locs) => {
	let map = map_el.data("map");
	let zoom = 14;

	if( map_locs.length == 1 ) {
		map.setCenter(map_locs[0]);
		map.setZoom(zoom);
	} else if( map_locs.length == 0 ) {
		if(window.location.protocol !== "https:") return;
		else {
			navigator.geolocation.getCurrentPosition( p => {
				let pos = {
					lat: p.coords.latitude,
					lng: p.coords.longitude
				};
				map.setCenter(pos);
				map.setZoom(zoom);
			}, (...args) => {
				console.log(args);
			}, {
				enableHighAccuracy: false,
				timeout: 5000,
				maxiumAge: 0
			})
		}
	} else {
		let bounds = new google.maps.LatLngBounds(null);
		map_locs.forEach( o => {
			bounds.extend(o);
		});
		map.fitBounds(bounds);
	}

}





// MAP STYLES
let mapStyles = [
    {
        "stylers": [
            {
                "hue": "#2c3e50"
            },
            {
                "saturation": 250
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 50
            },
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "labels",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    }
];

let paperStyles = [
    {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "hue": "#0066ff"
            },
            {
                "saturation": 74
            },
            {
                "lightness": 100
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "weight": 0.6
            },
            {
                "saturation": -85
            },
            {
                "lightness": 61
            }
        ]
    },
    {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "simplified"
            },
            {
                "color": "#5f94ff"
            },
            {
                "lightness": 26
            },
            {
                "gamma": 5.86
            }
        ]
    }
]




























