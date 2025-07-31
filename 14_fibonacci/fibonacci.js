const fibonacci = function(num) {
  if (num == 0) {
    return 0;
  } else if (num < 0) {
    return 'OOPS';
  }
  let sequence = [1, 1];
  for (let i = 1; i < num; i++) {
    let nextNum = sequence[i] + sequence[i-1];
    sequence.push(nextNum);
  }
  return sequence[num-1];
};

// Do not edit below this line
module.exports = fibonacci;
