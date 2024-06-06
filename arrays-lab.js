/*
Exercise 1: Define an empty array

1) Create an empty array and assign it to a variable called `foods`.

Exercise 1 has been completed for you:
*/

const foods = [];  

console.log('Exercise 1 result:', foods);

/*
Exercise 2: Add strings to the array

1) Add 'pizza' and 'cheeseburger' to the `foods` array. 

Note: 'pizza' should be the first item in the array, followed by 'cheeseburger'.

Complete Exercise 2 in the space below:
*/
foods.push('pizza', 'cheeseburger')


console.log('Exercise 2 result:', foods);

/*
////////////////////////////////
Adding to the front of an array
///////////////////////////////
We know that push() and pop() are helpful methods for adding and removing items at the end of an array.
 shift() and unshift() accomplish the same tasks at the beginning of an array!

The shift() and unshift() methods provide an easy way to manipulate elements at the beginning of an array.
 The unshift() method adds one or more elements to the start of the array and returns the new length, 
 while the shift() method removes the first element from an array and returns that element.

Array.prototype.shift()
The shift() method of Array instances removes the first element from an array and returns that removed element. 
This method changes the length of the array.

Try it
const array1 = [1, 2, 3];

const firstElement = array1.shift();

console.log(array1);
// Expected output: Array [2, 3]

console.log(firstElement);
// Expected output: 1

Array.prototype.unshift()
The unshift() method of Array instances adds the specified elements to the beginning of an array and returns the 
new length of the array.

Try it
const array1 = [1, 2, 3];

console.log(array1.unshift(4, 5));
// Expected output: 5

console.log(array1);
// Expected output: Array [4, 5, 1, 2, 3]
/////////////////////////////////////////
////////////////////////////////////////
*/

/*
Exercise 3: Insert at the beginning

1) Insert the string 'taco' at the beginning of the `foods` array.

Complete Exercise 3 in the space below:
*/
foods.unshift('taco')


console.log('Exercise 3 result:', foods);

/*
Exercise 4: Access an array element

1) Retrieve the 'pizza' string from the array based on its position (index) in
   the array.  

2) Assign it to a variable called `favFood`.

Complete Exercise 4 in the space below:
*/
const favFood = foods[1]


console.log('Exercise 4 result:', favFood);

/*
/////////////////////////
Adding and removing elements anywhere in an array
///////////////////////
The splice() method can add or remove any number of elements inside an array. 
You can even take both actions simultaneously with a single line of code!

Try it
const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// Inserts at index 1
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// Replaces 1 element at index 4
console.log(months);
// Expected output: Array ["Jan", "Feb", "March", "April", "May"]

Syntax
splice(start)
splice(start, deleteCount)
splice(start, deleteCount, item1)
splice(start, deleteCount, item1, item2)
splice(start, deleteCount, item1, item2,  itemN)
Note:
when we call splice(), its behavior will change depending on how many arguments we pass to it.
//////////////////////////////
/////////////////////////////
*/

/*
Exercise 5: Insert an element between two others

1) Insert the string 'tofu' between 'pizza' and 'cheeseburger' in the array.

Complete Exercise 5 in the space below:
*/

foods.splice(2, 0, 'tofu')

console.log('Exercise 5 result:', foods);

/*
Exercise 6: Replace elements

1) Replace 'pizza' in the `foods` array with 'sushi' and 'cupcake'.

Complete Exercise 6 in the space below:
*/

foods.splice(1, 1, 'sushi', 'cupcake')

console.log('Exercise 6 result:', foods);

/*////////////////////////
Copying parts of an array
////////////////////////
The slice() method extracts a portion of an array and creates a new array without modifying the original.
The slice() method of Array instances returns a shallow copy of a portion of an array into a new array object
selected from start to end (end not included) where start and end represent the index of items in that array. 
The original array will not be modified.

Try it
const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// Expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// Expected output: Array ["bison", "camel", "duck", "elephant"]

console.log(animals.slice(-2));
// Expected output: Array ["duck", "elephant"]

console.log(animals.slice(2, -1));
// Expected output: Array ["camel", "duck"]

console.log(animals.slice());
// Expected output: Array ["ant", "bison", "camel", "duck", "elephant"]
///////////////////////////
//////////////////////////

Exercise 7: Using the `slice()` method

1) Use the `slice()` method to create a new array that contains 'sushi' and 
   'cupcake'.

2) Assign it to a variable named `yummy`.

Complete Exercise 7 in the space below:
*/
const yummy = foods.slice(1, 3)


console.log('Exercise 7 result:', yummy);

/*
//////////////////////////////
Searching for items within an array
/////////////////////////////
The indexOf() method searches for a specified element within an array and 
returns the index of the first occurrence. If the element is not found, it returns -1.

Try it
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// Expected output: 1

// Start from index 2
console.log(beasts.indexOf('bison', 2));
// Expected output: 4

console.log(beasts.indexOf('giraffe'));
// Expected output: -1
/////////////////////
////////////////////

Exercise 8: Finding an index

1) Using the `indexOf()` method, find the index of the string 'tofu' in the 
   `foods` array. 

2) Assign it to a variable named `soyIdx`.

Complete Exercise 8 in the space below:
*/

const soyIdx = foods.indexOf('tofu')

console.log('Exercise 8 result:', soyIdx);

