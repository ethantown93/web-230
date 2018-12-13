//Header

var header = require('../week-2/townsend.js');
console.log(header.display("Ethan", "Townsend", "Exercise 3.1"));
console.log('\n');
/*
============================================
; Title:  townsend-discussion-3.1.js
; Author: Professor Krasso
; Date:   12 December 2018
; Modified By: Ethan Townsend
; Description: fix the code
;===========================================
*/


// points variables

var mikePoints = 111;
var johnPoints = 104;
var marryPoints = 113

var highestPoints = 113;

// calculate who has the highest points.

/*
switch true {
    case johnPoints >= highestPoints:
        console.log(johnPoints + ' points is the most of all three teams, therefore John is the winner.')
    case mikePoints >= highestPoint:
        console.log(mikePoints + ' points is the most of all three teams, therefore Mike is the winner.')
    case marryPoints >= highestPoints:
        console.log(maryPoints + ' points is the most of all three teams, therefore Marry is the winner.')
}*/

// expected output

// 113 points is the most of all three teams, therefore Marry is the winner.

// end program.

// correct code below


switch (true) {
    case johnPoints >= highestPoints:
        console.log(johnPoints + ' points is the most of all three teams, therefore John is the winner.')
    case mikePoints >= highestPoints:
        console.log(mikePoints + ' points is the most of all three teams, therefore Mike is the winner.')
    case marryPoints >= highestPoints:
        console.log(marryPoints + ' points is the most of all three teams, therefore Marry is the winner.')
}