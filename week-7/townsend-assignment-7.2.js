// Header
var header = require('../week-2/townsend.js');
console.log(header.display("Ethan", "Townsend", "discussion 5.1"));
console.log('\n');

/*
============================================
; Title:  townsend-assignment-7.2.js
; Author: Professor Krasso
; Date:   21 January 2019
; Modified By: Ethan Townsend
; Description:  Constructor Functions/Objects
;===========================================
*/

var team = {
    name: 'New England Patriots.',
    owner: 'Robert Kraft',
};

console.log('-----DISPLAYING MY FAVORITE FOOTBALL TEAM-----');
console.log(team.owner + ' owns the ' + team.name);
console.log('');

// Here is my function constructor with the parameters
function Employee(id, firstName, lastName, title) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.title = title;
}

// here is my new Employee array
var employees = [
    new Employee(' QB', ' Tom', ' Brady,', ' Quaterback'),
    new Employee(' TE', ' Rob', ' Gronkowski,', ' Tight End'),
    new Employee(' WR', ' Phillip', ' Dorsett,', ' Wide Receiver'),
    new Employee(' HC', ' Bill', ' Belichick,', ' Head Coach'),
    new Employee(' RB', ' Sony', ' Michelle,', ' Running Back'),
];
 

console.log('----HERE IS MY OUTPUT-----');

// here is my loop which is outputing the results of the array.
let index = 1;
for (let i = 0; i < employees.length; i++) {
    console.log(index + '.' + employees[i].id + employees[i].firstName + employees[i].lastName + employees[i].title + '.');
    index++
}