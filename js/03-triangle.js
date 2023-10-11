// Magdalena Wollin
// M4-assignment  - 03 Triangle


//Global variables
let myString = "#######";
let i = 0;

//document.write(`Times to flip the coin : ${times2Flip}<br>`);
//do-while loop 7 times
do {
    // get number of characters from myString up to the loop number
    displayText = myString.substring(0,i+1)
    //document.write(`${displayText}<br>`);
    console.log(`${displayText}`)
    i++
} while (i < 7);

//This is another way of doing it
/*
let myChar = "#"
let myNewChar = ""
do {
    //for each time 1 through 7 add "#" to myNewChar
    for (let j = 0; j < i; j++) {
        myNewChar = myNewChar + myChar ;
        //document.write(`${myNewChar}`)
        console.log(`${myNewChar}`)        
    }
    document.write(`<br>`);
    i++
} while (i < 7);
*/

//document.write(`done`);
//console.log(`done`)