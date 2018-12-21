// Header
var header = require('../week-2/townsend.js');
console.log(header.display("Ethan", "Townsend", "Exercise 4.2"));
console.log('\n');

/*
============================================
; Title:  townsend-discussion-4.3.js
; Author: Professor Krasso
; Date:   21 December 2018
; Modified By: Ethan Townsend
; Description:  Filtering
;===========================================
*/

/*
  Expected output:

  FirstName LastName
  Exercise 4.3
  Today's Date

  -- DISPLAYING ARRAY ITEMS --
  Car
  Truck
  Motorcycle
  Airplane
  Bus

  -- SELECTED VALUE --
  Motorcycle

  -- SELECTED VALUE --
  Bus
*/

var vehicles = ['Lamborghini', 'Ferrari', 'Audi', 'Mclaren', 'Rolls Royce'];

//function

function getValue(car, brand) {
    for (i = 0; i < car.length; i++) {
        if (car[i] === brand)
        console.log(car[i]);
    }
}


//output

console.log('---DISPLAYING ARRAY ITEMS---')
for (var x = 0; x < vehicles.length; x++) {
    console.log(vehicles[x]);
}

console.log('');



console.log('---Selected Value---')
getValue(vehicles, 'Ferrari');

console.log('\n');

console.log('---Selected Value---')
getValue(vehicles, 'Lamborghini');