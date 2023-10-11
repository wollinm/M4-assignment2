// Magdalena Wollin 
// M4-assignment - 06 countdown

//Global variables
let coinFlip;
let i;

//Get number to count down from
countDown = prompt('Enter number to count down from?');

//document.write(`Count down from : ${countDown}<br>`);
//count down loop to zero
i = countDown;
do {
    document.write(`${i}<br>`);
    console.log(`${i} `)  ;
    i--;
} while (i>-1);