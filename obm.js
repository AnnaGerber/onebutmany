$(function() {
	if (!console && !console.log) {
		console = {log:function(){}}
	}
var map, markers, slider;
var markerArray = [];
   // center world map

    if ($('#map').length > 0){
    	
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
	$('#fromYear').val(1938);
	$('#toYear').val(1949);

	slider = $('select#fromYear, select#toYear').selectToUISlider();	
	$( "#slider" ).on( "slidestop", function( event, ui ) {
		
		var values = ui.values;
		var startYear = values[0] + 1921;
		var endYear = values[1] + 1921;
		//console.log("slider stopped " + startYear  + " " + endYear)
		updateDisplay({startYear: startYear, endYear: endYear});
	} );
}
function setupTimeSeriesChart(){
	var time = new Rickshaw.Fixtures.Time();
	var years = time.unit('years');
	
	var palette = new Rickshaw.Color.Palette( { scheme: 'spectrum14'} );

	for (var i = 0; i < graphseries.length; i++){
		var s = graphseries[i];
		s.color = palette.color()
	}
	var graph = new Rickshaw.Graph( {
		renderer: 'area',
        element: document.querySelector("#chart"),
        width: 600,
        height: 400,
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
	map = L.map('map').setView([10, 116.00150299], 2);
	markerArray = [];
	L.tileLayer('http://{s}.tile.cloudmade.com/' + keys.cloudmade + '/97745/256/{z}/{x}/{y}.png', {
		attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, <a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="http://cloudmade.com">CloudMade</a>',
		maxZoom: 13
	}).addTo(map);
    markers = new L.MarkerClusterGroup();

	var params = {startYear: 1921, endYear: 1949};
	//var startYear = $('#slider').
	updateDisplay(params);

}
function updateDisplay(params) {
	var planeMarker = L.AwesomeMarkers.icon({
		icon: 'plane', 
		color: 'darkblue'
	});
	var shipMarker = L.AwesomeMarkers.icon({
		icon: 'anchor', 
		color: 'darkpurple'
	});
	for (var i = 0; i < markerArray.length; i++){
		map.removeLayer(markerArray[i]);
	}
	
	$.ajax({
		url: 'api/getpassengercounts.php',
		data: params,
		success: function(d){
			
			$.each(d.arrivalcounts, function(item, index){
				
				var arrivalresult = d.arrivalcounts[item];
				
				var port = arrivalresult[1];
				var passengercount = arrivalresult[0];
		
				$.ajax({
					url: 'api/getgeodata.php',
					data: {place: port},
					success: function(gd){
						var data = gd.embarkation;
						// in case of null data
						for (var i = 0; i < data.length; i++){
							var result = data[i];
							if (result[0] != ""  && result[1]){
								var port = result[0];
								var latlng = result[1].split(",");
								if (latlng && latlng.length == 2){
									var marker = L.marker(latlng, {icon: shipMarker})
									.addTo(map);

									$(marker)
									  .data('port', port)
									  .data('passengers', passengercount)
									  .on("click", popupInfo)
									  .on('mouseover', function(e2){
										
										this.bindPopup(
											$(this).data('port') 
											+ " (" + $(this).data('passengers') + " passengers)"
										).openPopup();
									});
									markers.addLayer(marker);
									markerArray.push(marker);
								}
							}
						}
					}
						
				});

			});
		}
	})
}
function popupInfo(e){
	
	$('#slider').hide();
	var port = $(e.currentTarget).data('port');
	var fromYear = $(slider[0]).val();
	var toYear = $(slider[1]).val();
	// showModal(port,fromYear,toYear);

	// temporary dummy display for demo
	$('#myModal').modal('show').on('hide',function(){$('#slider').show()});
}