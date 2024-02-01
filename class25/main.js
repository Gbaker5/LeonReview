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

//OBJECT LITERAL
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

//FACTORY RECONSTRUCTOR FUNCTION
function createCircle(radius){
   return {
        radius, //property
        
        draw: function(){ //method
            console.log("draw")
        }
    };
}


//circle.draw();

//CONSTRUCTOR FUNCTION

//function Circle(radius){
    //console.log('this', this)
    //this.radius= radius;
    //this.draw = function(){
        //console.log(draw);  
    //}
//}


//const circle = new Circle(10);

//FOR IN LOOP - TO ITERATE THROUGH OBJECT
//for(let key in circle){
   // if(typeof circle[key] !== 'function')// only properties not methods - this excludes functions
   // console.log(key, circle[key]) //key = peoperties , circle[key] = values of keys
//}

//const keys = Object.keys(circle)
//console.log(keys)

//if('radius' in circle)
//console.log("Circle has radius")


//ADDING AND DELETING PROPERTIES
//circle.location = { x: 1 }; //adding a property

//const propertyName = 'location';

//circle['location'] = { x: 1}; //adding a property using bracket notation

//delete circle.location;
//delete circle['location']




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
//console.log(number)

//reference

let obj = {value: 10};

function increase(obj){
    obj.value++;
}

increase(obj);
increase(obj)
//console.log(obj)


function Circle(radius){
    
    this.radius= radius;

    let defaultLocation = { x:0, y:0}; //cannot be accsed outside of this function because it is stored in variable instead of using this.defaultLocation

    let computeOptimumLocation = function(factor){
        //..
    }

    this.getDefaultLocation = function(){
        return defaultLocation;
    }

    this.draw = function(){
        computeOptimumLocation(0.1);
        //defaultLocation
    }

    //Object.defineProperty(this, 'defaultLocation', { //use objectdefine property to define getters and setters
        //get: function (){
            //return defaultLocation;
        //},
        //set: function(value){
            //if(!value.x || !value.y)
            //throw new Error('invalid location')

            //defaultLocation = value;
        //}
    //})
}


const circle = new Circle(10);
circle.defaultLocation = 1





/////////




function StopWatch(){

    let startTime, endTime, running, duration = 0; 

    this.start = function(){
        if (running)
        throw new Error('Stopwatch is already running')

        running = true;
        console.log(running)
        startTime = new Date();
        //console.log(startTime)
    };

    this.stop = function(){
        if (!running)
        throw newError('Stopwatch has not started')

        running = false;
        
        endTime = new Date();
        
        const seconds = (endTime.getTime() - startTime.getTime()) /1000;
        duration += seconds

        document.querySelector('#Duration').innerText = sw.duration;
    };

    this.reset = function(){
        startTime = null;
        endTime = null;
        running = false;
        duration = 0;

        document.querySelector('#Duration').innerText = sw.duration
    };

    Object.defineProperty(this, 'duration',{
        get: function( ) {return duration}
    });
}

const sw = new StopWatch()


document.querySelector('#start').addEventListener('click', function() {
    sw.start()
})
document.querySelector('#stop').addEventListener('click', function() {
    sw.stop()
})
document.querySelector('#reset').addEventListener('click', function() {
    sw.reset()
})