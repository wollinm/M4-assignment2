// Magdalena Wollin 
// M4-assignment

/*
1.Begin your application by declaring a variable called coinFlip. Do not assign the variable a number just yet.
2.Create a for loop that loops a certain amount of times. The amount of times that the for loop executes will be collected from the user via a prompt.
3.Within the for loop assign a randomly generated number to You will have to use the same Math formula that you used in the previous assignment to get this number.
4.Use a conditional statement to check the result of the coin flip. If it’s 0, write out “Heads” into the console window. If it’s 1, write out “Tails” into the console window.
Note: Unlike the previous assignment, you’re not prompting the user for their choice. You’re simply displaying the coin flip results in the console.
*/

//Global variables
let coinFlip;
let i;
let headsCnt = 0;

//document.write(`Times to flip the coin : ${times2Flip}<br>`);
//do-while loop
do {
    //get random number 0 or 1
    coinFlip = Math.round(Math.random() * 1);
    if (coinFlip == 1) {
        console.log(`Flip ${i+1} : Tails`);
    } else {
        console.log(`Flip ${i+1} : Heads`);
        headsCnt++;
    }
} while (!coinFlip);

document.write(`Heads streak was : ${headsCnt}<br>`);
console.log(`Heads streak was : ${headsCnt}`)
