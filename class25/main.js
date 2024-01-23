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

const another = new Circle(1)