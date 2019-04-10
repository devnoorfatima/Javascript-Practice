$.getJSON('https://geoip-db.com/json/')
.done(function (location) {
  $('#country').html(`${'Country:'} ${location.country_name}`);
  $('#state').html(location.state);
  $('#city').html(`${'City:'} ${location.city}`);
  $('#latitude').html(location.latitude);
  $('#longitude').html(location.longitude);
  $('#ip').html(location.IPv4);
  var city = [location.city];
   var lon = [location.longitude];
   var lat = [location.latitude];
  $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + lon)
  .done(function(data){
    $('#temperature').html(data.main.temp.toFixed(1)+ "°C");
    $('#type').html(`${data.weather[0].main}`);
})
});
function getFarenheit(){
    // let farenheit = (parseInt(data.main.temp) * 1.8) + 32
    $("#temperature").html(((parseInt($("#temperature").text()) * 1.8) + 32).toFixed(1)+ '°F');
    $('.cel').css("opacity", "0.5");
    $('.far').css("opacity", "1");
    $('.far').css("color", "#fff");
    $(".far").prop("disabled", true);
    $(".cel").prop("disabled", false);
};
function getCelcius(){
    $("#temperature").html(Math.round((parseInt($("#temperature").text()) - 32)/ 1.8).toFixed(1));
    $('.far').css("opacity", "0.5");
    $('.cel').css("opacity", "1");
    $(".cel").prop("disabled", true);
    $(".far").prop("disabled", false);
}

