// break
for (let i = 0; i <= 5; i++) {
  if (i === 3) {
    console.log('breaking')
    break
  }
  console.log(i)
}
// 0
// 1
// 2
// breaking

// continue
// 3 is not logged because it breaks out of the iteration and then moves on
for (let i = 0; i <= 5; i++) {
  if (i == 3) {
    // console.log('skipping 3');
    continue
  }
  console.log(i)
}
// 0
// 1
// 2
// skipping 3
// 4
// 5
