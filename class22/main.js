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

//////////
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

   ///////////

   // Function to reverse an array and return a new array
function reverseArray(arr) {
    let reversedArray = [];
    for (let i = arr.length - 1; i >= 0; i--) {
      reversedArray.push(arr[i]);
    }
    return reversedArray;
  }
  
  // Function to reverse an array in place
  function reverseArrayInPlace(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
      // Swap elements from the beginning and end of the array
      let temp = arr[i];
      arr[i] = arr[arr.length - 1 - i];
      arr[arr.length - 1 - i] = temp;
    }
  }

  // Function to convert an array to a list
function arrayToList(array) {
    let list = null;
    for (let i = array.length - 1; i >= 0; i--) {
      list = { value: array[i], rest: list };
    }
    return list;
  }
  
  // Function to convert a list to an array
  function listToArray(list) {
    let array = [];
    while (list !== null) {
      array.push(list.value);
      list = list.rest;
    }
    return array;
  }
  
  // Function to add an element to the front of a list
  function prepend(element, list) {
    return { value: element, rest: list };
  }
  
  // Function to retrieve the element at a given position in the list
  function nth(list, position) {
    if (!list) {
      return undefined;
    } else if (position === 0) {
      return list.value;
    } else {
      return nth(list.rest, position - 1);
    }
  }
  

  let obj = {here: {is: "an"}, object: 2};

  function deepEqual(a, b) {
    // Check if both values are equal using strict equality (===)
    if (a === b) {
      return true;
    }
  
    // Check if both values are objects and not null
    if (typeof a === 'object' && a !== null && typeof b === 'object' && b !== null) {
      // Get the keys of both objects
      let keysA = Object.keys(a);
      let keysB = Object.keys(b);
  
      // Check if the number of properties is the same
      if (keysA.length !== keysB.length) {
        return false;
      }
  
      // Iterate over the keys and recursively check the values
      for (let key of keysA) {
        if (!keysB.includes(key) || !deepEqual(a[key], b[key])) {
          return false;
        }
      }
  
      // If all checks pass, the objects are deep equal
      return true;
    }
  
    // If the values are not objects, or one of them is null, they are not deep equal
    return false;
  }
  



console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, {here: 1, object: 2}));
// → false
console.log(deepEqual(obj, {here: {is: "an"}, object: 2}));
// → true


////////////Cardio

