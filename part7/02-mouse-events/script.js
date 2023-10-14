const h1 = document.querySelector('h1')

// event listeners
// const onClick = () => console.log('clicked')
// h1.addEventListener('click', onClick)

// const onDblClick = () => console.log('clicked twice')
// h1.addEventListener('dblclick', onDblClick)

// right click
// const onRghtClick = () => console.log('right clicked')
// h1.addEventListener('contextmenu', onRghtClick)

// mouse
// const onMouseDwn = () => console.log('mouse down')
// h1.addEventListener('mousedown', onMouseDwn)

// const onMouseUp = () => console.log('mouse up')
// h1.addEventListener('mouseup', onMouseUp)

// const onMouseWheel = () => console.log('mouse wheel')
// h1.addEventListener('wheel', onMouseWheel)

// same as mouse hover
// const onMouseOver = () => console.log('mouse over')
// h1.addEventListener('mouseover', onMouseOver)

// const onMouseOut = () => console.log('mouse out')
// h1.addEventListener('mouseout', onMouseOut)

// dragging, doesn't work on text
const onDragStrt = () => console.log('drag start')
h1.addEventListener('dragstart', onDragStrt)

const onDrag = () => console.log('drag')
h1.addEventListener('drag', onDragStrt)

const onDragEnd = () => console.log('drag end')
h1.addEventListener('dragend', onDragEnd)
