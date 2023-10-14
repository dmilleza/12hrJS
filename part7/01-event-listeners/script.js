const clearBtn = document.querySelector('#clear')

// clearBtn.onclick = () => {
//   alert('clear items')
// }

// recommended way is to use addEventListener
// clearBtn.addEventListener('click', () => alert('cleared'))

// avoid invoking parentheses on onClear
// clearBtn.addEventListener('click', onClear)

// after three seconds, the click event above is removed
// setTimeout(() => clearBtn.removeEventListener('click', onClear), 3000)

// after three seconds, clicks on the button
// setTimeout(() => clearBtn.click(), 3000)

clearBtn.addEventListener('click', onClear)

function onClear() {
  const list = document.querySelector('ul')
  //   const items = document.querySelectorAll('li')
  //   items.forEach((item) => item.remove())

  // most performant way to delete multiple items
  while (list.firstChild) {
    list.removeChild(list.firstChild)
  }
}
