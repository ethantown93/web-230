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

var value = 5;
let ranNum = randomNumber();

function randomNumber() {
    return Math.floor((Math.random() * 10) + 1)
  }

function match(value, i) {
    if (value === i) {
        return true
    }
    else {
        return false
    }   
}

function logMatch(value, i) {
     console.log(value + ' and ' + i + ' do match!');
} 

function logMisMatch(value, i) {
    console.log(value + ' and ' + i + ' do not match!');
}

for (var i = ranNum; i < 10; i++){
    if(match(value,i)){
        logMatch(value,i);
    } else {
       logMisMatch(value,i);
    }
};
