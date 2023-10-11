// Magdalena Wollin 
// M4-assignment  - 04 Odd or Even


//Global variables
let value ;
let i;

    for (let i = 0; i < 16; i++) {
        //document.write(`${i}`)
        value = "even"
        j = i % 2;
        if (j == 1) {
            value = "odd"
        }
        console.log(`${i} is ${value}`)        
    }
