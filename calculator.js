function calculator() {

    let a = parseFloat(prompt("Enter first number:"));
    let b = parseFloat(prompt("Enter second number:"));
    let op = prompt("Enter operator (+, -, *, /):");

    let result;

    if (op == "+") {
        result = a + b;
    }
    else if (op == "-") {
        result = a - b;
    }
    else if (op == "*") {
        result = a * b;
    }
    else if (op == "/") {
        if (b != 0) {
            result = a / b;
        }
        else {
            result = "Cannot divide by zero";
        }
    }
    else {
        result = "Invalid operator";
    }

    alert("Result = " + result);
}