$(document).ready(function(){
	var weatherSum;
	var C = false;
	var F;
	var iconSelector;
    function getLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(getWeather);
        } else {
            window.alert("Geolocation is not supported by this browser.");
        }
    }
    function getWeather(position){
        console.log(position);
        $.ajax({
			url: 'https://thingproxy.freeboard.io/fetch/https://api.darksky.net/forecast/d39b3dba17a4022bcddeb356e233c352/' + position.coords.latitude + ',' + position.coords.longitude + '?exclude=hourly,minutely,daily,alerts,flags',
					
			dataType: 'json',
			success: function ( data ) {
                console.log(data);
				weatherSum = data.currently;
				console.log(weatherSum);
				icon = weatherSum.icon;
       			$( '.currentWeather' ).html( weatherSum.summary );
       			F = weatherSum.temperature;
				iconSelector = weatherSum.icon;
				},
				cache: false
				});
			};
    getLocation();
});
$(".celcius").on("click", function(C){
    	C = true;
		setTemperature();
});
function setTemperature(F,C){
		if (C){
			return Math.round((F-32)*(5/9));
		}
	};