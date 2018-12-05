/*
============================================
; Title:  townsend.js
; Author: Ethan Townsend
; Date:   5 December 2018
; Modified By: Ethan Townsend
; Description: Displays a formatted header
;===========================================
*/

/**
* Params: firstName, lastName, assignment
* Response: output 
* Description: Returns a well-formatted string header
*/
exports.display = function (firstName, lastName, assignment) {
	let output = '\n' + firstName + ' ' + lastName + '\n' + assignment + '\ndate: '
	+ new Date().toLocaleDateString()

	return output
}