function sol(num) {
  if (num && typeof num === "number") {
    if (num > 13) 
      return 2 * Math.abs(num - 13);
    return difference(num, 13);
  } else 
    return NaN;
}

function difference(num1, num2) {
  return num1 > num2 ? num1 - num2 : num2 - num1;
}

const numbers = ["toy", 1, "a", null, -9, undefined, 20, 5.8];
numbers.forEach((num) => console.log(sol(num)));
