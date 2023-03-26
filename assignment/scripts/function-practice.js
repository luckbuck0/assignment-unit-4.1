console.log('***** Function Practice *****')

// Add the required code to complete the functions below
// After _each_ function, use a console log to call the function
// to test it and display the result

// 1. Function to return 'Hello World!'
function hello() {
  return 'Hello World!';
}
// Call the function to test
console.log('Test - should say "Hello World!"', hello());


// 2. Function to return an personalized hello, using the `name` argument.
//    for example 'Hello, Jo!', or 'Hello, Stacy!' 

function helloName(name) {
  return 'Hello'+' '+ name;
};

// Remember to call the function to test


// 3. Function to add two numbers together & return the result
function addNumbers(firstNumber, secondNumber) {
  console.log('The sum of', firstNumber, ' and ', secondNumber, ' is');
  return firstNumber + secondNumber;
  
  // return firstNumber + secondNumber;
}

// 4. Function to multiply three numbers & return the result
function multiplyThree(firstNums, secondNums, thirdNums) {
  console.log('The sum of', firstNums, ' times ',
    secondNums, ' times ', thirdNums, ' is');
  return firstNums * secondNums * thirdNums;
}



// 5. Function that will return true if a number is positive, 
//    or greater than zero, and false otherwise
function isPositive(number) {
  return (number > 0) ? true : false
}


// 6. Function to return the _last_ item in an array. If the 
//    array is empty, return `undefined`.
let lastItem = ['pizza', 'ice cream']
function getLast(array) {
  if (array.length > 0) {
    return array[array.length-1];
  }
  else {
    return undefined;
  }
}

// variable called nums with a array of numbers used for
// the find function

let nums = [2, 6, 9, 34, 12]

// 7. Function to find a value in an array. Return true if the 
//    value is found and false otherwise. Use a loop;
//    DO NOT use Array.includes, Array.indexOf, or Array.find 

function find(value, Arrray) {
  for (let i = 0; i < Arrray.length; i++) {
    if (Arrray[i] == value) {
      return true;
    }
    if (Arrray[i] != value && Arrray[i] === Arrray[Arrray.length - 1]) {
      return false;
    }
  }
}

// ----------------------
// Stretch Goals
// ----------------------
// 8. Function to check if a letter is the first letter in a 
//    string. Return true if it is, and false otherwise

function isFirstLetter(letter, string) {
  for (let each of string)
    if (letter === each) {
      return true;
    }
    else {
      return false;
    }
}

//variable sumOf to be used in the sumAll function
let sumOf = [1, 4, 7, 23, 43, 54]

// 9. Function to return the sum of all numbers in an array
function sumAll(sumArray) {
  let sum = 0
  for (let i = 0; i < sumArray.length; i++) {
    sum += sumArray[i];
  }
  // TODO: loop to add items
  return sum;
}

// created a variety of positive and negative numbers
arrayOf = [3, 6, 2, -2, -5, -9, 34]

// 10. Function to return a new array of all positive (greater than zero)
//     numbers contained in an input array. If there are no positive numbers
//     return an empty array. Note: The input array should not change.
function positiveNumbers(positives) {

  let pos = [];
  for (let i = 0; positives.length > i; i++) {
    if (positives[i] > 0) {
      pos.push(positives[i])
    }
  }
  return (pos.length > 0) ? pos : [];
}

// 11. Pick a problem from Edabit(https://edabit.com/) or 
//     CodeWars(https://www.codewars.com/). Then describe it 
//     here in a comment, write the function, and test it!

// Function used to convert hours into seconds using the
// timeConversion function and the value parameter I set
// 2 const one for min and one for hour and then created
// another varieble that named the product of those two
// and the value parameter multiplied together after
// that I return the newly created variable

function timeConversion(value) {
  const oneMinute = 60
  const hour = 60
  let conversion = hour * oneMinute * value
  return conversion;
}

//CONSOLE LOGS---------------------------------------------------

// console log used for the helloName function to log take a name
// for the input name parameter and log hello name
console.log('expect hello tony', helloName('tony'))

// console log from the addNumbers function
// to display the result of the inputs
console.log('Total:', addNumbers(543, 4237))

// Used for the multiplyThree function to log the product
// of three values 
console.log('Total:', multiplyThree(4245, 2423, 3234));

// Call the function to test each outcome (true & false) 
// Write a separate console.log statement for each outcome
console.log('isPositive - should say true', isPositive(3));
console.log('isPositive - should say false', isPositive(0));
console.log('isPositive - should say false', isPositive(-3));

// Used for the getLast function to log the item retrieved
console.log('Should say ice cream', getLast(lastItem));

// Used for the find function to log if the number
// in the first parameter was found 
console.log('should expect true', find(6, nums))

// Used for the isFirstLetter function to log the isFirstLetter function and
// see if the first letter matches the string.
console.log('isFirstLetter - should say true', isFirstLetter('a', 'apple'));
console.log('isFirstLetter - should say false', isFirstLetter('z', 'apple'));

// Used for the sumAll function to log the sum of 
// the sumOf array
console.log('sum of is equal to', sumAll(sumOf))

// Used for the positiveNumbers function to log the positive
// numbers of the array of arrayOf
console.log('should expect positives', positiveNumbers(arrayOf))

// Used for the timeConversion function to log the amount
// of seconds in 3 hours
console.log('should expect conversion', timeConversion(3))

