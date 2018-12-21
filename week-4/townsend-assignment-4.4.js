// Header
var header = require('../week-2/townsend.js');
console.log(header.display("Ethan", "Townsend", "Exercise 4.2"));
console.log('\n');

/*
============================================
; Title:  townsend-discussion-4.4.js
; Author: Professor Krasso
; Date:   21 December 2018
; Modified By: Ethan Townsend
; Description:  Predicates
;===========================================
*/

/*
  // Below is what I am expecting to see when I run your program - remove this before submitting your work
  // 50% of you will not read this and lose 25% of the awardable points.

  FirstName LastName
  Assignment 4.4
  Today's Date

  -- ORIGINAL ARRAY --
  Alabama
  Nebraska
  Iowa
  California
  Nevada

  -- SORTED ARRAY --
  Alabama
  California
  Iowa
  Nebraska
  Nevada

  -- SELECTED VALUE --
  Iowa

*/

// my array and function
var states = ['Maine', 'California', 'North Carolina', 'Georgia', 'Washington'];

function getState(x, y) {
    if (x === y)
    return x[i];
}

// output for my original array
console.log('--- ORIGINAL ARRAY ---')
for (i = 0; i < states.length; i++) {
    console.log(states[i]);
}


// output for my array in alphabetical order
console.log('\n', '--- SORTED ARRAY ---')

for (k = 0; k < states.sort().length; k++) {
    console.log(states[k]);
}

// output for my selected value
console.log('\n', '---SELECTED VALUE---');


console.log(states.filter(function(x) {
    return getState(x, 'California')
}
)[0]
);