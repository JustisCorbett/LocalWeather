var weatherSum;
var C = false;
var F;
var iconSelector;
$(document).ready(function(){
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
				console.log(F);
				console.log(iconSelector);
				setTemperature(F,C);
				},
				cache: false
				});
			};
	function setTemperature(F,C){
		if (C){
			$(".temperature").html(String(Math.round((F-32)*(5/9))));
			$("#tempIcon").removeClass("wi-fahrenheit").addClass("wi-celsius");
			$("#celcius").css({color:"white", border:"2px solid white"});
			$("#fahrenheit").css({color:"grey", border:"2px solid grey"});
		} else {
			$(".temperature").html(String(F));
			$("#tempIcon").removeClass("wi-celsius").addClass("wi-fahrenheit");
			$("#fahrenheit").css({color:"white", border:"2px solid white"});
			$("#celcius").css({color:"grey", border:"2px solid grey"});
	}
	};
	function setIcon(iconSelector){
		switch(iconSelector){
			case ""
		}
	};
    getLocation();
	$("#celcius").on("click", function(C){
    	C = true;
		setTemperature(F,C);
	});
	$("#fahrenheit").on("click", function(C){
		C = false;
		setTemperature(F,C);
	});
});


