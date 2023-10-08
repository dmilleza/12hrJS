const colorObj = {
  color1: 'rojo',
  color2: 'azul',
  color3: 'verde',
  color4: 'naranja',
}

// for (const key in colorObj) {
//   console.log(key)
// }
// color1
// color2
// color3
// color4

// for (const key in colorObj) {
//   console.log(key, colorObj[key])
// }
// color1 rojo
// color2 azul
// color3 verde
// color4 naranja

const colorArr = ['rojo', 'azul', 'verde', 'naranja']
for (const key in colorArr) {
  console.log(colorArr[key])
}
// rojo
// azul
// verde
// naranja
