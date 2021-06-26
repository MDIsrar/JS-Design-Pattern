// Class : Singleton pattern

export class Car{
    protected name!: string;
    protected model!: string;
    protected price!: number;
    static exist: boolean;
    static instance: any;
    constructor(name:string , model : string , price: number){
        if(Car.exist){
            return Car.instance;
        }
        this.name = name;
        this.model = model;
        this.price = price;
        Car.exist = true;
        Car.instance = this;
    }
    tellAboutCar(){
        console.log(this.name,this.model,this.price);
    }
}

const innova = new Car("Innova","2020",150000);
const fortuner = new Car("Fortuner","2020",150000);

innova.tellAboutCar();
fortuner.tellAboutCar();