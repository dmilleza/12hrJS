// immediately invoked function expressions

// const name = "Yotsuba"
// cannot use name because secondscript already has name variable

// Yotsuba is logged after Ichika because user is not in the global scope
(function () {
  const name = 'Yotsuba';
  console.log(name);
})();

// can have parameter
(function (name) {
  console.log('Hello ' + name);
})('Nino');
