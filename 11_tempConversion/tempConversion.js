const convertToCelsius = function(fahrenheit) {
  let celcius = (fahrenheit - 32) * 5/9;
  celcius = Math.round(celcius * 10) / 10; // Round to the 1st decimal place
  return celcius; 
};

const convertToFahrenheit = function(celcius) {
  let fahrenheit = (celcius * 9/5) + 32;
  fahrenheit = Math.round(fahrenheit * 10) / 10; // Round to the 1st decimal place
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
