// Find Largest of Two Numbers
let num1 = Number(prompt("enter first number:"));
let num2 = Number(prompt("enter second number:"));
function findLargest(a, b) {
    if (num1 > num2) {
        console.log(num1 + " is the largest number");
    }
    else if (num2 > num1) {
        console.log(num2 + " is the largest number");
    }
    else {
        console.log("Both numbers are equal");
    }
 }
 findLargest(num1, num2);
 