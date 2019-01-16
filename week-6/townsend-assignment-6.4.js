// Header
var header = require('../week-2/townsend.js');
console.log(header.display("Ethan", "Townsend", "assignment 6.4"));
console.log('\n');

/*
============================================
; Title:  townsend-assignment-6.5.js
; Author: Professor Krasso
; Date:   16 January 2019
; Modified By: Ethan Townsend
; Description:  Nested Objects
;===========================================
*/

// my object with my nested object
const ticketing = {
    id: 'CA drivers license',
    name: 'speeing ticket',
    date: new Date().toLocaleDateString(),
    priority: 'misdemeanor',
    // this is my nested object
    person: {
        id1: 'CA drivers license',
        firstName: 'Michael ',
        lastName: 'Jackson',
        job: 'Singer/Performer',
    }

}; 

// here are the outputs for my object literals.
console.log( ticketing.person.firstName + ticketing.person.lastName + '(the ' + ticketing.person.job + ')' + ' has received a '+ ticketing.priority + ' ' + ticketing.name + ' on ' + ticketing.date );
console.log('The ticket is a ' + ticketing['priority'] + ' so his ' + ticketing['id'] + ' will not be suspended.');