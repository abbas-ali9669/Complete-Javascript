
class CreateObj{
    constructor(fname, age, address){
        this.fname = fname;
        this.age = age;
        this.address = address;
    }
    about(){
        return `Full Name: ${this.fname}\nAge: ${this.age}\nCity: ${this.address}`
    };
    
    is18(){
        return this.age > 18
    };
};

class NewObj extends CreateObj{
    constructor(fname, age, address, country){
        super(fname, age, address);
        this.country = country;
    };

    objCountry(){
        return `${this.fname} is from ${this.country}`
    }
}


const object1 = new NewObj("Abbas Ali", 22, "Shinkiari");
const object2 = new NewObj("Ahsan Ali", 25, "Mansehra", "Pakistan");
const object3 = new NewObj("Ahmed Ali",29, "Abbottabad");
console.log(object1.about());
console.log(object3.is18())
console.log(object2.objCountry())
