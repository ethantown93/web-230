var header = require('./townsend.js');
console.log(header.display("Ethan", "Townsend", "Exercise 2.4"));

// funtion properties
firstName = 'Ethan ';
lastName = 'Townsend';
let month = '12/'
let day = '9/'
let year = '2018'
let v = 71.5;
let place = 1;
let ageEthan = calculateAge(1993);
let $ = parseFloat("10000000");

// function
function fullName(){
    return firstName + lastName;
}

function formatNumber(val, numOfPos){
    return val.toFixed(numOfPos);
}

function date(month, day, year){
    return month, day, year;
}

function calculateAge(birthYear){
    return 2018 - birthYear;
}


// output
console.log("\n" + "Hello my name is" + ' ' + fullName())
console.log( '\n' + 'Todays date is ' + date(month, day, year) + ' and todays tempurature is ' + formatNumber(v, place)+ ' degrees.')
console.log('\n' + 'I am ' + ageEthan + ' years old and my savings account goal is ' + $ );