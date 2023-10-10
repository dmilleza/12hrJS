// console.log(window);
/* in the window object is the document object that has a 
bunch of properties and methods we can use */

// console.dir(window.document)
// use dir instead log to see properties and methods

// console.log(document)
// since window is the top level object, you don't need it

// console.log(document.body.innerHTML)
{
  /* <h1>Hi</h1>
<script src="./script.js"></script> */
}

// console.log(document.body.innerText)
// Hi

// console.log(document.links[0])
{
  /* <a href="google.com">click me</a> */
}

console.log(document.getElementById('main'))

document.querySelector('#main h1').innerText = 'jello'
