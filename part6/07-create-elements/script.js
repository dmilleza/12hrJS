const div = document.createElement('div')
div.className = 'my-element'
div.id = 'my-element'
div.setAttribute('title', 'My-Element')

const text = document.createTextNode('hello')
div.appendChild(text)
document.querySelector('ul').appendChild(div)
console.log(div)
