let x = 100;
let y = 50;
function getSum(n1, n2) {
  let sum = n1 + n2;
  return sum;
}
let sum1 = getSum(x, y);
let sum2 = getSum(10, 5);

/* Creation Phase:
1. x variable is allocated memory and stores "undefined"
2. y variable is allocated memory and stores "undefined"
3. getSum() function is allocated memory and stores all the code
7. sum1 variable is allocated memory and stores "undefined"
8. sum2 variable is allocated memory and stores "undefined"

Execution Phase:
1. Places the value of 100 into the x variable 
2. Places the value of 50 into the y variable
3. Skips the function because nothing to execute
7. Invokes getSum() and creates a new function execution context

getSum() function EC Creation Phase:
3. n1 and n2 variables are allocated memory and stores "undefined"
4. sum variable is allocated memory and stores "undefined"

getSum() function EC Execution Phase:
3. n1 and n2 are assigned 100 and 50
4. calculation is done and 150 is put into the sum variable
5. return tells the function EC to return to global EC with value of sum(150)
7. returned sum value(150) is put into the sum1 variable
8. open another function EC and do the same thing with different parameters */
