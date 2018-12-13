// Header
var header = require('../week-2/townsend.js');
console.log(header.display("Ethan", "Townsend", "Exercise 3.1"));
console.log('\n');

/*
============================================
; Title:  townsend-discussion-3.2.js
; Author: Professor Krasso
; Date:   12 December 2018
; Modified By: Ethan Townsend
; Description: fix the code
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 3.2
  Today's Date

  // output from the match() function
  false
  true

  // output from the if...else blocks
  Truck and Car do not match!
  Bike and Bike do match!
  Four and Three do not match!
*/

// varriables

var rockstar = 'rockstar';
var monster = 'monster';

var android = 'Samsung Galaxy S9';
var androidPhone = 'Samsung Galaxy S9'

var ethanAge = 25;
var ethanWifeAge = 24; 

// 1st function

function match(rockstar, monster) {
    if (rockstar === monster)
        return true
    else    
        return false
}

function logMistmatch(rockstar, monster) {
    console.log(rockstar + ' and ' + monster + ' do not match!');
}

function logMatch(rockstar, monster) {
    console.log(rockstar + ' and ' + monster + ' do match!')
} 

// conditional "if...else" statement


if (match(rockstar, monster)) {
    logMatch(rockstar, monster);
} else {
    logMistmatch(rockstar, monster);
}

// 2nd function

function match(android, androidPhone) {
    if (android === androidPhone)
        return true
    else    
        return false
}

function logMismatch(android, androidPhone) {
    console.log( android + ' and ' + androidPhone + ' do not match!');
}

function logMatch(android, androidPhone) {
    console.log(android + ' and ' + androidPhone + ' do match!');
}

// conditional "if...else" statement


if (match(android, androidPhone)) {
    logMatch(android, androidPhone);
} else {
    logMismatch(android, androidPhone);
}

// 3rd function

function match(ethanAge, ethanWifeAge) {
    if (ethanAge === ethanWifeAge)
        return true
    else
        return false
}

function logMismatch(ethanAge, ethanWifeAge) {
    console.log(ethanAge + ' and ' + ethanWifeAge + ' do not match!');
}

function logMatch(ethanAge, ethanWifeAge) {
    console.log(ethanAge + ' and ' + ethanWifeAge + ' do match!');
}

// conditional "if...else" statement

if (match(ethanAge, ethanWifeAge)) {
    logMatch(ethanAge, ethanWifeAge);
} else {
    logMismatch(ethanAge, ethanWifeAge);
}

// output from the match() functions
console.log('\n');
console.log(match('rockstar', 'monster'));
console.log(match('Samsung Galaxy S9', 'Samsung Galaxy S9'));
console.log(match( 24, 25));