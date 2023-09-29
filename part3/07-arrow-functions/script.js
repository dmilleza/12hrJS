// arrow function
const add = (a,b) => {
    return a + b
}

// implicit return, don't need return if only one expression
const subtract = (a,b) => a - b

// if there's a single parameter, don't need parentheses
const double = a => a * 2

// put parentheses around curly braces to return an object
const createObj = () => ({
    name: "Miku"
})

console.log(createObj());
// { name: 'Miku' }