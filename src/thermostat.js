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
      }else{
        return
      }
    }else if (this.powerSavingMode === false) {
      if(this.temperature < 32) {
        this.temperature +=1 
      }else{
        return
      }
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

  onPowerSavingMode() {
    return this.powerSavingMode = true
  }

  reset() {
    this.temperature = 20
  }
}