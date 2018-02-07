function min(x, y) {
  if (x < y) {
    return x;
  } else if (x == y) {
    return('no min');
  } else {
    return y;
  }
}

console.log(min(0, 10));

console.log(min(0, -10));