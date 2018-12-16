// Header
var header = require('../week-2/townsend.js');
console.log(header.display("Ethan", "Townsend", "Exercise 3.3"));
console.log('\n');

/*
============================================
; Title:  townsend-discussion-3.4.js
; Author: Professor Krasso
; Date:   16 December 2018
; Modified By: Ethan Townsend
; Description:  -- DO THE NUMBERS MATCH GAME --
;===========================================
*/




// varriables

/*
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

*/

//loop

var value = 10;

function randomNumber() {
    return Math.floor((Math.random() * 10) + 1)
  }
  

for (var i = randomNumber(); i < 10; i++){
    console.log(i);
}




function logMatch(value, i){
    console.log(value + ' does match ' + i + '!');
}


function logMisMatch(value, i){
    console.log(value + ' does not match ' + i + '!');
}

function match(value, i){
    if (value === i)
        return true
    else    
        return false
}

if (match(value,i)){
    logMatch(value,i);
} else {
    logMisMatch(value,i);
}

