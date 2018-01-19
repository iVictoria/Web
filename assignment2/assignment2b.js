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



// an array of course objects
var courses = [
    { code: 'APC100', name: 'Applied Professional Communications', hours: 3, url: 'http://www.senecacollege.ca/' },
    { code: 'IPC144', name: 'Introduction to Programming Using C', hours: 4, url: 'https://scs.senecac.on.ca/~ipc144/' },
    { code: 'ULI101', name: 'Introduction to Unix/Linux and the Internet', hours: 4, url: 'https://cs.senecac.on.ca/~fac/uli101/live/' },
    { code: 'IOS110', name: 'Introduction to Operating Systems Using Windows', hours: 4, url: 'https://cs.senecac.on.ca/~fac/ios110' },
    { code: 'EAC150', name: 'College English', hours: 3, url: null },
];

// prototype object for creating student objects
var student = { 
    name: "", 
    dob: new Date(),
    sid: "",
    program: "", 
    gpa: 4.0,
    toString: function () {
        return 'Student info for ' + this.name + ': born on ' + this.dob.toLocaleDateString() +
               ', student id ' + this.sid + ', progrem ' + this.program + ', current GPA ' + this.gpa; 
    }
};

/************************************************************
 * Start your Part B code here. Do not change the code above.
 ************************************************************/
// task 1

console.log("*** Task 1 ***");

var last = courses.pop();
console.log ("Course " + last.code + " was removed from the array (courses)");
console.log ("Adding new course objects into the array (courses)");

courses.push({code: 'IBC233', name: 'iSERIES Business Computing', hours: 4, url: 'https://scs.senecac.on.ca/~ibc233'});
courses.push({code: 'OOP244', name: 'Introduction to Object Oriented Programming', hours: 4, url: 'https://scs.senecac.on.ca/~oop244'});
courses.push({code: 'WEB222', name: 'Internet I - Internet Fundamentals', hours: 4, url: 'https://scs.senecac.on.ca/~web222'});
courses.push({code: 'DBS201', name: 'Introduction to Database Design and SQL', hours: 4, url: 'https://scs.senecac.on.ca/~dbs201'});

console.log("\n\nCourse objects in the array (courses):\n");

for (var i=0; i < courses.length; i++) {
    console.log(courses[i].code + ", " + courses[i].name + ", " + courses[i].hours + " hours/week, website: " + courses[i].url);
}

// task 2

console.log("\n\n*** Task 2 ***\n\nStudent objects in the array (students):")

var studentJohn = Object.create(student);
studentJohn.name = "John Smith";
studentJohn.dob = new Date("1999-09-11");
studentJohn.sid = "010456101";
studentJohn.program = "CPA"
studentJohn.gpa = "4";
studentJohn.toString;

var studentJim = Object.create(student);
studentJim.name = "Jim Carrey";
studentJim.dob = new Date("1992-01-18");
studentJim.sid = "012345678";
studentJim.program = "CPD"
studentJim.gpa = "3.5";
studentJim.toString;

var studentJusB = Object.create(student);
studentJusB.name = "Justin Bieber";
studentJusB.dob = new Date("1994-03-02");
studentJusB.sid = "0987654321";
studentJusB.program = "CAN"
studentJusB.gpa = "3";
studentJusB.toString;

var studentJusT = Object.create(student);
studentJusT.name = "Justin Trudeau";
studentJusT.dob = new Date("1992-01-13");
studentJusT.sid = "123456789";
studentJusT.program = "CAN"
studentJusT.gpa = "4";
studentJusT.toString;

var students = [studentJohn, studentJim, studentJusB, studentJusT];

for (var x in students) { 
   console.log(x + ": " + students[x].toString());
}
