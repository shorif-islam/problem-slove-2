    //  answer to tha question no-1   {Destructuring}
    // {Destructuring}
    const person = {
        nam: "shoriful islam",
        age: 21
    }
    const {nam,age} = person;
    console.log(nam,age);


     //  answer to tha question no-2 {Module}
     
     import { circle } from "./module.js";
circle();

 //  answer to tha question no-3  {Classes}
 class Rectangle {
    constructor(height,width){
        this.height = height;
        this.width = width;
    }
    calculateArea(){
        return this.height * this.width;
    }
}
const Area = new Rectangle(12,10);
console.log(Area.calculateArea());

 //  answer to tha question no-4  {Getter and Setter}
const Person = {
    firstName: "king",
    lastName: "khan",
    fullname: "",
    get fullName(){
        return this.firstName+" "+this.lastName;
    },
    set Fname(fullname){
       this.fullname = fullname;
    }
}
Person.Fname = "Mehedi Hasan";
console.log(Person.fullName + "\n" + Person.fullname);


// answer to tha question no-5    {class Expressions}
let Circle = class{
    constructor(r){
        this.radius = r;
    }
    circumference(){
        let res = 2 * Math.PI * this.radius;
        return res.toFixed(2);
    }
}
const radius = new Circle(2);
console.log(radius.circumference());


// answer to tha question no-6   {Computed Properties}
let firstName = "jim";
let lastName = "islam";
let profession = "prof";
const com = {
    [firstName]: "shoriful",
    [lastName]: "islam",
    [profession]: "programmer"
}
console.log(`My name is ${com.fname} ${com.lname} and I'm a ${com.prof}`);


// answer to tha question no-7  {Inheritance}
class dog {

    constructor(animalName){
        this.animalName = animalName;
    }
    result(){
        return `This animal name is ${this.animalName}`
    }
}

class Animal extends dog {

    constructor(animalName,animalOld){
        super(animalName);
        this.animalOld = animalOld;
    }
    show(){
        return `${this.result()} and ${this.animalName} is ${this.animalOld} years old.` 
    }
}

const animalName1 = new Animal("dog",25);
console.log(animalName1.show());


// answer to tha question no-8  {new target operator} 
class Shapes {
    constructor(name) {
      if (!new.target.name) {
          throw 'Must use new operator';
        }
        console.log(this.name = name)
    }
}
let mehedi = new Shapes("mehedi");

// answer to tha question no-9   {static}
class MathUtil {
    static square(x){
     return x * x;
    }
 }
 console.log(MathUtil.square(5));

// answer to tha question no-10   {symbol}
const sym = Symbol();
const obj = {
    [sym] : "shoriful islam"
}
console.log(obj[sym]);
