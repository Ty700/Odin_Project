let name = "Tyler";
let surname = "Scotti";

console.log(name + surname);

/*
Try the following exercises by adding code to a script tag in your HTML file:

    Add 2 numbers together! In your script, type in console.log(23 + 97). Running this should log 120.
    Do the same thing but add 6 different numbers together.
    Now log the value of the following expression: (4 + 6 + 9) / 77. The console should log approximately 0.24675.
    Let’s use some variables!
        Add this statement to the script tag: let a = 10.
        Below it, add console.log(a). When you run this, the browser console should log 10.
        Afterwards, re-assign a with a different number value. Log a again afterwards and it should show the updated value (the previous log should still show the old value of 10 since that was before a was re-assigned).
        Now add to the bottom of the script let b = 7 * a.
        Log what b is. It should log the result of 7 multiplied by whatever you re-assigned a with.
    Try this sequence:
        Declare a const variable max with the value 57.
        Declare another const variable actual and assign it max - 13.
        Declare another const variable percentage and assign it actual / max.
        Now if you log percentage, you should see a value in the console like 0.7719.
    Take a few minutes to keep playing around with various things in your script tag. Eventually, we will learn how to actually make these things show up on the webpage, but all of this logic will remain the same. Make sure you’re comfortable with it before moving on.
*/

let num1 = 23, num2 = 97;
console.log(num1 + num2);

let num3 = 4, num4 = 6, num5 = 9, num6 = 77;

console.log((num3 + num4 + num5) / num6);

let a = 10;
console.log("Starting A: " + a);

a = 24;
console.log("New A: " + a);

let b = 7 * a;
console.log("Starting B: " + b);

const max = 57; 
const actual = max - 13;
const percentage = actual / max;
console.log("Percentage: " + percentage);