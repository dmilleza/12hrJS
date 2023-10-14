const itemInput = document.getElementById('item-input')
const priorityInput = document.getElementById('priority-input')
const checkbox = document.getElementById('checkbox')
const heading = document.querySelector('h1')

// use input event instead of keydown because it
// works on other input types
itemInput.addEventListener('input', onInput)

// gets the value attribute of the option chosen
// can use either change or input event
priorityInput.addEventListener('input', onInput)

function onInput(e) {
  console.log(e.target.value)
}

// for checkboxes, instead of e.target.value,
// we use e.target.checked
checkbox.addEventListener('input', onChecked)
function onChecked(e) {
  console.log(e.target.checked)
}

// focus and blur are mainly for styling
itemInput.addEventListener('focus', onFocus)
function onFocus() {
  console.log('focused')
  itemInput.style.outlineStyle = 'solid'
  itemInput.style.outlineWidth = '1px'
  itemInput.style.outlineColor = 'pink'
}

itemInput.addEventListener('blur', onBlur)
function onBlur() {
  console.log('unfocused')
  itemInput.style.outlineStyle = 'none'
}
