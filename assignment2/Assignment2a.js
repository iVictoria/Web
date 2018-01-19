/*******************************************************************************

 *                     WEB222 – Assignment 2

 * I declare that this assignment is my own work in accordance with Seneca

 * Academic Policy.  No part of this assignment has been copied manually or

 * electronically from any other source (including web sites) or distributed to

 * other students.

 *

 * Name: Victoria Castillo Student ID: 111523171 Date: 4 October 2017

 *

 ******************************************************************************/


/*****************************

 * Step 1

 *****************************/

var e1, e2, e3, e4, e5, e6, e7, str;

/*****************************

 * Step 2

 *****************************/

function capFirstLetter(input) {
  var textLength = input.length + 1;
  
  var capped = ((input.substr(0, 1)).toUpperCase() + (input.substring(1, textLength)).toLowerCase());
  
  return capped;
} 

e1 = prompt("Enter your first name", "victoria");

e1 = capFirstLetter(e1);

/*****************************

 * Step 3

 *****************************/


var getAge = function(year) {
  return (new Date()).getFullYear() - year;
};

e2 = prompt("Enter your birth year", "1984");
e2 = getAge(e2);

/*****************************

 * Step 4

 *****************************/


var e3 = prompt("What college are you attending?" , "seneca college");
e3 = e3.split(' ');
e3[0] = capFirstLetter(e3[0]);
e3[1] = capFirstLetter(e3[1]);
e3 = e3.join(' '); 

/*****************************

 * Step 5

 *****************************/

e4 = prompt("What are your favorite sports?", 'hockey,football,basketball,tennis,golf');
e4 = e4.replace("football", "soccer");
e4 = e4.split(',');
e5 = prompt("Add another sport", "formula 1");
e4.push(e5);


/*****************************

 * Step 6

 *****************************/

for (var i = 0; i < 6; i++) {
  e4[i] = e4[i].toUpperCase();
}

e4 = e4.sort();

/*****************************

 * Step 7

 *****************************/

function getDateString(date) {
  var year = date.getFullYear();
  var month = date.getMonth() + 1;
  var day = date.getDate();
  
  if (month < 10)
    month = "0" + month;
  if (day < 10)
    day = "0" + day;
  return year + "-" + month + "-" + day;
}

e6 = new Date();

e7 = getDateString(e6);


/*****************************

 * Step 8

 *****************************/

var str1 = "User info:\n\nname (e1): "
str = str1.concat(e1, "\nage (e2): ", e2, "\nschool (e3): ", e3, "\nfavorite sports (e4): \n\t", e4[0], "\n\t", e4[1], "\n\t", e4[2], "\n\t", e4[3], "\n\t", e4[4], "\n\t", e4[5], "\ncurrent date (e7): ", e7);

console.log(str);
