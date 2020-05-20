import {Spacecraft, Containership} from './base-ships'

//Criando classe extendendo da Spacecraft
export class Millenium extends Spacecraft implements Containership{

    cargoContainer:number

    constructor(){
        super('hyperdrive')
        this.cargoContainer = 3
    }

    jumpIntoHyperSpace(){
        if(Math.random() >= 0.5){
            super.jumpIntoHyperSpace()
        } else {
            console.log('Failed to jump into hyperspace')
        }
    }
}