const inventors = [
    { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
    { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
    { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
    { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
    { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
    { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
    { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
    { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
    { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
    { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
    { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
    { first: 'Hanna', last: 'Hammarström', year: 1829, passed: 1909 }
  ];

  
  
  // Array.prototype.filter()
  // 1. Filter the list of inventors for those who were born in the 1500's

  let fifteen = inventors.filter( inventors => inventors.year >= 1500 && inventors.year < 1600)
  console.log(fifteen)

  // Array.prototype.map()
  // 2. Give us an array of the inventors first and last names

  let firstLast = inventors.map(inventors => inventors.first +' '+ inventors.last)
  console.log(firstLast)

  // Array.prototype.sort()
  // 3. Sort the inventors by birthdate, oldest to youngest

  let sortByBirthdate = inventors.sort((a,b) => a.year - b.year)
  console.log(sortByBirthdate)

  // Array.prototype.reduce()
  // 4. How many years did all the inventors live all together?
    function yearsSum(){
        let lived = inventors.map( inventors => [inventors.year, inventors.passed])
        console.log(lived)
        let age = lived.map(age => age[1] - age[0])
        console.log(age)
        let sum = age.reduce((acc,c) => acc + c)
        console.log(sum)
    }

    yearsSum()
  // 5. Sort the inventors by years lived

    function yearsLivedSort(){
        inventors.forEach((inventor) => {
        let lived = [inventor.year, inventor.passed]
        //console.log(lived)
        let age = lived[1] - lived[0]
        //console.log(age)
        inventor.age = (age)
        //hhiwlikcbjjbconsole.log(inventors)

        
    })

    inventors.sort((a,b) => a.age - b.age)
        console.log(inventors)
    }

    yearsLivedSort()

  // 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
  // https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris

  let boulevards = 
  ["Boulevards of Paris",
    "City walls of Paris",
    "Thiers wall",
    "Wall of Charles V",
    "Wall of Philip II Augustus",
  "City gates of Paris",
    "Haussmann's renovation of Paris",
    "Boulevards of the Marshals",
  "Boulevard Auguste-Blanqui",
  "Boulevard Barbès",
    "Boulevard Beaumarchais",
    "Boulevard de l'Amiral-Bruix",
    "Boulevard Mortier",
    "Boulevard Poniatowski",
    "Boulevard Soult",
  "Boulevard des Capucines",
    "Boulevard de la Chapelle",
    "Boulevard de Clichy",
    "Boulevard du Crime",
  "Boulevard du Général-d'Armée-Jean-Simon",
  "Boulevard Haussmann",
    "Boulevard de l'Hôpital",
  "Boulevard des Italiens",
  "Boulevard Lefebvre",
  "Boulevard de la Madeleine",
    "Boulevard de Magenta",
    "Boulevard Malesherbes",
    "Boulevard Marguerite-de-Rochechouart",
    "Boulevard Montmartre",
    "Boulevard du Montparnasse",
  "Boulevard Raspail",
    "Boulevard Richard-Lenoir",
  "Boulevard Saint-Germain",
    "Boulevard Saint-Michel",
    "Boulevard de Sébastopol",
    "Boulevard de Strasbourg",
  "Boulevard du Temple",
  "Boulevard Voltaire",
  "Boulevard de la Zone",]

  function findDe(){
    let de = boulevards.filter( boulevard => boulevard.includes("de"))
    console.log(de)
  }

  findDe()

  const people = [
    'Bernhard, Sandra', 'Bethea, Erin', 'Becker, Carl', 'Bentsen, Lloyd', 'Beckett, Samuel', 'Blake, William', 'Berger, Ric', 'Beddoes, Mick', 'Beethoven, Ludwig',
    'Belloc, Hilaire', 'Begin, Menachem', 'Bellow, Saul', 'Benchley, Robert', 'Blair, Robert', 'Benenson, Peter', 'Benjamin, Walter', 'Berlin, Irving',
    'Benn, Tony', 'Benson, Leana', 'Bent, Silas', 'Berle, Milton', 'Berry, Halle', 'Biko, Steve', 'Beck, Glenn', 'Bergman, Ingmar', 'Black, Elk', 'Berio, Luciano',
    'Berne, Eric', 'Berra, Yogi', 'Berry, Wendell', 'Bevan, Aneurin', 'Ben-Gurion, David', 'Bevel, Ken', 'Biden, Joseph', 'Bennington, Chester', 'Bierce, Ambrose',
    'Billings, Josh', 'Birrell, Augustine', 'Blair, Tony', 'Beecher, Henry', 'Biondo, Frank'
  ];
  // 7. sort Exercise
  // Sort the people alphabetically by last name
    function sortPeople(people){
        //console.log(people)

        let peopleArray =[];
        for(i=0;i<people.length;i++){
            peopleArray.push(people[i].split(", "))
            
        }
        //console.log(peopleArray)

        
        peopleArray.sort((a,b) => a[0].localeCompare(b[0]))
        console.log(peopleArray)
    }

    sortPeople(people)

  // 8. Reduce Exercise
  // Sum up the instances of each of these
  const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

  function instances(data){

   // Use reduce to accumulate the counts in an object
  let dataSums = data.reduce((acc, vehicle) => {
    // If the category doesn't exist in the accumulator, initialize it to 1; otherwise, increment the count
    acc[vehicle] = (acc[vehicle] || 0) + 1;
    return acc;
  }, {});

  console.log(dataSums);
}

  instances(data)