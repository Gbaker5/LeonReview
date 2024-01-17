//////////variables
//Declare two variables: admin and name.
//Assign the value "John" to name.
//Copy the value from name to admin.
//Show the value of admin using alert (must output “John”).

let name = "John";
let admin = name;
alert(admin)

//Create a variable with the name of our planet. How would you name such a variable?
//Create a variable to store the name of a current visitor to a website. How would you name that variable?
let planetName = "earth"
let user = "George"

//////////function basics
function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Did parents allow you?');
    }
  }
  //Will the function work differently if else is removed?
  
  function checkAge(age) {
    if (age > 18) {
      return true;
    }
    // ...
    return confirm('Did parents allow you?');
  }
  //Is there any difference in the behavior of these two variants?

  //>>>>>There is No diiference


 
function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return confirm('Did parents allow you?');
  }
}
//Rewrite it, to perform the same, but without if, in a single line.

//Make two variants of checkAge:

//Using a question mark operator ?
//Using OR ||
function checkAge(age){
    age > 18 ? true : confirm('Did Parents allow you?')
}
 
function checkAge(age) {
    return (age > 18) || confirm('Did parents allow you?');
  }


  //Write a function min(a,b) which returns the least of two numbers a and b.

  //For instance:
  
  //min(2, 5) == 2
  //min(3, -1) == -1
  //min(1, 1) == 1
  
  function min(a, b) {
    if (a < b) {
      return a;
    } else {
      return b;
    }
  }

  //Write a function pow(x,n) that returns x in power n. Or, in other words, multiplies x by itself n times and returns the result.

//pow(3, 2) = 3 * 3 = 9
//pow(3, 3) = 3 * 3 * 3 = 27
//pow(1, 100) = 1 * 1 * ...* 1 = 1
//Create a web-page that prompts for x and n, and then shows the result of pow(x,n).

//Run the demo

//P.S. In this task the function should support only natural values of n: integers up from 1.

function pow(x, n) {
    let result = x;
  
    for (let i = 1; i < n; i++) {
      result *= x;
    }
  
    return result;
  }
  
  let x = prompt("x?", '');
  let n = prompt("n?", '');
  
  if (n < 1) {
    alert(`Power ${n} is not supported, use a positive integer`);
  } else {
    alert( pow(x, n) );
  }
/////////////function expressions

////////////arrow function basics

//Replace Function Expressions with arrow functions in the code below:

 function ask(question, yes, no) {
  if (confirm(question)) yes();
  else no();
}

ask(
  "Do you agree?",
  function() { alert("You agreed."); },
  function() { alert("You canceled the execution."); }
);


function ask(question, yes, no) {
    if (confirm(question)) yes();
    else no();
  }
  
  ask(
    "Do you agree?",
    () => alert("You agreed."),
    () => alert("You canceled the execution.")
  );
  