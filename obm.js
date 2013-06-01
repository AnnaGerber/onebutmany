$(function() {

   // center world map
    var map = L.map('map').setView([10, 116.00150299], 2);
    console.log(map);
  L.tileLayer('http://{s}.tile.cloudmade.com/' + keys.cloudmade + '/97745/256/{z}/{x}/{y}.png', {
    attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    maxZoom: 13
}).addTo(map);
$( "#slider" ).slider({
	    range: true,
	    min: 1921,
	    max: 1949,
	    values: [ 1930, 1940 ],
	    slide: function( event, ui ) {
		console.log(event,ui);
		//$( "#amount" ).val( "$" + ui.values[ 0 ] + " - $" + ui.values[ 1 ] );
	    }
	});

});

//var lat = jQuery(el).data('lat');
//var long = jQuery(el).data('long');
//var map = L.map(el).setView([lat, long], 6);
//var marker = L.marker([lat, long]).addTo(map);
//var mapquestUrl = 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
//subDomains = ['otile1','otile2','otile3','otile4']; 
//var mapquest = L.tileLayer(mapquestUrl, {maxZoom: 18, subdomains: subDomains}).addTo(map);