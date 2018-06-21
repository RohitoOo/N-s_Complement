var sum = 0;

function ninesComplements(num) {
  num = num.toString().split('')
  for (i = 0; i < num.length; i++) {
    sum = sum + (9 - num[i])
  }
  return sum;
}
ninesComplements(104);
