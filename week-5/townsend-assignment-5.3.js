// Header
var header = require('../week-2/townsend.js');
console.log(header.display("Ethan", "Townsend", "assignment 5.3"));
console.log('\n');

/*
============================================
; Title:  townsend-assignment-5.3.js
; Author: Professor Krasso
; Date:   09 January 2019
; Modified By: Ethan Townsend
; Description:  Advanced Arrays
;===========================================
*/


//my object array
var composers = [
    {
        firstName: 'Ludwig Van',
        lastName: 'Beethhoven',
        genre: 'Classical',
        rating: 10,
    },
    {
        firstName: 'Wolfgang',
        lastName: 'Mozart',
        genre: 'Classical',
        rating: 10
    },
    {
        firstName: 'Johann',
        lastName: 'Bach',
        genre: 'Classical',
        rating: 9,
    },
    {
        firstName: 'Frederic',
        lastName: 'Chopin',
        genre: 'Classical',
        rating: 8,
    },
    {
        firstName: 'Johannes',
        lastName: 'Brahms',
        genre: 'Classical',
        rating: 7,
    },
]

//forEach output
composers.forEach(function(classicalComposer){
    console.log(classicalComposer.firstName + ' ' + classicalComposer.lastName + ' is a ' + classicalComposer.genre + ' composer, and has an overall rating of ' 
    + classicalComposer.rating)
});