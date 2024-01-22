//ch7
const musketeer = ["Athos", "Porthos", "Aramis"]

for(mk=0;mk< musketeer.length;mk++){
    console.log(musketeer[mk])
}
musketeer.pop();
console.log(musketeer)

musketeer.push("D'Artagnan");
console.log(musketeer)

musketeer.forEach(musket => {
    console.log(musket)
})

for(const muskies of musketeer){
    console.log(muskies)
}


const values = [3, 11, 7, 2, 9, 10];
const add = values.reduce((c,acc) => c + acc)
console.log(add)

console.log(Math.min(...values))

//function sayStop(){
   // wordArr = [];
    //let word = prompt("type any word, I'll stop asking when you say stop")
    //console.log(word)
    //while(word.toLowerCase() !== "stop"){
        //wordArr.push(word);
        //word = prompt("type any word, I'll stop asking when you say stop")
        
    //} console.log(wordArr)
//}

//sayStop()

const aurora = {
    health:150,
    strength:25,
    xp:0,

    describe(){
        return `Aurora has ${this.health} health points, ${this.strength} as strength and ${this.xp} xp points`
    }
};

// TODO: create the character object here

// Aurora is harmed by an arrow
aurora.health -= 20;

// Aurora equips a strength necklace
aurora.strength += 10;

// Aurora learn a new skill
aurora.xp += 15;



console.log(aurora.describe());


// TODO: create the dog object here
const dog ={
    name: "Fang",
    species: "boarhound",
    size: 75,
    bark (){
        return "bark!"
    }
}


console.log(`${dog.name} is a ${dog.species} dog measuring ${dog.size}`);
console.log(`Look, a cat! ${dog.name} barks: ${dog.bark()}`);


//const r = Number(prompt("Enter the circle radius:"));

// TODO: create the circle object here
//const circle = {
    //circumference(){
       //return (Math.PI)*(2 * r)
    //},
    //area(){
       //return (r*r) * (Math.PI)
    //}
//}

//console.log(`Its circumference is ${circle.circumference()}`);
//console.log(`Its area is ${circle.area()}`);

const account = {
    name:"Alex",
    balance: 0,
    credit: function(amount){
        this.balance += amount
    },
    debit: function(amount){
        this.balance -= amount
    },

    describe(){
        return `owner: ${this.name}, balance ${this.balance}`
    }
}

console.log(account.describe());
account.credit(250); // Credit 250
account.debit(80);   // Debit 80

console.log(account.describe()); // Updated description

//Array Methods

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
//alert( fruits.length ); // 

const styles = ["Jazz", "Blues"];
styles.push("Rock-n-Roll");
styles.splice(1,1, "Classics")
console.log(styles)
styles.shift()
console.log(styles)
styles.unshift("Rap", "Reggae")
console.log(styles)

//////

//let arr = ["a", "b"];

//arr.push(function() {
  //alert( this );
//});

//arr[2](); // ?

//function sumInput() {

    //let numbers = [];
  
    //while (true) {
  
      //let value = prompt("A number please?", 0);
  
      // should we cancel?
      //if (value === "" || value === null || !isFinite(value)) break;
  
      //numbers.push(+value);
    //}
  
    //let sum = 0;
    //for (let number of numbers) {
      //sum += number;
    //}
    //return sum;
  //}
  
  
//sumInput()

function getMaxSubSum(arr) {
    let maxSum = 0; // if we take no elements, zero will be returned
  
    for (let i = 0; i < arr.length; i++) {
      let sumFixedStart = 0;
      for (let j = i; j < arr.length; j++) {
        sumFixedStart += arr[j];
        maxSum = Math.max(maxSum, sumFixedStart);
      }
    }
  
    return maxSum;
}

console.log( getMaxSubSum([-1, 2, 3, -9]) )


//ARRAY METHODS

function camelize(str){
    let newArr = []

    let arr = str.split("-")
    console.log(arr)
    
    newArr.push(arr[0].toLowerCase())
    for(i=1;i <arr.length; i++){
        
        newArr.push(arr[i].substring(0,1).toUpperCase() + arr[i].substring(1)) 
        //console.log(newArr.join(""))
    }

    console.log(newArr.join(""))
}

//camelize("background-color")
camelize("-webkit-transition")
//camelize("list-style-image");


function filterRange(arr,a,b){
     return arr.filter( num => num >= a && num <= b)
}

console.log(filterRange([5, 3, 8, 1],1,4))


//remove all values except the ones between 1 and 4
// removed the numbers except from 1 to 4 
function filterRangeInPlace(arr, a, b) {

    for (let i = 0; i < arr.length; i++) {
      let val = arr[i];
  
      // remove if outside of the interval
      if (val < a || val > b) {
        arr.splice(i, 1);
        i--;
      }
    }
  
  }
  
  let arr = [5, 3, 8, 1];
  
  filterRangeInPlace(arr, 1, 4); // removed the numbers except from 1 to 4
  
  console.log( arr ); // [3, 1]