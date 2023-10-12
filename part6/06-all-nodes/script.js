let output

const parent = document.querySelector('.parent')

output = parent.childNodes
// NodeList(9) [text, comment, text, div.child, text, div.child, text, div.child, text]

output = parent.childNodes[2].nodeName
// #text

output = parent.childNodes[3].outerHTML
{
  /* <div class="child">child1</div> */
}

output = parent.firstChild
// #text

output = parent.lastChild.previousSibling.textContent
// child3

// parent node
const child = document.querySelector('.child')
output = child.parentNode.className
// parent

// siblings
const secondItem = document.querySelector('.child:nth-child(2)')
output = secondItem.nextSibling
// #text


console.log(output)
