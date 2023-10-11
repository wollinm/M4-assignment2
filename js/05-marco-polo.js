// Magdalena Wollin
// M4-assignment  - 05 Marco! Polo!


//Global variables
let value ;
let i;
let j;
let k;

//loop from 1 to 100, 
//if multiple of 3 display Marco, 
//if multiple of 5 display Polo, 
//if multiple of 3 and 5 display Marco! Polo!
//otherwise only display the number
    for (i = 1; i < 101; i++) {
        value = ""
        j = i % 3
        k = i % 5;
        if (j == 0) {
            value = "Marco!"
        }
        if (k == 0) {
            value = value + "Polo!"
        }
        if (value == "") {
            value = i
        }

        document.write(`${value} <br>`)
        console.log(`${i} ${value}`)        
    }
