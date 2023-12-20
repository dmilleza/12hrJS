// remove is on element to be removed
function removeClear() {
  const clearBtn = document.querySelector('#clear')
  clearBtn.remove()
}
// removeClear()

// removeChild is on parent element
function removeFirstItem() {
  const ul = document.querySelector('ul')
  const li = document.querySelector('li:first-child')

  ul.removeChild(li)
}
// removeFirstItem()

function removeItem(itemNumber) {
  const ul = document.querySelector('ul')
  const li = document.querySelector(`li:nth-child(${itemNumber})`)

  ul.removeChild(li)
}
// removeItem(4)

// another way to do above function
function removeItem2(itemNumber) {
  const ul = document.querySelector('ul')
  const li = document.querySelectorAll('li')[itemNumber - 1]

  ul.removeChild(li)
}
// removeItem2(1)

function removeItem3(itemNumber) {
  const li = document.querySelectorAll('li')
  li[itemNumber - 1].remove()
}
// removeItem3(4)

// shorter way to do above function
const removeItem4 = (itemNumber) =>
  document.querySelectorAll('li')[itemNumber - 1].remove()

// removeItem4(1)
