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

let nb1 = Number(prompt("Enter nb1:"));
let nb2 = Number(prompt("Enter nb2:"));
let nb3 = Number(prompt("Enter nb3:"));

if (nb1 > nb2) {
  nb1 = nb3 * 2;
} else {
  nb1++;
  if (nb2 > nb3) {
    nb1 += nb3 * 3;
  } else {
    nb1 = 0;
    nb3 = nb3 * 2 + nb2;
  }
}
console.log(nb1, nb2, nb3);