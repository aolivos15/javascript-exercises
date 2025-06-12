const convertToCelsius = (temp) => {
  const inCelsius = (temp - 32) * (5/9);
  return Math.round(inCelsius * 10) / 10
};

const convertToFahrenheit = (temp) => {
  const inFahrenheit = temp * (9/5) + 32;
  return Math.round(inFahrenheit * 10) / 10
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
