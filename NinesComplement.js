var sum = 0;

function nsComplements(num, n) {
  num = num.toString().split('')
  num.forEach( (each) => {
    sum += ( n - each)
  })
  return sum;
}
nsComplements(104, 9);
// 22

// n = any Number
