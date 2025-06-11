const removeFromArray = (array, ...args) => {
  let filteredArray = [...array];
  for (let i = 0; i < args.length; i++) {
    filteredArray = filteredArray.filter(item => item !== args[i]);
  }
  return filteredArray;
};

// Do not edit below this line
module.exports = removeFromArray;
