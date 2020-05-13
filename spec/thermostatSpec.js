describe('Thermostat', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  it('starts on 20 degrees by default', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

});