// Header
var header = require('../week-2/townsend.js');
console.log(header.display("Ethan", "Townsend", "discussion 6.1"));
console.log('\n');

/*
============================================
; Title:  townsend-discussion.6.1.js
; Author: Professor Krasso
; Date:   16 January 2019
; Modified By: Ethan Townsend
; Description:  discussion
;===========================================
*/

/*
//objects
let pizzas = {
    pizzaTypes: 'Pepperoni',

    get pizza() {
        return this.pizzaTypes;
    },

    set pizza(val) {
        this.pizzaTypes = val;
    }
}

//reasign pizzaTypes


// outputs
console.log('My favorite kind of pizza is ' + pizzas.pizzaTypes + '.');
pizzas.pizzaTypes = 'Cheese';
console.log('My second favorite kind of pizza is ' + pizzas.pizzaTypes + '.');
pizzas.pizzaTypes = 'Sausage';
console.log('My least favorite kind of pizza is ' + pizzas.pizzaTypes + '.');
*/

let pizzas = {
    pizzaTypes: 'Pepperoni',

    get pizza() {
        return this.pizzaTypes;
    },

    set pizza() {
        this.pizzaTypes = val;
    }
}

//reasign pizzaTypes


// outputs
console.log('My favorite kind of pizza is ' + pizzas.pizzaTypes + '.');
console.log('My second favorite kind of pizza is ' + pizzas.pizzaTypes + '.');
pizzas.pizzaTypes = 'Cheese';
console.log('My least favorite kind of pizza is ' + pizzas.pizzaTypes + '.');
pizzas.pizzaTypes = 'Sausage';

// expected output
/*
My favorite kind of pizza is Pepperoni.
My second favorite kind of pizza is Cheese.
My least favorite kind of pizza is Sausage.
*/