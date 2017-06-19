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
			url: 'https://thingproxy.freeboard.io/fetch/https://api.darksky.net/forecast/d39b3dba17a4022bcddeb356e233c352/' + position.coords.latitude + ',' + position.coords.longitude + '?exclude=currently,minutely,daily,alerts,flags',
					
			dataType: 'json',
			success: function ( data ) {
                console.log(data);
        		var post = data.shift(1); // The data is an array of posts. Grab the first one.
				var tempWeath = post.content;
				quote = tempWeath.replace(/(<p[^>]+?>|<p>|<\/p>)/img, ""); //remove p tags
				author = "&mdash; " + post.title;
       			$( '#author' ).html( author );
       			$( '#quotes' ).html( quote );
				},
				cache: false
				});
			};
    getLocation();
});