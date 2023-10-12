/* create a function that's just like insertBefore() 
except it inserts after */

const newEl = document.createElement('li')
newEl.textContent = 'insert me after!'

const firstItem = document.querySelector('li:first-child')

insertAfter(newEl, firstItem)

function insertAfter(toInsert, existingEl) {
  existingEl.parentElement.insertBefore(toInsert, existingEl.nextElementSibling)
}
