const logo = document.querySelector('img')

// logo.addEventListener('click', (e) => console.log(e))
// PointerEvent {isTrusted: true, pointerId: 1, width: 1, height: 1, pressure: 0, …}

// logo.addEventListener('click', (e) => console.log(e.target))
{
  /* <img src="./154629.png" alt="cart" width="80px"> */
}

// logo.addEventListener('click', (e) => console.log(e.currentTarget))
{
  /* <img src="./154629.png" alt="cart" width="80px"> */
}

// logo.addEventListener('click', (e) => console.log(e.type))
// click

// logo.addEventListener('click', (e) => console.log(e.timeStamp))
// 807.7999997138977

// logo.addEventListener('click', (e) => {
//   console.log(e.clientX)
//   console.log(e.clientY)
// })
// 69
// 59

// prevent default
const link = document.querySelector('a')
link.addEventListener('click', (e) => {
  e.preventDefault()
  console.log('link was cancelled')
})

logo.addEventListener('drag', (e) => {
  const h1 = document.querySelector('h1')
  h1.textContent = `X ${e.clientX} Y ${e.clientY}`
})
/* 
- target: the element that triggered the event
- currentTarget: element the event listener is attached to
- type: type of event triggered
- timeStamp: time event was triggered
- clientX: x position of mouse click relative to window
- clientY: y position of mouse click relative to window
- offsetX: x position of mouse click relative to element
- offsetY: y position of mouse click relative to element
- pageX: x position of mouse click relative to page
- pageY: y position of mouse click relative to page
- screenX: x position of mouse click relative to screen
- screenY: y position of mouse click relative to screen
*/
