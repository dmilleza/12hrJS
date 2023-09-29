function sayHi() {
  console.log('Hello World');
}

// sayHi();

// num1 and num2 are parameters
function add(num1, num2) {
  console.log(num1 + num2);
}

// 5 and 6 are arguments
// add(5, 6);

function subtract(num1, num2){
    return num1 - num2

    // console log doesn't work because we already returned 
    // from the function
    console.log('hello');
}

const result = subtract(11, 5)

console.log(result, subtract(9,6));
// 6 3