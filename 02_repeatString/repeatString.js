const repeatString = function (string, num) {
  let newStr = "";
  if (num < 0) {
    newStr = "ERROR";
  }
  for (let i = 0; i < num; i++) {
    newStr += string;
  }
  return newStr;
};

// Do not edit below this line
module.exports = repeatString;
