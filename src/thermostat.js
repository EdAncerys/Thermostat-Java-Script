'use strict'

class Thermostat {

  constructor() {
    this.DEFAULT_TEMPERATURE = 20;
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE_WITH_PSM = 25;
    this.MAXIMUM_TEMPERATURE = 32;
    this.LOW_USAGE_TEMPERATURE = 18
    this.MEDIUM_USAGE_TEMPERATURE = 25
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

  isPowerSavingModeOff() {
    this.PSM = false
  }

  resetTemperature() {
    this.temperature = this.DEFAULT_TEMPERATURE;
  }

  energyUsage() {
    if(this.temperature <= this.LOW_USAGE_TEMPERATURE) {
      return 'low-usage'
    };
    if(this.temperature > this.LOW_USAGE_TEMPERATURE && this.temperature <= this.MEDIUM_USAGE_TEMPERATURE) {
      return 'medium-usage'
    };
    return 'high-usage'
  }

};