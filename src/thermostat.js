'use strict'

class Thermostat {

  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE_WITH_PSM = 25;
    this.MAXIMUM_TEMPERATURE = 32;
    this.PSM = true;
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  up() {
    if(this.PSM === true && this.temperature >= this.MAXIMUM_TEMPERATURE_WITH_PSM) {
      return this.temperature = this.MAXIMUM_TEMPERATURE_WITH_PSM;
    }
    if(this.PSM === false && this.temperature >= this.MAXIMUM_TEMPERATURE) {
      return this.temperature = this.MAXIMUM_TEMPERATURE
    }
    this.temperature += 1;
  }

  down() {
    if (this.temperature === this.MINIMUM_TEMPERATURE) {
      return;
    };
    this.temperature -= 1;
  }

  isPowerSavingModeOn() {
    return this.PSM === true;
  }

  switchPowerSavingModeOff() {
    this.PSM = false
  }

  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  energyUsage() {
    return 'low-usage'
  }

};