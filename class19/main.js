//chapter 1
console.log("hello from Javascript")
console.log("Let's do some math");
console.log(4 + 7);
console.log(12 / 0);
console.log("Goodbye!");

console.log("Gjarred")
console.log(31)

console.log(6+3)
console.log(6-3)
console.log(6 * 3)
console.log( 6 / 3)
console.log()

//chapter 2

//const fullname = prompt("What is your first and last name");
//alert(`Hello ${fullname}`)

let a = 2;
a -= 1;
a++;
let b = 8;
b += 2;
const c = a + b * b;
const d = a * b + b;
const e = a * (b + b);
const f = a * b / a;
const g = b / a * a;
console.log(a, b, c, d, e, f, g);
 //
//const rawNum = prompt("What is the raw num?");
//const vat = Number(rawNum);
//console.log(vat / 1.20)

//
//const celsius = prompt("what is the celsius degree?");
//const celsiusNum = Number(celsius);
//console.log(`Ferenheit from Celsius degree is ${celsius * (9/5) + 32}`)

//
let number1 = 5;
let number2 = 3;

number1 = number1 - 2;
number2 = number2 + 2;

console.log(number1); // Should show 3
console.log(number2); // Should show 5

//chapter 3
//let whichDay = prompt("Enter a day of the week");
//let day = whichDay.toLowerCase();
let days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"];
//console.log(day)
//if(day == days[0]){
    console.log(days[1])
//}else if(day == days[1]){
    console.log(days[2])
//}else if(day == days[2]){
    console.log(days[3])
//}else if(day == days[3]){
    console.log(days[4])
//}else if(day == days[4]){
    console.log(days[5])
//}else if(day == days[5]){
    console.log(days[6])
//}else if(day == days[6]){
    console.log(days[0])
//}else console.log("not a day of the week")

//const num1q = prompt("First Number");
//const num2q = prompt("Second Number");
//let num1 = Number(num1q);
//let num2 = Number(num2q);
//console.log(num1);
//console.log(num2);

//if(num1 > num2 ){
    //console.log(`${num1} is greater than ${num2}`)
//}else if(num1 == num2){
    //console.log(`${num1} is equal to ${num2}`)
//}else console.log(`${num2} is greater than ${num1}`)

//let nb1 = Number(prompt("Enter nb1:"));
//let nb2 = Number(prompt("Enter nb2:"));
//let nb3 = Number(prompt("Enter nb3:"));

//if (nb1 > nb2) {
  //nb1 = nb3 * 2;
//} else {
  //nb1++;
  //if (nb2 > nb3) {
    //nb1 += nb3 * 3;
  //} else {
    //nb1 = 0;
    //nb3 = nb3 * 2 + nb2;
  //}
//}
//console.log(nb1, nb2, nb3);

//let month = prompt("Which month?");
//month = Number(month);
//console.log(month)
//if(month == 4 || month == 6 || month == 9 || month == 11){//
    //console.log(30)
//}else if(month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12){
    //console.log(31)
//}else if(month == 2){
    //console.log(28)
//}else console.log("not a month")


// Function to pad single-digit numbers with leading zeros
function padZero(number) {
    return (number < 10 ? '0' : '') + number;
}

// Function to calculate the time one second after
//function calculateNextSecond(hours, minutes, seconds) {
    // Increment the seconds
    //seconds++;

    // Check if seconds exceed 59, then increment minutes
    //if (seconds === 60) {
        //seconds = 0;
        //minutes++;

        // Check if minutes exceed 59, then increment hours
        //if (minutes === 60) {
            //minutes = 0;
            //hours++;

            // Check if hours exceed 23, set it to 0 (midnight)
            //if (hours === 24) {
                //hours = 0;
            //}
        //}
    //}

    // Format the result and return
    //const formattedResult = `${padZero(hours)}h${padZero(minutes)}m${padZero(seconds)}s`;
    //return formattedResult;
//}

// Prompt user for input
//const hours = prompt("Enter hours:");
//const minutes = prompt("Enter minutes:");
//const seconds = prompt("Enter seconds:");

// Convert input to numbers
//const inputHours = Number(hours);
//const inputMinutes = Number(minutes);
//const inputSeconds = Number(seconds);

// Check for valid input
//if (
    //Number.isInteger(inputHours) &&
    //Number.isInteger(inputMinutes) &&
    //Number.isInteger(inputSeconds) &&
    //inputHours >= 0 &&
    //inputHours <= 23 &&
    //inputMinutes >= 0 &&
    //inputMinutes <= 59 &&
    //inputSeconds >= 0 &&
    //inputSeconds <= 59
//) {
    // Calculate the time one second after
    //const result = calculateNextSecond(inputHours, inputMinutes, inputSeconds);
    //console.log(`Time one second after: ${result}`);
