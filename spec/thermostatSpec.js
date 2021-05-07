'use strict';
describe('Thermostat', () => {
  let thermostat;
  beforeEach(() => {
    thermostat = new Thermostat();
  })

  it('has a default temperature of 20', () => {
    expect(thermostat.temperature).toEqual(20)
  })
  
  it('can increase the temparature', () => {
    thermostat.up()
    expect(thermostat.temperature).toEqual(21)
  })

  it('can decrease the temparature', () => {
    thermostat.down()
    expect(thermostat.temperature).toEqual(19)
  })

  it('has a minimum temparature of 10', () => {
    for(let i=0; i<11; i++){
      thermostat.down()
    }
    expect(thermostat.temperature).toEqual(10)
  })

  it('has a power saving mode', () => {
    expect(thermostat.powerSavingMode).toBe(true)
  })

  it('has a max. temperature when power saving mode is on', () => {
    for(let i=0; i<11; i++){
      thermostat.up()
    }
    expect(thermostat.powerSavingMode).toBe(true)
    expect(thermostat.temperature).toEqual(25)
  })

  it('can turn off power saving mode', () => {
    thermostat.offPowerSavingMode()
    expect(thermostat.powerSavingMode).toBe(false)
  })
}) 

