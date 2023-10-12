/* 
<!-- beforeBegin --> 
<p>
  <!-- afterBegin -->
  foo
  <!-- beforeEnd -->
</p>
<!-- afterEnd -->
*/

// insertAdjacentElement
function insertElement() {
  const filter = document.querySelector('.filter')

  const h1 = document.createElement('h1')
  h1.textContent = 'insertAdjacentElement'

  filter.insertAdjacentElement('beforebegin', h1)
}
insertElement()

// insertAdjacentText
function insertText() {
  const item = document.querySelector('li:first-child')
  item.insertAdjacentText('beforeEnd', 'insertAdjacentText')
}
insertText()

// insertAdjacentHTML
function insertHTML() {
  const clear = document.querySelector('#clear')
  clear.insertAdjacentHTML('afterBegin', '<h2>insertAdjacentHTML</h2>')
}
insertHTML()

// insertBefore
function insertBeforeItem() {
  const ul = document.querySelector('ul')

  const li = document.createElement('li')
  li.textContent = 'insertBefore'

  const thirdItem = document.querySelector('li:nth-child(3')

  ul.insertBefore(li, thirdItem)
}

insertBeforeItem()
