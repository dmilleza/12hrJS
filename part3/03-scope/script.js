const x = 100;

/* even though x is in global scope, it gets overwritten by x
in the function */
function addEm() {
  const x = 5;
  const y = 5;
  console.log(x + y);
}
addEm();
