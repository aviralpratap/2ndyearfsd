const readline = require("readline");

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function multiply(a, b) {
    return a * b;
}

rl.question("Enter first number: ", function(a) {
    rl.question("Enter second number: ", function(b) {
        let result = multiply(Number(a), Number(b));
        console.log("Result:", result);
        rl.close();
    });
});