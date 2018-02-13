// JavaScript Document
			

var myIcon = L.icon({
    iconUrl: 'https://d30y9cdsu7xlg0.cloudfront.net/png/974265-200.png',
    iconSize: [20, 20],
    iconAnchor: [22, 20],
    popupAnchor: [-3, -20],
    shadowUrl: 'my-icon-shadow.png',
    shadowSize: [20, 20],
    shadowAnchor: [20, 20]
});


L.marker([-33.5359312, -70.789277],{icon: myIcon}).bindPopup("popupContent").openPopup().addTo(coolPlaces).addTo(coolPlaces);

L.marker([-33.5216322, -70.758993],{icon: myIcon}).bindPopup("popupContent").openPopup().addTo(coolPlaces).addTo(coolPlaces);

L.marker([-33.5158732, -70.7431477],{icon: myIcon}).bindPopup("popupContent").openPopup().addTo(coolPlaces);

L.marker([-33.5216322, -70.758993]).addTo(coolPlaces);
L.marker([-33.4824437, -70.7381859]).addTo(coolPlaces);
L.marker([-33.4890418, -70.7557861]).addTo(coolPlaces);
L.marker([-33.5171928, -70.7496425]).addTo(coolPlaces);
L.marker([-33.495617, -70.7402693]).addTo(coolPlaces);
L.marker([-33.5084182, -70.7421794]).addTo(coolPlaces);
L.marker([-33.5458187, -70.7814338]).addTo(coolPlaces);
L.marker([-33.5171606, -70.749885]).addTo(coolPlaces);
L.marker([-33.5065132, -70.7565984]).addTo(coolPlaces);
L.marker([-33.4987395, -70.7675495]).addTo(coolPlaces);
L.marker([-33.5090065, -70.7667503]).addTo(coolPlaces);
L.marker([-33.5042194, -70.7756614]).addTo(coolPlaces);
L.marker([-33.4974097, -70.7661914]).addTo(coolPlaces);
L.marker([-33.478362, -70.7427567]).addTo(coolPlaces);


