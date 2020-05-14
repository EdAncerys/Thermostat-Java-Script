$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#power-mode').css('color', 'green');
  thermostatTemperature();

  function thermostatTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };

  function saveThermostat() {
    var city = document.getElementById("city-selected").textContent;
    $('#save-temperature').val(thermostat.temperature)
    $('#save-PSM').val(thermostat.PSM)
    $('#save-city').val(city)
  };

  saveThermostat();
  
  $('#temperature-up').on('click', function() {
    thermostat.up();
    saveThermostat();
    thermostatTemperature();
  }); 
  
  $('#temperature-down').click(function() {
    thermostat.down();
    saveThermostat();
    thermostatTemperature();
  });
  
  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    saveThermostat();
    thermostatTemperature();
  });
  
  $('#power-saving-on').click(function() {
    thermostat.isPowerSavingModeOn();
    $('#power-mode').text('on');
    $('#power-mode').css('color', 'green');
    saveThermostat();
    thermostatTemperature();
  });

  $('#power-saving-off').click(function() {
    thermostat.isPowerSavingModeOff();
    $('#power-mode').text('off');
    $('#power-mode').css('color', 'red');
    saveThermostat();
    thermostatTemperature();
  });

  // API integration 
  function displayWeather(city) {
    var url = 'http://api.openweathermap.org/data/2.5/weather?q=' + city;
    var token = '&appid=a3d9eb01d4de82b9b8d0849ef604dbed';
    var units = '&units=metric';
    $.get(url + token + units, function(data) {
      $('#current-temperature').text(data.main.temp);
    });
    $.get(url + token + units, function(data) {
      $('#feels-like-temperature').text(data.main.feels_like);
    });
  };

  displayWeather('London');

  $('#select-city').submit(function(event) {
    event.preventDefault();
    var city = $('#current-city').val();
    displayWeather(city);
    $('#city-selected').text(city);
    $('.city-temp').css('color', 'red');
    saveThermostat();
  });

});
