function maxOf3(a, b, c) {
  maxx = 0;
  if (a > b) {
    maxx = a;
  } else {
    maxx = b;
  }
  if (c > maxx) {
    maxx = c;
  }
  return maxx;
}

console.log(maxOf3(7, 89, 111));
