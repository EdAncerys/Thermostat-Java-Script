describe('Thermostat', function() {
  var thermostat;
  beforeEach(function() {
    thermostat = new Thermostat();
  });
  it('starts on 20 degrees by default', function() {
    expect(thermostat.getCurrentTemperature()).toEqual(20);
  });

  it('can increment temperature', function() {
    thermostat.up();
    expect(thermostat.temperature).toEqual(21)
  });

  it('able to decrease temperature', function() {
    thermostat.down();
    expect(thermostat.temperature).toEqual(19)
  });

});