const form = document.querySelector('#item-form')

// form.addEventListener('submit', onSubmit)

// function onSubmit(e) {
//   e.preventDefault()

//   const item = document.getElementById('item-input').value
//   const priority = document.getElementById('priority-input').value

//   if (item === '' || priority === '0') {
//     alert('please fill in all fields')
//     return
//   }
//   console.log(item, priority)
// }

form.addEventListener('submit', onSubmit2)

function onSubmit2(e) {
  e.preventDefault()

  const formData = new FormData(form)
  // const item = formData.get('item')
  // const priority = formData.get('priority')

  // returns an iterator that allows us to loop through
  const entries = formData.entries()
  // gives array of form name and value
  for (const entry of entries) {
    console.log(entry)
  }
  // console.log(item, priority)
}
