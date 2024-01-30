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

  function decreasingOrder(arr){
    return arr.sort((a,b) => b-a)
  }

  console.log(decreasingOrder([5, 2, 1, -10, 8]))



  function copySorted(arr){
    let sorted = arr.sort()
    return sorted
  }

  console.log(copySorted(["HTML", "JavaScript", "CSS"]))



  function Calculator() {

    this.methods = {
      "-": (a, b) => a - b,
      "+": (a, b) => a + b
    };
  
    this.calculate = function(str) {
  
      let split = str.split(' '),
        a = +split[0],
        op = split[1],
        b = +split[2];
  
      if (!this.methods[op] || isNaN(a) || isNaN(b)) {
        return NaN;
      }
  
      return this.methods[op](a, b);
    };
  
    this.addMethod = function(name, func) {
      this.methods[name] = func;
    };
  }


//let john = { name: "John", age: 25 };
//let pete = { name: "Pete", age: 30 };
//let mary = { name: "Mary", age: 28 };
//
//let users = [ john, pete, mary ];

//let names = users.map( user => user.name)
        
    

//console.log( names ); // John, Pete, Mary


//let john = { name: "John", surname: "Smith", id: 1 };
//let pete = { name: "Pete", surname: "Hunt", id: 2 };
//let mary = { name: "Mary", surname: "Key", id: 3 };

//let users = [ john, pete, mary ];

//let usersMapped = /* ... your code ... */
//users.map( user => ({
    //fullName: `${user.name} ${user.surname}`, 
    //id: user.id}))

/*
usersMapped = [
  { fullName: "John Smith", id: 1 },
  { fullName: "Pete Hunt", id: 2 },
  { fullName: "Mary Key", id: 3 }
]
*/

//console.log( usersMapped[0].id ) // 1
//console.log( usersMapped[0].fullName ) // John Smith


let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let nmArr = [ pete, john, mary ];

function sortByAge(){
    return nmArr.sort((a,b) => a.age - b.age)
};

sortByAge(nmArr);

// now: [john, mary, pete]
console.log(nmArr[0].name); // John
console.log(nmArr[1].name); // Mary
console.log(nmArr[2].name); // Pete



let shArr = [1, 2, 3];

function shuffle(shArr){
    //console.log(Math.floor(Math.random() * shArr.length))
    
    for (let i = shArr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1)); // random index from 0 to i
        //console.log(j)
        // swap elements array[i] and array[j]
        // we use "destructuring assignment" syntax to achieve that
        // you'll find more details about that syntax in later chapters
        // same can be written as:
        // let t = array[i]; array[i] = array[j]; array[j] = t
        [shArr[i], shArr[j]] = [shArr[j], shArr[i]];
        return shArr
      }
    
}

console.log(shuffle(shArr));
// arr = [3, 2, 1]

//shuffle(shArr);
// arr = [2, 1, 3]

//shuffle(shArr);
// arr = [3, 1, 2]
// ...


let Avjohn = { name: "John", age: 25 };
let Avpete = { name: "Pete", age: 30 };
let Avmary = { name: "Mary", age: 29 };

let Avarr = [ Avjohn, Avpete, Avmary ];

function getAverageAge(){
    nums =[];
    for(i=0;i<Avarr.length;i++){
        nums.push(Avarr[i].age)
    }
    console.log(nums)
    let sum = nums.reduce((acc,c) => acc + c)
    console.log(sum)
    let average = sum / nums.length
    return average
}

console.log(getAverageAge(Avarr)) ; // (25 + 30 + 29) / 3 = 28


let strings = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
  ];

function unique(arr) {
    /* your code */
    let unique = strings.filter((item, index) => strings.indexOf(item) == index)
    return unique
  }
  
  
  
  console.log( unique(strings) ); // Hare, Krishna, :-O


  //Create keyed object from array
importance: 4
//Let’s say we received an array of users in the form {id:..., name:..., age:... }.

//Create a function groupById(arr) that creates an object from it, with id as the key, and array items as values.

//For example:

let users = [
  {id: 'john', name: "John Smith", age: 20},
  {id: 'ann', name: "Ann Smith", age: 24},
  {id: 'pete', name: "Pete Peterson", age: 31},
];

let usersById = groupById(users);

/*
// after the call we should have:

usersById = {
  john: {id: 'john', name: "John Smith", age: 20},
  ann: {id: 'ann', name: "Ann Smith", age: 24},
  pete: {id: 'pete', name: "Pete Peterson", age: 31},
}
*/

function groupById(array) {
    return array.reduce((obj, value) => {
      obj[value.id] = value;
      return obj;
    }, {})
  }

  console.log(usersById)


  ///////Eloquent js:objecs and arrays

  let stuffArr = [];

  function addEntry(string){
    return stuffArr.push(string)
  }

  function deleteEntry(){
    return stuffArr.pop()
  }

  addEntry("peter")
  addEntry("piped")
  addEntry("a")
  addEntry("pickled")
  addEntry("pepper")
  addEntry("twice")
  console.log(stuffArr)
  deleteEntry()
  console.log(stuffArr)
////////////////

  function range(start,end){
    let numArr=[];

    for(i=start;i<end+1;i++){
        numArr.push(i)
    }
    return numArr
  }

    console.log(range(1,10))

  
    function sum(array){
        return array.reduce((acc,c) => acc + c)
  }

  console.log(sum(range(1,10)))


  function range2(start,end,step){
    let numArr=[];

    //console.log(step)

    if(step === undefined){
        for(i=start;i<end+1;i++){
            numArr.push(i)
        }
    }else
    for(i=start;i<end+1;i= i + step){
        numArr.push(i)
    }
    return numArr
  }


   console.log(range2(1,10,2))
