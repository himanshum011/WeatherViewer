var TempinCelsius;
var TempUnit = 'C';
var NewUnitTemp;

$(document).ready(function(){

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function (position) {
      var lat = "lat=" + position.coords.latitude;
      var lon = "lon=" + position.coords.longitude;
      location(lat,lon);
    });
  }
 

  $(".tempunit").on("click",function(){
     var CurrentUnitTemp= $(".tempunit").html();
     if(CurrentUnitTemp=='C')
     {
     	  NewUnitTemp='F'; 
      }
     else
     {
     	  NewUnitTemp='C';
     }

     $(".tempunit").html( NewUnitTemp);

     if(NewUnitTemp=='F')
     {
     	var fahrenheit = Math.round(parseInt($(".temp").text()) * 9 / 5 + 32);
      $(".temp").html(fahrenheit + '&#176;');
     }
     else
     {
     	$(".temp").html(TempinCelsius + '&#176;');

     }
 });

  


 function location(lat,lon){
 	

 	$.ajax({
 		method:"GET",
 		url:"https://fcc-weather-api.glitch.me/api/current?"+lat+"&"+lon
 	})
 	.done(function(result){
 		
 		TempinCelsius=result.main.temp;
 	

 	
     $(".country").html("Location :"+result.name + "," + result.sys.country);
     $(".temp").html(TempinCelsius+"&#176;");
     $(".space").html(" ");
     $(".tempunit").html(TempUnit);

	 $(".mainweather").html("Weather :"+result.weather[0].main);
	 weatherinfo(result.weather[0].main);
 	});

  }


function weatherinfo(weather)
{
	  var weather = weather.toLowerCase();
  switch (weather) {
    case 'drizzle':
      $(".container-fluid").css("background-image","url('http://www.hdwallpaperspulse.com/wp-content/uploads/2014/05/12/rainy-weather-hd-wallpaper.jpg')");
      break;
    case 'clouds':
      $(".container-fluid").css("background-image","url('http://www.hdwallpaperspulse.com/wp-content/uploads/2015/04/21/Sunset-Beautiful-Clouds-Wallpapers.jpg')");
      break;
    case 'rain':
      $(".container-fluid").css("background-image","url('https://images.pexels.com/photos/39811/pexels-photo-39811.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')");
      break;
    case 'snow':
      $(".container-fluid").css("background-image","url('http://www.hdwallpaperspulse.com/wp-content/uploads/2017/11/10/amazing-natural-wallpaper.jpg')");
      break;
    case 'clear':
      $(".container-fluid").css("background-image","url('http://www.hdwallpaperspulse.com/wp-content/uploads/2014/03/31/3434.jpeg')");
      break;
    case 'thunderstom':
      $(".container-fluid").css("background-image","url('https://images.pexels.com/photos/99577/barn-lightning-bolt-storm-99577.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940')");
       break;
    default:$(".container-fluid").css("background-image","url('https://www.planwallpaper.com/static/images/1-beautiful-nature-backgrounds-nature-wallpapers-nature-landscape.jpeg')");
       break;
    }
}

});