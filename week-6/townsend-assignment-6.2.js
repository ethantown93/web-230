// Header
var header = require('../week-2/townsend.js');
console.log(header.display("Ethan", "Townsend", "discussion 5.1"));
console.log('\n');

/*
============================================
; Title:  townsend-assignment-6.2.js
; Author: Professor Krasso
; Date:   16 January 2019
; Modified By: Ethan Townsend
; Description:  Try/Catch/Finally Exception Handling
;===========================================
*/

try {
    let x = 6;
    let y = 4;
    const sum = (x+y)

    if (sum === 10) throw 'The sum is equal to 10'
    console.log(sum);
} catch(err) {
    console.log('Catch clause: ' + err);
} finally {
    console.log('Finally clause reached...');
}



// some extra code I wrote 

/*

// this is the start of my "try" statement
try {
    console.log('This is the start of my run');

    //here is error, as web231 is not defined.
    web231;

    // start of my "catch" statement
} catch(err) {
    console.log('Catch Clause: ' + err);

    // here is my "finally" statement
} finally {
    console.log('Finally clause reached...');
}

*/