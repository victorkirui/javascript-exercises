const sumAll = function (num1, num2) {
  let sum = 0;

  let large = num1 > num2 ? num1 : num2;
  let small = num1 < num2 ? num1 : num2;

  if (large < 0 || small < 0) {
    sum = "ERROR";
  } else if (typeof large !== "number" || typeof small !== "number") {
    sum = "ERROR";
  } else {
    for (let i = small; i <= large; i++) {
      sum += i;
    }
  }

  return sum;
};

// Do not edit below this line
module.exports = sumAll;
