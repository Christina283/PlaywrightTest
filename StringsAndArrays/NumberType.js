// Create a JavaScript function that determines if a number is positive, negative, or zero and returns a corresponding string indicating the type.

function numberType(inputNumber) {
    if (inputNumber > 0)
        console.log("Number is positive")
    else if (inputNumber < 0)
        console.log("Number is negative")
    else if (inputNumber == 0)
        console.log("Number is zero")
    else
        console.log("Invalid input")
}

numberType(-85)
numberType(30)
numberType("Hi")
numberType(0)
