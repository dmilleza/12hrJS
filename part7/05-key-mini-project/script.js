document.addEventListener('keyup', (e) => {
  //   // my method
  //   // first box
  //   const box1 = document.querySelector('.key:first-child')
  //   const keyBox = box1.childNodes[0]
  //   if (e.key === ' ') {
  //     keyBox.textContent = 'Spacebar'
  //   } else {
  //     keyBox.textContent = e.key
  //   }

  //   // second box
  //   const box2 = document.querySelector('.key:nth-child(2)')
  //   const keyCodeBox = box2.childNodes[0]
  //   keyCodeBox.textContent = e.keyCode

  //   //third box
  //   const box3 = document.querySelector('.key:nth-child(3)')
  //   const codeBox = box3.childNodes[0]
  //   codeBox.textContent = e.code

  // first method
  //   const insert = document.querySelector('#insert')
  //   insert.innerHTML = `
  // <div class="key">
  // ${e.key === ' ' ? 'Space' : e.key}
  // <small>e.key</small>
  // </div>
  // <div class="key">
  // ${e.keyCode}
  // <small>e.keyCode</small>
  // </div>
  // <div class="key">
  // ${e.code}
  // <small>e.code</small>
  // </div>
  // `

  // second method
  const insert = document.querySelector('#insert')
  insert.innerHTML = ''
  // if property has a dot, put quotes around it
  const keyCodes = {
    'e.key': e.key === ' ' ? 'Space' : e.key,
    'e.keyCode': e.keyCode,
    'e.code': e.code,
  }
  for (const key in keyCodes) {
    const div = document.createElement('div')
    div.className = 'key'
    const small = document.createElement('small')
    const keyText = document.createTextNode(key)
    const valueText = document.createTextNode(keyCodes[key])
    small.appendChild(keyText)
    div.appendChild(small)
    div.appendChild(valueText)
    insert.appendChild(div)
  }
})
