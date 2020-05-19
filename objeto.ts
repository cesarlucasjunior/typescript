class Spacecraft{

    constructor (public propulsor:string){}

    jumpIntoHyperSpace(){
        console.log(`Entering hyperspace with ${this.propulsor}...`)
    }
}

let ship = new Spacecraft('hyperdrive')
ship.jumpIntoHyperSpace()


//Criando classe extendendo da Spacecraft
class Millenium extends Spacecraft implements Containership{

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

let falcon = new Millenium()
falcon.jumpIntoHyperSpace()

//Criando interface:
interface Containership{
    cargoContainer:number
}

let goodForTheJob = (ship:Containership) => ship.cargoContainer > 2

console.log(`Is the ship good for the job? ${goodForTheJob(falcon) ? 'YES' : 'NO'}`)