//  if script tag is in the head, you can do these
// window.onload = function () {
//   document.querySelector('h1').textContent = 'hi'
// }

// or

// window.addEventListener('load', () => {
//   document.querySelector('h1').textContent = 'page loaded'
// })

// or
// window.addEventListener('DOMContentLoaded', () => {
//     document.querySelector('h1').textContent = 'here dom loaded'
//   })

// this works if defer attribute is included
//    document.querySelector('h1').textContent = 'hi'

// window.addEventListener('resize', () => {
//   document.querySelector(
//     'h1'
//   ).innerText = `resized to ${window.innerWidth} x ${window.innerHeight}`
// })

// scroll event can be helpful for certain UI effects
// window.addEventListener('scroll', () => {
//   console.log(`scrolled: ${window.scrollX} x ${window.scrollY}`)

//   /* if you have a navigation bar at the top and you want to have
//     it be translucent when you start to scroll, you can test where
//     that scrollY value is */
//   if (window.scrollY > 70) {
//     document.body.style.backgroundColor = 'black'
//     document.body.style.color = 'white'
//   } else {
//     document.body.style.backgroundColor = 'white'
//     document.body.style.color = 'black'
//   }
// })

window.addEventListener('focus', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'pink'
  })
})
window.addEventListener('blur', () => {
  document.querySelectorAll('p').forEach((p) => {
    p.style.color = 'black'
  })
})
