const listItems = document.querySelectorAll('li')

// not efficient
// listItems.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     e.target.remove()
//   })
// })

/* instead of adding multiple event listeners to 
each list tag, we just add one to the parent */
const list = document.querySelector('ul')
list.addEventListener('click', (e) => {
  if(e.target.tagName === 'LI'){
    e.target.remove()
  };
})
