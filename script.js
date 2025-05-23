/*
15. Function: checkout
Create a Function named checkout that accepts two parameters named cardBalance and price.
•	If the price is more than the card balance, return false
•	Otherwise, return the new card balance after the purchase
*/

function checkout(cardBalance, price) {
    if (price > cardBalance) {
        return "false";
    } else {
        return cardBalance - price;
    }
}

console.log(checkout(500, 200, 40)); // The third argument does not have a respective parameter (placeholder) therefore it has no effect on the outcome of the Function.
//Output: 300

/*
17. Function: isBlue
Create a Function named isBlue.
•	isBlue will take one parameter
•	The Function will return true if it is passed any case of the word "blue"
•	Otherwise, the Function will return false
•	Invoke the Function, pass in the given variable word as the argument
•	Print the result to the console, using console.log
•	Note: The passed value can be "blue" with any of the letters capitalized (i.e."Blue", "bLue", "BLUE", etc…). All forms of the word blue should return true.
•	Note: Use toLowerCase() on the passed value to accomplish this. For example, myVariable.toLowerCase() will convert whatever the variable myVariable contains to all lowercase.
*/

function isBlue(param1) {
    return param1.toLowerCase() === "blue"
}

console.log(isBlue("BLUE")); //Need to put the argument in "" if it's a string
//Output: true

/*
19. Function: returnSum
Create a Function named returnSum that accepts 3 integer parameters.
•	The parameters are named num1, num2, and num3
•	In the body of the Function, the sum of the three parameters is returned
•	Invoke the Function, pass in the given variables a, b, and c as the arguments
•	Print the result to the console, using console.log
*/

function returnSum(num1, num2, num3) {
    return num1 + num2 + num3;
}
console.log(returnSum(5, 6, 4));
//Output: 15

/* Arrays
11. Write a Function to Print the Elements of an Array:
Write a Function called printArray that accepts an Array as an argument, and contains a loop that will print each value of the passed in Array.
•	Do not edit (or hardcode the change to) the Array in its current state.
•	You must edit by using a method of the Array object.
•	Note: Arrays are mutable in JavaScript, so you can use a method to add a new name to an Array.
•	Hint: You can use the length property to find the length of the Array
*/

myArray = [1,2,3,4,5];

function printArray(arr) {
    for(i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    }
}

printArray(myArray);

function solveQuadratic(a, b, c) {    
    let discriminant = b * b - 4 * a * c;    
    if (discriminant < 0) {      
        return [];      }    let root1 = (-b + Math.sqrt(discriminant)) / (2 * a);    let root2 = (-b - Math.sqrt(discriminant)) / (2 * a);    return [root1, root2];    }  let result = solveQuadratic(1, -3, 2);    console.log(result);  