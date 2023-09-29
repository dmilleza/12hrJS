const library = [
  {
    title: 'power of habit',
    author: 'idk',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'quintessential quintuplets',
    author: 'haruba',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
  {
    title: 'cat in the hat',
    author: 'seuss',
    status: {
      own: true,
      reading: false,
      read: false,
    },
  },
];

library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;

const { title: firstBook } = library[0];

console.log(firstBook);
// power of habit

const str = JSON.stringify(library);
// console.log(str);
