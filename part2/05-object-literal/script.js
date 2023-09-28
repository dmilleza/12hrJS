let x;
const quintuplet = {
  name: 'Yotsuba',
  age: 22,
  passedTest: true,
  address: {
    country: 'Japan',
    home: 'apartment',
  },
  interests: ['sports', 'origami'],
};

// use dot notation to access object properties/keys
x = quintuplet.name;
x = quintuplet.address.country;
x = quintuplet.interests[0];

// update values
quintuplet.age = 38;

// remove property
delete quintuplet.address;

// add new property
quintuplet.ribbonColor = 'green';

quintuplet.greet = function () {
  console.log(`Hi, my name is ${this.name}`);
};

quintuplet.greet();
