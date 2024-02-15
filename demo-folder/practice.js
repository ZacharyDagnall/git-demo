function mysterious_function(num, thing) {
  let floatNum = parseFloat(num);
  if (floatNum === 1) {
    return `There is ${num} ${thing}.`;
  }

  if (isNaN(floatNum)) {
    return `ERROR: Input ${num} is not a number!`;
  }

  return `There are ${num} ${thing}s.`;
}

console.log(mysterious_function(12, "apple"));
console.log(mysterious_function("10.45", "peaches"));
console.log(mysterious_function(9, "banana"));
console.log(mysterious_function(3, "mouse"));
console.log(mysterious_function(1, "orange"));
console.log(mysterious_function(0, "orange"));
console.log(mysterious_function("11", "coyotes"));
console.log(mysterious_function("grapefruit", 20));
console.log(mysterious_function("chocolate", "cereal"));
console.log(mysterious_function("basketball", "football"));
