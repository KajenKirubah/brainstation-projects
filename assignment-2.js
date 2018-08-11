let output = "";
for (let i = 0; i < 7; i++) {
    output += "#";
    console.log(output);

}
/* a variable named output is first set to an empty string.  The for loop each turn
adds an extra '#' symbol to the output string, then prints out the result to the console.
The for loop terminates after doing this 7 times.
*/

//challenge 2
function isEven(number) {
    if (!isNaN(number)) {
        if (number % 2 == 0) {
            console.log("the number is even");
        }
        else {
            console.log("the number is odd");
        }

    }
    else {
        console.log("the value is not a number");
    }
}

isEven("x");
isEven(2);
isEven(501);
/* An if statement tests whether the value of the argument is a number or not.  If the argument is a number, the code checks if it is even or odd.  If
the argument isn't a number, then a statement is printed out saying the value isn't a number.

The code crashes if a value is entered that isn't a string or a number.*/
