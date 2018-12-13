// Header
var header = require('../week-2/townsend.js');
console.log(header.display("Ethan", "Townsend", "Exercise 3.3"));
console.log('\n');

/*
============================================
; Title:  townsend-discussion-3.3.js
; Author: Professor Krasso
; Date:   12 December 2018
; Modified By: Ethan Townsend
; Description: fix the code
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 3.3
  Today's Date

  // Expected output
  The enter key was pressed
*/

/*
if (eventKeyCode === 13) {
  console.log('The enter key was pressed.')
} else if (eventKeyCode === 16) {
  console.log('The shift key was pressed.')
} else if (eventKeyCode === 32) {
  console.log('The spacebar key was pressed.')
} else if (eventKeyCode === 8) {
  console.log('The backspace / delete key was pressed.')
} else {
  console.log('Unrecognized key.')
}*/

let eventKeyCode = 23

// Switch statement
switch (eventKeyCode) {
    case 23:
        console.log('The enter key was pressed.');
        break;
    case 16:
        console.log('The shift key was pressed.');
        break;
    case 32:
        console.log('The spacebar was pressed.');
        break;
    case 8:
        console.log('The backspace / delet key was pressed.');
        break;
    default:
        console.log('Unrecognized key.');
        break;
}

console.log('\n');

// my own switch statement

var redSoxRuns = 1000000;
var yankeeRuns = 0;

switch (true) {
    case redSoxRuns >= yankeeRuns:
        console.log('The Red Sox have scored ' + redSoxRuns + ' runs this season and the Yankees have scored ' + yankeeRuns + '.' 
        + ' The Red Sox are clearly the superior team.')
        break;
    case yankeeRuns >= redSoxRuns:
        console.log('The Yankees scored ' + yankeeRuns + ' runs this season and the Red Sox have scored ' + redSoxRuns + '.' 
        + ' The Yankees are clearly the superior team.')
        break;
    default:
        console.log('Neither team scored any runs.');
        break;
}