$(document).ready(function() {
  var thermostat = new Thermostat();
  $('#power-mode').css('color', 'green');
  thermostatTemperature();

  
  function thermostatTemperature() {
    $('#temperature').text(thermostat.temperature);
    $('#temperature').attr('class', thermostat.energyUsage());
  };
  
  $('#temperature-up').on('click', function() {
    thermostat.up();
    thermostatTemperature();
  }); 
  
  $('#temperature-down').click(function() {
    thermostat.down();
    thermostatTemperature();
  });
  
  $('#temperature-reset').click(function() {
    thermostat.resetTemperature();
    thermostatTemperature();
  });
  
  $('#power-saving-on').click(function() {
    thermostat.isPowerSavingModeOn();
    $('#power-mode').text('on');
    $('#power-mode').css('color', 'green');
    thermostatTemperature();
  });

  $('#power-saving-off').click(function() {
    thermostat.isPowerSavingModeOff();
    $('#power-mode').text('off');
    $('#power-mode').css('color', 'red');
    thermostatTemperature();
  });

});