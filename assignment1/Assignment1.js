/*******************************************************************************

 *                     WEB222 – Assignment 1

 * I declare that this assignment is my own work in accordance with Seneca

 * Academic Policy.  No part of this assignment has been copied manually or

 * electronically from any other source (including web sites) or distributed to

 * other students.

 *

 * Name: Victoria Castillo Student ID: 111523171 Date: 21 September 2017

 *

 ******************************************************************************/


/*****************************

 * Task 1

 *****************************/


var student = "Victoria";
var program = "Computer Programmer";
var noCourses = 8;
var partTime = false;
var verb;

if (partTime === true) 
  verb = "have";
  else verb = "don't have";

console.log("My name is " + student + " and I'm in the " + program + " program. I'm taking " + noCourses + " courses this semester and I " + verb + " a part-time job now.");


/*****************************

 * Task 2

 *****************************/

var now = 2017;
var age = prompt("Please enter your age: ");
console.log("I was born in the year of " + (now - Number(age)) + ".");
var grad = prompt("Enter the number of years you expect to study in the college: ");
console.log("You will graduate from Seneca College in the year of " + (now + Number(grad)) + ".");


/*****************************

 * Task 3

 *****************************/

var tempC = 12;
var resultF = Number(tempC) * (9/5) + 32;
console.log(tempC + " °C is " + resultF.toFixed(1) + " °F.");
var tempF = 100;
var resultC = (Number(tempF) - 32) * (5/9);
console.log(tempF + " °F is " + resultC.toFixed(1) + " °C.");


/*****************************

 * Task 4

 *****************************/

var number;
var oddEven;

for (var ident = 0 ; ident <= 10 ; ident++) {
	number = ident;
  if (number % 2 == 0)
    oddEven = " is even";
  else oddEven = " is odd";
  console.log(number + oddEven);
}


/*****************************

 * Task 5

 *****************************/

// a.

function largerNum (num1, num2) {
  var large;
  
  if (num1 > num2)
    large = num1;
  else large = num2;
  return large;
}
// console.log(largerNum(11,20));

// b.

var greaterNum = function (num3, num4) {
  var large;
  
  if (num3 > num4)
    large = num3;
  else large = num4;
  return large;
}
// console.log(greaterNum(42,18));

// d.

var num1 = 100, num2 = 34;
console.log("The larger number of " + num1 + " and " + num2 + " is " + largerNum(num1,num2));

var num1 = 77, num2 = 500;
console.log("The larger number of " + num1 + " and " + num2 + " is " + largerNum(num1,num2));

var num3 = 402, num4 = 33;
console.log("The larger number of " + num3 + " and " + num4 + " is " + greaterNum(num3,num4));

var num3 = 99, num4 = 999;
console.log("The larger number of " + num3 + " and " + num4 + " is " + greaterNum(num3,num4));


/*****************************

 * Task 6

 *****************************/

function evaluator() {
  var sum = 0;
  var avg = 0;
  var fifty;
  var desc;
  
  for (var i=0; i<arguments.length; i++) {
	         sum += arguments[i];
       }
  avg = sum / arguments.length;
  if (avg >= 50)
    fifty = true;
  else fifty = false;
  
  if (fifty === true)
     desc = "The average of these numbers is greater than or equal to 50";
  else desc = "The average of these numbers is less than 50";
  return desc;
}

console.log(evaluator(70, 30, 55, 80, 90));
console.log(evaluator(3, 1, 6, 23, 100));
console.log(evaluator(78, 1, 32, 50));


/*****************************

 * Task 7

 *****************************/


function grader(grade) {
  var letterGrade;
  if (grade >= 80)
    letterGrade = "A";
  else if (grade <= 79 && grade >= 70)
    letterGrade = "B";
  else if (grade <= 69 && grade >= 60)
    letterGrade = "C";
  else if (grade <= 59 && grade >= 50)
    letterGrade = "D";
  else if (grade <=49)
    letterGrade = "F";
  return letterGrade;
}

var grade = 90;
  console.log("Your grade is of " + grade+ " is equivalent to " + grader(grade));
var grade = 78;
  console.log("Your grade is of " + grade+ " is equivalent to " + grader(grade));
var grade = 49;
  console.log("Your grade is of " + grade+ " is equivalent to " + grader(grade));

/*****************************

 * Task 8

 *****************************/

function showMultiples(num, numMultiples) {
  var ident = 1;
  do
    {
      console.log(num + " x " + ident + " = " + (num*ident));
      ident++;
    } while (ident<=numMultiples)
}
showMultiples(5,4);