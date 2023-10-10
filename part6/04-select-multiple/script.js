// querySelectorAll()

const listItems = document.querySelectorAll('.item')
// console.log(listItems)
// NodeList(4) [li.item, li.item, li.item, li.item]

// console.log(listItems[2].innerText)
// Oreos

// to make all list items have red text
// listItems.forEach((item, index) => {
//   item.style.color = 'red'

//   if (index === 3) {
//     item.innerText = 'Queso'
//   }
//   if (index === 2) {
//     item.innerHTML = `Naranja
// <button class="remove-item btn-link text-red">
//   <i class="fa-solid fa-xmark"></i>
// </button>`
//   }
// })

const secondList = document.getElementsByClassName('item')
// console.log(secondList);
// HTMLCollection(4) [li.item, li.item, li.item, li.item]

const thirdList = document.getElementsByTagName('li')
// console.log(thirdList);
// HTMLCollection(4) [li.item, li.item, li.item, li.item]