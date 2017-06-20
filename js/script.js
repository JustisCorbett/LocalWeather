$(document).ready(function(){
	var weatherSum;
	var temperature;
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
				var tempWeathr = data.currently;
				console.log(tempWeather);
				
       			$( '.' ).html( author );
       			$( '#quotes' ).html( quote );
				},
				cache: false
				});
			};
    getLocation();
});