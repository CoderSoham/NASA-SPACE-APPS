// utils.js

// Function to split a comma-separated string and trim each element
function splitAndTrim(value) {
    return value.split(',').map((item) => item.trim());
  }
  
  module.exports = { splitAndTrim };
  