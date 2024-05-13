var isDate = function (input) {
  // Check if the input is a date object
  if (Object.prototype.toString.call(input) === "[object Date]") {
    // Check if the date object is valid
    return !isNaN(input.getTime());
  }
  
  // Check if the input is a string
  if (typeof input === "string") {
    // Attempt to parse the string into a date
    const parsedDate = new Date(input);
    
    // Check if the parsed date is valid
    return !isNaN(parsedDate.getTime());
  }
  
  // If the input is not a date object or a string, return false
  return false;
};


// Do not change the code below.
const input = prompt("Enter Date.");
alert(isDate(input));
