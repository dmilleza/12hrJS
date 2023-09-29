// challenge 1
const getCelsius = (fahrenheit) => `${(fahrenheit - 32) * (5 / 9)}\xB0C`;
// console.log(getCelsius(32));

// challenge 2
const minMax = (arr) => {
  const min = Math.min(...arr);
  const max = Math.max(...arr);

  return { min, max };
};

console.log(minMax([123, 42, 63, 76, 14, 53]));
// { min: 14, max: 123 }