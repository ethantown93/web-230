// Header
var header = require('../week-2/townsend.js');
console.log(header.display("Ethan", "Townsend", "discussion 5.1"));
console.log('\n');

/*
============================================
; Title:  townsend-discussion-5.1.js
; Author: Professor Krasso
; Date:   09 January 2019
; Modified By: Ethan Townsend
; Description:  Advanced Arrays
;===========================================
*/

//my variables
var sandwhich = newMap();
sandwhich,set('peanut butter', 'jelly');
sandwhich.set('bacon, lettuce' 'tomatoe');
sandwhich.set('ham', 'cheese');

console.log('----My Favorite Sandwchiches----');

//output
for(var [key, value] of sandwhich) {
    console.log('I like ' + key + ' and ' + value + ' sandwhichs.');
)}

//correct code
/*
var sandwhich = new Map();
sandwhich.set('peanut butter', 'jelly');
sandwhich.set('bacon, lettuce', 'tomatoe');
sandwhich.set('ham', 'cheese');

for(var [key, value] of sandwhich) {
    console.log('I like ' + key + ' and ' + value + ' sandwhichs.');
}
*/