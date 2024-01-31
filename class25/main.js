//object oriented programming

let baseSalary = 30_000;
let overtime = 10;
let rate = 20;

function getWage(baseSalary, overtime, rate){
    return baseSalary + (overtime * rate)
}

let employee = {
    baseSalary: 30_000,
    overtime: 10,
    rate: 20,
getWage: function() {
    return this.baseSalary + (this.overtime * this.rate)
}
};
employee.getWage();


///////////

console.log("hello world")

//object  literal
//const circle = {
    //radius: 1, //property
    //location: { //property
        //x:1,
        //y:1
    //},
    //draw: function(){ //method
       // console.log("draw")
    //}
//};

//circle.draw();

//if it has more than one method we say that it has behaviors

//Factory reconstructor function 
function createCircle(radius){
   return {
        radius, //property
        
        draw: function(){ //method
            console.log("draw")
        }
    };
}

const circle = createCircle(1);
circle.draw();

//constructor Function

function Circle(radius){
    console.log('this', this)
    this.radius= radius;
    this.draw = function(){
        console.log(draw);  
    }
}

//const Circle1 = new Function( 'radius', 
    //this.radius = radius,
    //this.draw = function() {
        //console.log('draw');
    //}
//) 

Circle.call({}, 1);
Circle.apply({}, [1,2,3])

const another = new Circle(1)

//functions are objects in js

//value types/Primatives = Number, String, Boolean, Symbol, undefined, null
//Reference types = Object, Function, Array

//primatives
let x=10;
let y=x;

x=20;
//reference
let a = {value: 10};
let b = a;

a.value = 20;

//primatives are copied by their value. 
//objects are copied by their references

let number = 10;

function increase(number){
    number++;
}

increase(number);
console.log(number)

//reference

let obj = {value: 10};

function increase(obj){
    obj.value++;
}

increase(obj);
increase(obj)
console.log(obj)