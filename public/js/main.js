var debug = true


function init(){
  document.body.addEventListener('touchmove', function(event) {
    event.preventDefault();
  });

  $(".link-refresh").on("click",function(){
    getPosition()
  })


  // on resize
  setTimeout(function(){
    centerElements()
  },500)

  $(window).resize(function() {
    centerElements()
  });

  // SHAKE EVENT
  var myShakeEvent = new Shake({
      threshold: 15, // optional shake strength threshold
      timeout: 1000 // optional, determines the frequency of event generation
  });
  myShakeEvent.start();
  window.addEventListener('shake', reactToShakeEvent, false);
}


//function to call when shake occurs
function reactToShakeEvent () {
  getPosition()
}


function showSection(section_id) {
  $("#app section").hide()
  $("#app section#"+section_id).show()

  $("body").attr("class","section-"+section_id)
  //centerElements()
}



function info() {
  showSection("info")
}

function getPosition() {
  showSection("loading")
  showLoadingMessage("getting position...")
  if(debug){ // if debug use fake location
    getWeather(45.559394399999995,10.2037211)
  } else {
    navigator.geolocation.getCurrentPosition(function(position) {
      getWeather(position.coords.latitude,position.coords.longitude)
    });
  }
}


function getWeather(latitude,longitude) {
  showLoadingMessage("getting weather...")
  $.simpleWeather({
    location: latitude+","+longitude,
    woeid: '',
    unit: 'c',
    success: function(weather) {
      renderWeather(weather, latitude, longitude)
    },
    error: function(error) {
      alert("error: "+error)
    }
  });

}


function renderWeather(weather, latitude, longitude) {
  console.log(weather)

  var my_code = getOurWeatherCode(weather.code)
  var my_string = getOurWeatherString(my_code)

  // parallax
  my_code=1 // debug
  $("#background .layer1 img").attr("src","img/parallax/sfondo"+my_code+"-02.png")
  $("#background .layer2 img").attr("src","img/parallax/sfondo"+my_code+"-03.png")
  $("#background .layer3 img").attr("src","img/parallax/sfondo"+my_code+"-04.png")
  $("#background .layer4 img").attr("src","img/parallax/sfondo"+my_code+"-05.png")
  $("#background .layer5 img").attr("src","img/parallax/sfondo"+my_code+"-06.png")


  // weather
  //alert(my_string)
  $("#today").addClass("weather-"+my_code)
  $("#today .string").text(my_string)
  $("#today .humidity").text(weather.humidity+"%")
  $("#today .wind").text(weather.wind.speed+" m/s ")
  $("#today .temp .high").text("MAX "+weather.high+"°")
  $("#today .temp .low").text("MIN "+weather.low+"°")

  showSection("home")

  // forecast
  $("#forecast").html("") // empty #forecast ul
  //for(var i in weather.forecast) {
  for(var i=0; i<=3; i++) {
    var forecast = weather.forecast[i]
    var forecast_my_code = getOurWeatherCode(forecast.code)
    var forecast_my_string = getOurWeatherString(forecast_my_code)
    var day = "sunday"

    var html_forecast ='<li class="weather weather-'+forecast_my_code+'">'
    html_forecast += '<div class="weather-icon"></div>'
    html_forecast += '<div class="day">'+forecast.day+'</div>'
    html_forecast += '<div class="temp"><div class="high">'+forecast.high+"°"+'</div><div class="low">'+forecast.low+"°"+'</div></div>'
    html_forecast += '</li>'

    $("#forecast").append(html_forecast)
    console.log(forecast)
  }



  var geocoder = new google.maps.Geocoder();
  var point = new google.maps.LatLng(37.4419, -122.1419)
  var latlng = {lat: latitude, lng: longitude};
  geocoder.geocode({'location': latlng}, function(results, status) {
    if (status === google.maps.GeocoderStatus.OK) {
      if (results[1]) {
        console.log(results[1])
        var city = results[1].formatted_address
        $("#weather .city").text(city)
      } else {
        window.alert('No results found');
      }
    } else {
      window.alert('Geocoder failed due to: ' + status);
    }
  });

  /*
  var map;
  map = new google.maps.Map(document.getElementById('map'), {
    center: {lat: latitude, lng: longitude},
    zoom: 15
  });
  */
}


function showLoadingMessage(message){
  $("#loading-message").text(message)
}


function getOurWeatherCode(its_code){
  /*
  1	sunny
  2	clear day
  3	clear night
  4	cloudy day
  5	cloudy night
  6	foggy
  7	windy
  8	rainy
  9	cold
  10	snow
  11	tunderstorm
  */

  var our_codes = {
  "0": "11",
  "1": "11",
  "2": "11",
  "3": "11",
  "4": "11",
  "5": "10",
  "6": "8",
  "7": "10",
  "8": "8",
  "9": "8",
  "10": "8",
  "11": "8",
  "12": "8",
  "13": "10",
  "14": "10",
  "15": "10",
  "16": "10",
  "17": "11",
  "18": "10",
  "19": "7",
  "20": "6",
  "21": "6",
  "22": "6",
  "23": "7",
  "24": "7",
  "25": "9",
  "26": "4",
  "27": "5",
  "28": "4",
  "29": "5",
  "30": "4",
  "31": "3",
  "32": "1",
  "33": "3",
  "34": "2",
  "35": "8",
  "36": "1",
  "37": "11",
  "38": "11",
  "39": "11",
  "40": "8",
  "41": "10",
  "42": "10",
  "43": "10",
  "44": "4",
  "45": "11",
  "46": "10",
  "47": "10",
  "3200": "0"
  }
  return our_codes[its_code]
}

function getOurWeatherString(our_code) {
    var our_strings = {
      "1": "sunny",
      "2": "clear day",
      "3": "clear night",
      "4": "cloudy day",
      "5": "cloudy night",
      "6": "foggy",
      "7": "windy",
      "8": "rainy",
      "9": "cold",
      "10": "snow",
      "11": "tunderstorm"
    }
    return our_strings[our_code]
}


function centerElements(){

  $(".centered-holder").each(function(index, element){
    $(this).css({"width": "100%"})
    var x =  $(this).width()/2-$(this).find(".centered").width()/2
    var y =  $(this).height()/2-$(this).find(".centered").height()/2
    if(y<0) y=0
    console.log("sono dentro "+$(this).attr("id")+", mi sento largo "+$(this).width()+" e alto " +$(this).height()+", sto per centrare gli elementi .centered dentro di me a x: "+x+" e y: "+y)
    $(this).find(".centered").css({
      left: x+"px",
      top: y+"px"
    })
  })
}
