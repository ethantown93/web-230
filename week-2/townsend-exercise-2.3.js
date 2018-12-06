var header = require('./townsend.js');
/*
  Expected output:

  Ethan Townsend
  Exercise 2.3
  5 December 2018

  Hello FirstName LastName!

  Hint : Use your personal header display function and
  refer to page 178 for implementing function properties
*/

//function properties
myName.ethan = "Ethan";
lastName.townsend = "Townsend!"
greeting.hello = "Hello"

//functions
function myName() {
    return myName.ethan;
}

function lastName() {
    return lastName.townsend;
}

function greeting() {
    return greeting.hello
}

//output
console.log('\n');
console.log(greeting() + ' ' + myName() + ' ' + lastName());
console.log(header.display("Ethan", "Townsend", "Exercise 2.3"));

//end program