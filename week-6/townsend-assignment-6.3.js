// Header
var header = require('../week-2/townsend.js');
console.log(header.display("Ethan", "Townsend", "discussion 5.1"));
console.log('\n');

/*
============================================
; Title:  townsend-assignment-6.3.js
; Author: Professor Krasso
; Date:   16 January 2019
; Modified By: Ethan Townsend
; Description:  Onject Literals
;===========================================
*/

// here is my ticketing object literal
var ticketing = {
    //here are the variables you requested
    information: 'Drivers License, Full Name, SD Police',
    
    get info() {
        return this.id
    },

    set info(val){
        this.id = val;
    }
}

// this is my before output
console.log('---BEFORE---'),
console.log(ticketing.information);

ticketing.information = 'California Drivers license, Ethan Townsend, San Diego Police Department';

console.log('');

// this is my after output
console.log('---AFTER---');
console.log(ticketing.information);