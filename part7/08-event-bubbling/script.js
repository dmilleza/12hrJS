const button = document.querySelector('form button')

button.addEventListener('click', (e) => {
  alert('button was clicked')
  e.stopPropagation()
})

const div = document.querySelector('form div:nth-child(2)')

// when button is clicked, this also happens because
// it is parent to the button
div.addEventListener('click', () => {
  alert('div was clicked')
})

const form = document.querySelector('form')

form.addEventListener('click', () => {
  alert('form was clicked')
})
