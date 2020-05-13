'use strict'

class Thermostat {

  constructor() {
    this.MINIMUM_TEMPERATURE = 10;
    this.MAXIMUM_TEMPERATURE = 25;
    this.PSM = true
    this.temperature = 20;
  }

  getCurrentTemperature() {
    return this.temperature;
  }

  up() {
    if(this.PSM === true && this.temperature >= this.MAXIMUM_TEMPERATURE) {
      return this.temperature = this.MAXIMUM_TEMPERATURE;
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

};