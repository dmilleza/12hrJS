const itemForm = document.getElementById('item-form')
const itemInput = document.getElementById('item-input')
const itemList = document.getElementById('item-list')
const itemFilter = document.getElementById('filter')
const itemClear = document.getElementById('clear')
const formBtn = itemForm.querySelector('button')
let isEditMode = false

function displayItems() {
  const itemsFromStorage = getItemsFromStorage()
  itemsFromStorage.forEach((item) => addItemtoDOM(item))

  checkUI()
}

function onAddItemSubmit(e) {
  e.preventDefault()

  const newItem = itemInput.value

  // validate input
  if (newItem === '') {
    alert('Please add an item')
    return
  }

  //   check for edit mode
  if (isEditMode) {
    const itemToEdit = itemList.querySelector('.edit-mode')

    removeItemFromStorage(itemToEdit.textContent)
    itemToEdit.classList.remove('edit-mode')
    itemToEdit.remove()
    isEditMode = false
  } else {
    if (checkIfItemExists(newItem)) {
      alert('That item already exists')
      return
    }
  }

  //   create item DOM element
  addItemtoDOM(newItem)

  // add item to local storage
  addItemToStorage(newItem)

  checkUI()

  itemInput.value = ''
}

function addItemtoDOM(item) {
  // create list item
  const li = document.createElement('li')
  li.appendChild(document.createTextNode(item))

  const button = createButton('remove-item btn-link text-red')
  li.appendChild(button)

  // add li to the dom
  itemList.appendChild(li)
}

function createButton(classes) {
  const button = document.createElement('button')
  button.className = classes
  const icon = createIcon('fa-solid fa-xmark')
  button.appendChild(icon)
  return button
}

function createIcon(classes) {
  const icon = document.createElement('i')
  icon.className = classes
  return icon
}

function addItemToStorage(item) {
  const itemsFromStorage = getItemsFromStorage()

  //   add new item to array
  itemsFromStorage.push(item)
  console.log(itemsFromStorage)

  //   convert to json string and set to local storage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}

function getItemsFromStorage() {
  let itemsFromStorage

  if (localStorage.getItem('items') === null) {
    console.log('null')
    itemsFromStorage = []
  } else {
    itemsFromStorage = JSON.parse(localStorage.getItem('items'))
  }

  return itemsFromStorage
}

function onClickItem(e) {
  if (e.target.parentElement.classList.contains('remove-item')) {
    removeItem(e.target.parentElement.parentElement)
  } else {
    setItemToEdit(e.target)
  }
}

function checkIfItemExists(item) {
  const itemsFromStorage = getItemsFromStorage()
  return itemsFromStorage.includes(item)
}

function setItemToEdit(item) {
  isEditMode = true

  itemList
    .querySelectorAll('li')
    .forEach((i) => i.classList.remove('edit-mode'))

  item.classList.add('edit-mode')
  formBtn.innerHTML = '<i class="fa-solid fa-pen"></i> Update Item'
  formBtn.style.backgroundColor = '#228B22'
  itemInput.value = item.textContent
}

function removeItem(item) {
  item.remove()

  removeItemFromStorage(item.textContent)

  checkUI()
}

function removeItemFromStorage(item) {
  let itemsFromStorage = getItemsFromStorage()

  // filter out item to be removed
  itemsFromStorage = itemsFromStorage.filter((i) => i !== item)

  //   re-set to localStorage
  localStorage.setItem('items', JSON.stringify(itemsFromStorage))
}

function clearItems() {
  while (itemList.firstChild) {
    itemList.firstChild.remove()
  }

  //   clear from localStorage
  localStorage.removeItem('items')
  checkUI()
}

function filterItems(e) {
  const text = e.target.value.toLowerCase()
  const items = itemList.querySelectorAll('li')

  items.forEach((item) => {
    const itemName = item.textContent.toLowerCase()

    if (itemName.indexOf(text) != -1) {
      item.style.display = 'flex'
    } else {
      item.style.display = 'none'
    }
  })
}

function checkUI() {
  itemInput.value = ''

  const items = itemList.querySelectorAll('li')

  if (items.length === 0) {
    itemClear.style.display = 'none'
    itemFilter.style.display = 'none'
  } else {
    itemClear.style.display = 'block'
    itemFilter.style.display = 'block'
  }

  formBtn.innerHTML = '<i class="fa-solid fa-plus"></i> Add Item'
  formBtn.style.backgroundColor = '#333'

  isEditMode = false
}

function init() {
  // event listeners
  itemForm.addEventListener('submit', onAddItemSubmit)
  itemList.addEventListener('click', onClickItem)
  itemClear.addEventListener('click', clearItems)
  itemFilter.addEventListener('input', filterItems)
  document.addEventListener('DOMContentLoaded', displayItems)

  checkUI()
}

init()
