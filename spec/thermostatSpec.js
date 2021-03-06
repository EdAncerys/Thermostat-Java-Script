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

  it('able to set min temperature', function() {
    for(let i = 0; i < 11; i++) {
      thermostat.down();
    }
    expect(thermostat.temperature).toEqual(10)
  });

  it('able to set max temperature with PSM temperature', function() {
    for(let i = 0; i < 10; i++) {
      thermostat.up();
    };
    expect(thermostat.temperature).toEqual(25)
  });

  it('have an option of power saving mode', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true)
  });

  it('if PSM is on max temperature is up to 25', function() {
    expect(thermostat.isPowerSavingModeOn()).toBe(true);
    for(let i = 0; i < 6; i++) {
      thermostat.up();
    };
    expect(thermostat.temperature).toEqual(thermostat.MAXIMUM_TEMPERATURE_WITH_PSM)
  });

  it('can switch of PSM', function() {
    thermostat.isPowerSavingModeOff();
    expect(thermostat.PSM).toBe(false);
  });

  it('can increase temperature up to max if PSM is off', function() {
    thermostat.isPowerSavingModeOff();
    for(let i = 0; i < 13; i++) {
      thermostat.up();
    }
    expect(thermostat.temperature).toEqual(thermostat.MAXIMUM_TEMPERATURE)
  });

  it('able to reset temperature', function() {
    thermostat.resetTemperature();
    expect(thermostat.temperature).toEqual(20);
  });

  describe('Power Usage', function(){
    it('if temperature <= 18 usage as low-usage', function() {
      for(let i = 0; i < 3; i++) {
        thermostat.down();
      };
      expect(thermostat.energyUsage()).toBe('low-usage')
    });

    it('if temperature < 18 && <= 25 as medium-usage', function() {
      expect(thermostat.energyUsage()).toBe('medium-usage')
    });

    it('if temperature > 25 as high-usage', function() {
      thermostat.isPowerSavingModeOff();
      for(let i = 0; i < 6; i++) {
        thermostat.up();
      };
      expect(thermostat.energyUsage()).toBe('high-usage')
    });

  });

});