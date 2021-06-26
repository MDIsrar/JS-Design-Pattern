// Class : Factory pattern

interface Vehicle{
    type:number;
    doors:number;
    model:string;
    name:string;
    price:number;
}

enum vehicleType{
    CAR = 0,
    TRUCK = 1
}

class Car{
    protected name: string;
    protected doors: number;
    protected model: string;
    protected price: number;
    constructor(name:string,doors:number,model:string,price:number){
        this.name = name;
        this.doors = doors;
        this.model = model;
        this.price = price;
    }
    tellAboutMe(){
        console.log("hello I am a car with props: " ,this.name,this.doors,this.model,this.price);
    }
}

class Truck{
    protected name: string;
    protected doors: number;
    protected model: string;
    protected price: number;
    constructor(name:string,doors:number,model:string,price:number){
        this.name = name;
        this.doors = doors;
        this.model = model;
        this.price = price;
    }
    tellAboutMe(){
        console.log("hello I am a truck with props: " ,this.name,this.doors,this.model,this.price);
    }
}

const vehicle1 : Vehicle = {type:vehicleType.CAR,name:"fortuner",doors:22,model:"2020",price:10000}
const vehicle2 : Vehicle = {type:vehicleType.TRUCK,name:"truck1name",doors:22,model:"2020",price:10000}

class vehicleFactory{
    constructor(options:Vehicle){
        let vehicle:any;
        switch(options.type){
            case vehicleType.CAR :{
                vehicle = new Car(options.name,options.doors,options.model,options.price);
                break;
            }
            case vehicleType.TRUCK :{
                vehicle = new Truck(options.name,options.doors,options.model,options.price);
                break;
            }
        }
        return vehicle;
    }
}

const car : any = new vehicleFactory(vehicle1);
const truck : any = new vehicleFactory(vehicle2);

car.tellAboutMe()
truck.tellAboutMe();