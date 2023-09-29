const post = {
  id: 1,
  title: 'post one',
  body: 'this is the body',
};

// convert to JSON string
const newPost = JSON.stringify(post);
// {"id":1,"title":"post one","body":"this is the body"}

// parse JSON
const obj = JSON.parse(newPost);
// { id: 1, title: 'post one', body: 'this is the body' }

const posts = [
  {
    id: 1,
    title: 'post one',
    body: 'this is the body',
  },
  {
    id: 2,
    title: 'post two',
    body: 'this is the body',
  },
];

const str2 = JSON.stringify(posts);
// [{"id":1,"title":"post one","body":"this is the body"},{"id":2,"title":"post two","body":"this is the body"}]
console.log(str2);
