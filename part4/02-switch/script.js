const d = new Date(2023, 2, 11, 16, 0, 0);
const month = d.getMonth();

switch (month) {
  case 1:
    console.log('it is jan');
    break;
  case 2:
    console.log('it is feb');
    break;
  case 3:
    console.log('it is mar');
    break;
  case 4:
    console.log('it is apr');
    break;
  default:
    console.log('month does not exist');
}
// it is feb