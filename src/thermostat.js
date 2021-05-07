'use strict';
class Thermostat{
  constructor(temperature){
    this.temperature = 20
    this.powerSavingMode = true
  }

  up() {
    if (this.powerSavingMode){
      if(this.temperature < 25) {
        this.temperature +=1 
      }
      else{
        return
      }
    }
    else {
      this.temperature
    }
    
  }

  down() {
    if (this.temperature > 10) {
      this.temperature -=1
    }
    else{
      return
    }
  }

  offPowerSavingMode() {
    return this.powerSavingMode = false
  }

}