//} else {
    //console.log("Invalid input. Please enter valid hours, minutes, and seconds.");
//}


//chapt 4
let turns = 1;
//while( turns <= 10 ){
    //console.log(turns++)
//}

//for(turns=1;turns<=10;turns++){
    //console.log(turns)
//}

//userNumStr = prompt("how many turns?");
//let userTurnNum = Number(userNumStr);

//while( turns <= userTurnNum ){
    //console.log(turns++)
//}

//for(turns=1;turns<=userTurnNum;turns++){
    //console.log(turns)
//}


//for (let i = 1; i <= 10; i++) {
    //if (i % 2 !== 0) {
      //console.log(`${i} is odd`);
    //}
 // }

  //let userInput = prompt("odd number 1-10")
  //let inputNum = Number(userInput)
  
  //for (let k = inputNum; k <= 10; k++) {
    //if (k % 2 !== 0) {
      //console.log(`${k} is odd`);
    //}
  //}

  //let hundredlimit = prompt("Ill keep askin until you give me a number below 101");
    //let limit = Number(hundredlimit);
    //console.log(limit)
  
  //while(limit > 100){
     //hundredlimit = prompt("Ill keep askin until you give me a number below 101");
    //limit = Number(prompt)
  //}

  //let hundredlimit2 = prompt("Ill keep askin until you give me a number between 50 and 100");
  //let limit2 = Number(hundredlimit2);
  //console.log(limit2)

//while(limit2 < 50 && limit2 > 100){
   //hundredlimit2 = prompt("Ill keep askin until you give me a number between 50 and 100");
  //limit2 = Number(prompt)
//}

//let multiple = Number(prompt("lets create a multiplication table with this number"))

//for(table=0;table <= 12;table++){
    //console.log(`${multiple} x ${table}`)
//}

//let multiple2 = Number(prompt("lets create a multiplication table with this number"));

//if(multiple2 > 1 && multiple2 < 10){
    //for(table2=0;table2 <= 12;table2++){
        //console.log(`${multiple2} x ${table2}`)
    //}
//}else console.log("invalid")

//let text;

//while (true) {
    //text = prompt("Type 'yes' or 'no', or I'll keep asking:");
    //console.log(text);

    //if (text === "yes" || text === "no") {
        //console.log("Ok");
        //break; // Exit the loop if 'yes' or 'no' is typed
    //}
//}

for(let hundo=0;hundo <= 100; hundo++){
    if( hundo %3 == 0 && hundo %5 == 0){
        console.log("Fizz Buzz")
    }else if(hundo %5 == 0){
        console.log("Buzz")
    }else if(hundo %3 == 0){
        console.log("Fizz ")
} else console.log(hundo)
}

//chap 5
// Say hello to the user
//let firstName = prompt("Whats your first Name")
//let lastName = prompt("Whats your last name?")

//function sayHello(firstName, lastName) {
    //const message = `Hello, ${firstName} ${lastName}!`;
    //console.log(message);
  //}
  //sayHello(firstName, lastName)
  // TODO: ask user for first and last name
  // TODO: call sayHello() and show its result



  // Square the given number x
//function square1(x) {
    //let sq = Math.pow(x,2)
    //return sq
    // TODO: complete the function code
  //}
  
  
  // Square the given number x
  //const square2 = x => Math.pow(x,2)// TODO: complete the function code
  
  //console.log(square1(0)); // Must show 0
  //console.log(square1(2)); // Must show 4
  //console.log(square1(5)); // Must show 25
  
  //console.log(square2(0)); // Must show 0
  //console.log(square2(2)); // Must show 4
  //console.log(square2(5)); // Must show 25

//function squareIt(){
    //for(squared=0;squared <= 100;squared++){
        //console.log(Math.pow(squared,2))
    //}
  //}
  
  //squareIt()

  //function min(x,y){
    //if(x < y){
        //return x
   // }else return y
  //}

//console.log(min(4.5, 5)); // Must show 4.5
//console.log(min(19, 9));  // Must show 9
//console.log(min(1, 1));   // Must show 1

function calculate(x,operand,z){
    let calc;
    switch (operand){
        case "+":
            calc = x + z;
            break;
        case "-":
            calc = x - z;
            break;
        case "*":
            calc = x * z;
            break;
        case "/":
            calc = x / z;
            break;
    }
    
    
    
    return calc
    
}

console.log(calculate(4, "+", 6));  // Must show 10
console.log(calculate(4, "-", 6));  // Must show -2
console.log(calculate(2, "*", 0));  // Must show 0
console.log(calculate(12, "/", 0)); // Must show Infinity

function circAndArea (radius){
    const circum = (2*Math.PI)*(radius)
    const area = (Math.PI)*(Math.pow(radius,2))
    console.log(circum, area)
}

circAndArea(3)