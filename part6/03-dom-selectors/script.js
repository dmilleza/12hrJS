// console.log(document.getElementById('app-title'))
{
  /* <h1 id="app-title">Shopping List</h1> */
}

// console.log(document.getElementById('app-title').id)
// app-title

// console.log(document.getElementById('app-title').getAttribute('class'))
// form

// set attributes
// document.getElementById('app-title').title = 'Shopping List'

// document.getElementById('app-title').setAttribute('class', 'title')

// get or change content
const title = document.getElementById('app-title')
// console.log(title.textContent)
// Shopping List

title.textContent = 'Hello Everyone'
title.innerHTML = '<b>Shopping Leest</b>'

// change styles
title.style.color = 'red'
title.style.backgroundColor = 'black'

// querySelector
// console.log(document.querySelector('h1'))
// console.log(document.querySelector('#app-title'))
// console.log(document.querySelector('.container'))
// console.log(document.querySelector('input[type="text"]'))
// console.log(document.querySelector('li:nth-child(2)').innerText)
// Orange Juice

// use these methods on other elements
const list = document.querySelector('ul')
 const firstItem = list.querySelector('li')
 firstItem.style.color = 'blue'