$(function() {

   // center world map

    if ($('#map').length > 0){
    	var map = L.map('map').setView([10, 116.00150299], 2);
    	console.log(map);
    	L.tileLayer('http://{s}.tile.cloudmade.com/' + keys.cloudmade + '/97745/256/{z}/{x}/{y}.png', {
    		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
    		maxZoom: 13
    	}).addTo(map);
    	loadMapData();
    }

	if ($('#fromYear').length > 0){
		setupSlider();
	}
	if ($('#chart').length>0){
		setupTimeSeriesChart();
	}
				
});
function setupSlider(){
	// create slider
	for (var y = 1921; y < 1950; y++){
		$('#fromYear').append("<option value='" + y + "'>" + y  + "</option>");	
		$('#toYear').append("<option value='" + y + "'>" + y  + "</option>");	
	}
	$('#fromYear').val(1930);
	$('#toYear').val(1940);

	$('select#fromYear, select#toYear').selectToUISlider();	
}
function setupTimeSeriesChart(){
	console.log("time series chart")
	var time = new Rickshaw.Fixtures.Time();
	var years = time.unit('years');
	
	var palette = new Rickshaw.Color.Palette( { scheme: 'spectrum14'} );

	for (var i = 0; i < graphseries.length; i++){
		var s = graphseries[i];
		console.log(palette.color())
		s.color = palette.color()
	}
	console.log(graphseries)
	var graph = new Rickshaw.Graph( {
		renderer: 'area',
        element: document.querySelector("#chart"),
        width: 600,
        height: 400,
        /*series: [ {
        	    name: "Fiji",
                 data: [ { x: 1947, y: 282 }, { x: 1948, y: 296 }, { x: 1949, y: 190 }, { x: 1950, y: 180 }],
                 color: palette.color()
        },
        {
                        name: "New Zealand",
                        data: [ { x: 1947, y: 3903 }, { x: 1948, y: 2622},{ x: 1949, y: 2998 }, { x: 1950, y: 3542 }],
	color: palette.color()
		}*/
		series: graphseries
         
    } );

	var format = function(n) {

		var mapping = {
			1947: '_____45-47',
			1948: '47–48',
			1949: '48–49',
			1950: '49–50_____',
			
		};

		return mapping[n];
	}

	var x_ticks = new Rickshaw.Graph.Axis.X( {
		graph: graph,
		orientation: 'bottom',
		element: document.getElementById('x_axis'),
		pixelsPerTick: 200,
		tickFormat: format
	} );
	//var x_axis = new Rickshaw.Graph.Axis.Time( { graph: graph, timeUnit: years } );

	var y_axis = new Rickshaw.Graph.Axis.Y( {
		graph: graph,
		orientation: 'left',
		tickFormat: Rickshaw.Fixtures.Number.formatKMBT,
		element: document.getElementById('y_axis'),
	} );
	var legend = new Rickshaw.Graph.Legend({
		graph: graph,
		element: document.querySelector('#legend')
	});
	var shelving = new Rickshaw.Graph.Behavior.Series.Toggle({
		graph: graph,
		legend: legend
	});
	var hoverDetail = new Rickshaw.Graph.HoverDetail( {
		graph: graph,
		xFormatter: function(x) { return "Year: " + x },
		yFormatter: function(y) { return Math.floor(y) + " people" }
	} );
	/* Not really that useful with such a large dataset
	var highlighter = new Rickshaw.Graph.Behavior.Series.Highlight({
		graph: graph,
		legend: legend
	});*/
	var order = new Rickshaw.Graph.Behavior.Series.Order({
		graph: graph,
		legend: legend
	});
	graph.render();
}
function loadMapData(){
	$.ajax({
		url: 'getdata.php',
		success: function(d){
			console.log("got data",d)
		}
	})
}
//var lat = jQuery(el).data('lat');
//var long = jQuery(el).data('long');
//var map = L.map(el).setView([lat, long], 6);
//var marker = L.marker([lat, long]).addTo(map);
//var mapquestUrl = 'http://{s}.mqcdn.com/tiles/1.0.0/osm/{z}/{x}/{y}.png',
//subDomains = ['otile1','otile2','otile3','otile4']; 
//var mapquest = L.tileLayer(mapquestUrl, {maxZoom: 18, subdomains: subDomains}).addTo(map);