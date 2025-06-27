
//const inputNumber = 10

function isOddOrEven(inputNumber) { 
    if (inputNumber % 2 == 0) {
        console.log("Even")
    }
    else if (inputNumber % 2 == 1) {
        console.log("Odd")
    }
    else {
        console.log("Input is invalid")
    }

}

isOddOrEven(5)
isOddOrEven(-7)
isOddOrEven(368)
isOddOrEven("Test")
isOddOrEven("-98")
