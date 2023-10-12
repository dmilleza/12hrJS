// first method to replace
function replaceFirstItem() {
  const firstItem = document.querySelector('li:first-child')

  const li = document.createElement('li')
  li.textContent = 'replaced first'

  firstItem.replaceWith(li)
}
replaceFirstItem()

// second method to replace
function replaceSecondItem() {
  const secondItem = document.querySelector('li:nth-child(2)')

  secondItem.outerHTML = '<li>replaced second</li>'
}
replaceSecondItem()

// replace all items using forEach
function replaceAllItems() {
  const items = document.querySelectorAll('li')

  // items.forEach((item, index) => {
  //   if (index === 1) {
  //     item.innerHTML = 'this is second'
  //   } else {
  //     // item.outerHTML = '<li>replaced item</li>'
  //     // does same thing above
  //     item.innerHTML = 'replace all'
  //   }
  // })

  // shorter version
  items.forEach(
    (item, index) =>
      (item.outerHTML =
        index === 1 ? '<li>this is second</li>' : '<li>replace all</li>')
  )
}
replaceAllItems()

// replace by selecting parent and using replaceChild()
function replaceChildHeading() {
  const header = document.querySelector('header')
  const h1 = document.querySelector('header h1')

  const h2 = document.createElement('h2')
  h2.id = 'app-title'
  h2.textContent = 'h2 header'

  header.replaceChild(h2, h1)
}
replaceChildHeading()
