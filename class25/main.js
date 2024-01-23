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
const circle = {
    radius: 1, //property
    location: { //property
        x:1,
        y:1
    },
    draw: function(){ //method
        console.log("draw")
    }
};

circle.draw();

//if it has more than one method we say that it has behaviors

//factory reconstructor function 
function createCircle(){
   return {
        radius, //property
        
        draw: function(){ //method
            console.log("draw")
        }
    };
}

const circle = createCircle();
circle.draw();