/*
/////////////////////////////
Turning an entire array into a string
////////////////////////////
The join() method combines all the elements of an array into a single string, 
separated by a specified delimiter.

Try it
const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// Expected output: "Fire,Air,Water"

console.log(elements.join(''));
// Expected output: "FireAirWater"

console.log(elements.join('-'));
// Expected output: "Fire-Air-Water"
//////////////////////////
/////////////////////////

Exercise 9: Joining elements

1) Use the `join()` method to concatenate the strings in the `foods` array, 
   separated by ' -> '. 

2) Assign the result to a variable called `allFoods`. 

Note: The final result should log as:
'taco -> sushi -> cupcake -> tofu -> cheeseburger'

Complete Exercise 9 in the space below:
*/

const allFoods = foods.join(' -> ')

console.log('Exercise 9 result:', allFoods);

//Exercise 9: Joining elements

/*
//////////////////////////////
Checking for specific elements in an array
/////////////////////////////
The includes() method checks if an array contains a specific element, 
returning a boolean value (true or false).

Try it
const array1 = [1, 2, 3];

console.log(array1.includes(2));
// Expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// Expected output: true

console.log(pets.includes('at'));
// Expected output: false
////////////////////////////
///////////////////////////

Exercise 10: Check for an element

1) Using the .includes() method, check if the `foods` array contains the string
   'soup'.

2) Assign the result to a variable called `hasSoup``.

Complete Exercise 10 in the space below:
*/

const hasSoup = foods.includes('soup')

console.log('Exercise 10 result:', hasSoup);

/*
/////////////////////////
Looping and manipulating
///////////////////////
for loop
The traditional for loop can iterate through an array by index.
for (let i = 0; i < arr.length; i++) {
  console.log(arr[i]);
}
for...of loop
The for...of loop allows you to loop through the values of an array directly without using
 an index.
 for (const element of arr) {
  console.log(element);
}
forEach() method
The forEach() method performs a given function on each element of an array.
arr.forEach((element) => {
  console.log(element);
});

Exercise 11: Odd numbers from an array

/*
Exercise 11: Odd numbers from an array

1) Choose a method to iterate through the `nums` array.

2) Push each odd number to a new array named `odds`.

Hint: Initialize the `odds` variable to an empty array before the iteration.

Complete Exercise 11 in the space below:
*/

const nums = [100, 5, 23, 15, 21, 72, 9, 45, 66, 7, 81, 90];

const odds = []

nums.forEach(num => {
    if (num % 2) {
        odds.push(num)
    }
})

console.log('Exercise 11 result:', odds);

/*
Exercise 12: FizzBuzz with arrays

1) Choose a method to iterate through the `nums` array. 

2. As you loop, sort the numbers into new arrays based on the following rules:

   - Push any number evenly divisible by 3 to an array called `fizz`.
   - Push any number evenly divisible by 5 to an array called `buzz`.
   - Push any number that is evenly divisible by 3 and 5 to an array called
     `fizzbuzz`.

   Note: A single number may meet more than one of the above rules. If it does,
         it should be placed in multiple arrays. For example, the number `15`
         will appear in the `fizz`, `buzz`, and `fizzbuzz` arrays.

Complete Exercise 12 in the space below:
*/

const fizz = []
const buzz = []
const fizzbuzz = []

for (const num of nums) {
    if (num % 3 == 0) {
        fizz.push(num)
    }if (num % 5 == 0) {
        buzz.push(num)
    }if (num % 3 == 0 && num % 5 == 0) {
        fizzbuzz.push(num)
    }
}

console.log('Exercise 12 Results:');
console.log('  fizz:', fizz);
console.log('  buzz:', buzz);
console.log('  fizzbuzz:', fizzbuzz);

/*
Exercise 13: Retrieve the Last Array

1) Assign the last nested array in the `numArrays` below to a variable named
   `numList`. As you do this, also fulfill these goals:

   - Assume you don't know how many nested arrays `numArrays` contains.
   - Do not alter the original `numArrays` array.

Complete Exercise 13 in the space below:
*/

const numArrays = [
	[100, 5, 23],
	[15, 21, 72, 9],
	[45, 66],
	[7, 81, 90]
];

const lastIndex = numArrays.length - 1
// console.log(lastIndex)
const numList = numArrays[lastIndex]


console.log('Exercise 13 result:', numList);

/*
Exercise 14: Accessing within nested arrays

1) Retrieve the number `66` from the `numArrays` array.
   As part of this process
   do not alter the original `numArrays` array.

2) Assign it to a variable called `num`.

Complete Exercise 14 in the space below:
*/

const included = numArrays.slice(2, 3)
console.log(included)
const num = included[0][1]

console.log('Exercise 14 result:', num);

/*
Exercise 15: Nested array sum

1) Use nested loops or `forEach()` methods to sum up all numbers within 
   `numArrays` nested arrays.
   
2) Assign the sum to a variable called `total`.

Hint: Be sure to declare and initialize the total variable before the iterations.

Complete Exercise 15 in the space below:
*/

let total = 0

numArrays.forEach ((arr) => {
    // for (let i = 0; i < arr.length; i++) {
    //     total += arr[i]
    // }
    //////////////////////////////
    arr.forEach((num, i) => {
        total += num
        console.log(i)
    })
})

console.log('Exercise 15 result:\n', total);
