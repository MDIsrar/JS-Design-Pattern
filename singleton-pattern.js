// Class : Singleton pattern
export class Car {
    constructor(name, model, price) {
        if (Car.exist) {
            return Car.instance;
        }
        this.name = name;
        this.model = model;
        this.price = price;
        Car.exist = true;
        Car.instance = this;
    }
    tellAboutCar() {
        console.log(this.name, this.model, this.price);
    }
}
const innova = new Car("Innova", "2020", 150000);
const fortuner = new Car("Fortuner", "2020", 150000);
innova.tellAboutCar();
fortuner.tellAboutCar();
