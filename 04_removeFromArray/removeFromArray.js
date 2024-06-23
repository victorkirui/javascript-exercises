const removeFromArray = function (arr, ...numbers) {
  let newArray = arr.filter((item) => !numbers.includes(item));

  return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
