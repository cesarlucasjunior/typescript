import {Spacecraft, Containership} from './base-ships'
import {Millenium} from './starfighters'

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperSpace()

let falcon = new Millenium()
falcon.jumpIntoHyperSpace()

let goodForTheJob = (ship:Containership) => ship.cargoContainer > 2
console.log(`Is the ship good for the job? ${goodForTheJob(falcon) ? 'YES' : 'NO'}`)