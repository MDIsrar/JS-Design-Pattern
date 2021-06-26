// Class : Fascade Pattern
interface UserType{
    username:string;
    age:number;
    email:string;
}

class User{
    protected username: string;
    protected age: number;
    protected email: string;
    constructor(data:UserType){
        this.username = data.username;
        this.age = data.age;
        this.email = data.email
    }
    protected validateUser(){
        console.log("validating user");
    }
    protected saveUser(){
        console.log("save user by calling axios to dabase");
    }
    protected notifyUser(){
        console.log("notify user that is saved");
    }
    
}

class UserFacade extends User{
    constructor(data:UserType){
        super(data);
    }
    validateUserAndSaveUser(){
        this.validateUser();
        this.saveUser();
        this.notifyUser();
    }
}

const myUser = new UserFacade({username:"abcd01",age:22,email:"abcd01@gmail.com"});

// myUser.validateUserAndSaveUser();