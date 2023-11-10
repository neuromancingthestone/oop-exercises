class Whip {
    constructor( make, model, year ) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    honk() {
        return "BEEP!";
    }
    toString() {
		const {make, model, year} = this;        
        return `Dis whip is a ${year} ${make} ${model}`;
    }
}
let myFirstVehicle = new Whip("Honda", "Monster Truck", 1999);

class Car extends Whip {
    constructor( make, model, year ) {
        super( make, model, year );
        this.numWheels = 4;
    }
}

class Motorcycle extends Whip {
    constructor( make, model, year ) {
        super( make, model, year );
        this.numWheels = 2;
    }    
    revEngine() {
        return "VROOM!!!";
    }
}

class Garage {
    constructor( capacity ) {
        this.capacity = capacity;
        this.vehicles = [];
    }
    add(vehicle) {
        const cap = this.capacity;
        if(!(vehicle instanceof Whip)) {
            return "Only vehicles allowed in here!";
        }
        if(this.vehicles.length >= cap) {
            return "Sorry, we're full";
        }
        this.vehicles.push(vehicle);
        return "Vehicle added!";
    }
}

let myFirstMotorcycle = new Motorcycle("Honda", "Nighthawk", 2000);
let myFirstCar = new Car("Toyota", "Corolla", 2005);
let garage = new Garage(2);