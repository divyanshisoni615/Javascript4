// Check Positive / Negative / Zero
function checkNumber(num) {
    if (num > 0) {
        console.log("Positive");
    }
    else if (num < 0) {
        console.log("Negative");
    }
    else {
        console.log("Zero");
    }
}
let num = Number(prompt("Enter a number:"));
checkNumber(num);
