import React from 'react';

//Demystifying Maps

//Declare an array of numbers
const numbers = [1,2,3,4,5,6]

//Create a function for multiplying each index of array
function multiplyByTwo(number){
    
    return number * 2
    // getting values of new array that has been multiplied by two
    const newNumbers = numbers.map(multiplyByTwo)
    
    console.log('new number', newNumbers)
}



export default multiplyByTwo;