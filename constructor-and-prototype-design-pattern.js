"use strict";
// Class : constructor and prototype pattern
// Constructor Pattern
// class Car{
//     name: string;
//     model: string;
//     price: number;
//     constructor(name:string,model:string,price:number){
//         this.name = name;
//         this.model = model;
//         this.price  = price;
//     }
//     aboutCar(){
//         console.log(this.name,this.model,this.price);
//     }
// }
// const fortuner = new Car("Fortuner","2019",150000);
// fortuner.aboutCar();
// Prototype Pattern
class Animal {
    constructor(name, animalType) {
        this.name = name;
        this.animalType = animalType;
    }
    tellAboutYou() {
        console.log("hello I am a " + this.animalType + " and my name is " + this.name);
    }
}
class Cat extends Animal {
    run() {
        console.log(this.name + " is running");
    }
}
const myCat = new Cat("myCat", "cat");
myCat.tellAboutYou();
myCat.run();
