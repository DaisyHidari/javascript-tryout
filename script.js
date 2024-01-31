/*pseudocode: 1. Create a new repository on GitHub;
2. Upload necessary files for the workshop;
3. Create a sring saying: "You have received this message because you have been chosen to open an important vault. Here is the secret combination:";
4. Assign three variables containing arithmetic operator such as +, -,*, /;
5. Add comments;
6. Create a dialog box;
7. Submit the GitHub link to the assignment;
*/

// Next line is for the popup dialog (added it to the index.html for a clearer view)
// alert("The combination of the lock is 10 - 40 - 39.");


// Next section is for the key combinations 10 and 40 and 39.
let num1 = 2 * 5;
let num2 = 50 - 10;
let num3 = 23 + 16;

// The next console.log does not really mean anything. I did not use it, but left here for reference.
// console.log("num");

console.log(typeof num1);
console.log(10);
// The following line contains a string for the secret combination;
console.log('You have received this message because you have been chosen to open an important vault. Here is the secret combination: ' + num1  + "-" + num2 + "-" + num3);