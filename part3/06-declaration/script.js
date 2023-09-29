// function declaration

function addDollarSign(value) {
  return '$' + value;
}

console.log(addDollarSign(100));
// $100

// function expression
const addPlusSign = function (value) {
  return '$' + value;
};

console.log(addDollarSign(200));
