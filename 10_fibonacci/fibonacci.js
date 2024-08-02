const fibonacci = function (num) {
  let count = typeof num !== "number" ? parseInt(num) : num;

  if (count === 0) {
    return 0;
  }
  if (count < 0) {
    return "OOPS";
  }

  let n1 = 1,
    n2 = 1,
    nextN;

  for (let i = 2; i <= count; i++) {
    nextN = n1 + n2;
    n1 = n2;
    n2 = nextN;
  }

  return n1;
};

// Do not edit below this line
module.exports = fibonacci;
