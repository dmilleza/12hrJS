const itemInput = document.querySelector('#item-input')

// const onPress = (e) => {
//   console.log('keypress')
// }

// itemInput.addEventListener('keypress', onPress)

// function onUP(e) {
//   console.log('keyup')
// }

// itemInput.addEventListener('keyup', onUP)

function onDown(e) {
  // key
  // console.log(e.key)
  // keyCode
  // console.log(e.keyCode);
  // code
  // console.log(e.code);

  // if (e.repeat) {
  //   console.log('you are holding down ' + e.key)
  // }

  // returns true or false
  // console.log('shift: ' + e.shiftKey);
  // console.log('alt: ' + e.altKey);
  // console.log('control: ' + e.ctrlKey);

  // if (e.shiftKey && e.key === 'K') {
  //   console.log('you hit shift + k');
  // }
  
}

itemInput.addEventListener('keydown', onDown)
