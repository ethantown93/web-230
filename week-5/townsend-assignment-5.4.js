// Header
var header = require('../week-2/townsend.js');
console.log(header.display("Ethan", "Townsend", "assignment 5.4"));
console.log('\n');

/*
============================================
; Title:  townsend-assignment-5.4.js
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

//list of new objects which returns only last names

let lastName = composers.map( (composer) => {
    return composer.lastName
})

let ratings = composers.map( (bestRating) => {
    return bestRating.rating
})

//forEach method outputs

console.log( '----COMPOSER LASTNAMES----');
let index = 1
lastName.forEach((lastNames) => {
    console.log(index + '. ' + lastNames)
    index++
})

console.log('\n');

console.log( '----COMPOSER RATINGS----');

let list = 1

ratings.forEach( (bestRating) => {
    console.log(list + '. ' + bestRating)
    list++
})