let output

// get child elements
const parent = document.querySelector('.parent')
output = parent.children
// HTMLCollection(3) [div.child, div.child, div.child]

output = parent.children[1].nodeName
// DIV

parent.children[1].innerText = 'child two'

parent.firstElementChild.innerText = 'child one'
parent.lastElementChild.innerText = 'child three'

// get parent elements from a child
const child = document.querySelector('.child')
output = child.parentElement
{/* <div class="parent"> */}

// sibling elements
const secondItem = document.querySelector('.child')
console.log(output)
