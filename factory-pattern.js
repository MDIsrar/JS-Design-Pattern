"use strict";
// Class : Factory pattern
var vehicleType;
(function (vehicleType) {
    vehicleType[vehicleType["CAR"] = 0] = "CAR";
    vehicleType[vehicleType["TRUCK"] = 1] = "TRUCK";
})(vehicleType || (vehicleType = {}));
class Car {
    constructor(name, doors, model, price) {
        this.name = name;
        this.doors = doors;
        this.model = model;
        this.price = price;
    }
    tellAboutMe() {
        console.log("hello I am a car with props: ", this.name, this.doors, this.model, this.price);
    }
}
class Truck {
    constructor(name, doors, model, price) {
        this.name = name;
        this.doors = doors;
        this.model = model;
        this.price = price;
    }
    tellAboutMe() {
        console.log("hello I am a truck with props: ", this.name, this.doors, this.model, this.price);
    }
}
const vehicle1 = { type: vehicleType.CAR, name: "fortuner", doors: 22, model: "2020", price: 10000 };
const vehicle2 = { type: vehicleType.TRUCK, name: "truck1name", doors: 22, model: "2020", price: 10000 };
class vehicleFactory {
    constructor(options) {
        let vehicle;
        switch (options.type) {
            case vehicleType.CAR: {
                vehicle = new Car(options.name, options.doors, options.model, options.price);
                break;
            }
            case vehicleType.TRUCK: {
                vehicle = new Truck(options.name, options.doors, options.model, options.price);
                break;
            }
        }
        return vehicle;
    }
}
const car = new vehicleFactory(vehicle1);
const truck = new vehicleFactory(vehicle2);
car.tellAboutMe();
truck.tellAboutMe();
