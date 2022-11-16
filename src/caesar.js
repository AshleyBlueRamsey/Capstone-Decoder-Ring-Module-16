// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const caesarModule = (function () {
  // you can add any code you want within this function scope

  function caesar(input, shift, encode = true) {
    // your solution code here
    let result = ""; //Set result equal to a string
    if (shift === 0) { //Argues if the shift is strictly equal to zero then it will return false
      return false;
    };
    if (shift === undefined) { //Argues that if the shift is undefined then it will return false
      return false;
    };
    if (shift < -24) {
      //Argues that if the shift is less than -24 it will return false
      return false;
    };
    if (shift > 25) { //Argues that if the shift is greater than 25 it will return false
      return false;
    };
    if (!encode) { //Argues that if the function is decoding then it changes the positive values of the shift to negative values
      shift *= -1;
    };
    input = input.toLowerCase(); //Sets all the input to lower case
    for (let i = 0; i < input.length; i++) { //Loops through the input object of the array
      let charCode = input.charCodeAt(i); //Declares the variable 'charCode' to equal the results of the loop of the input
      if (charCode < 97 || charCode > 123) { //Argues that if the returned value of the loop of the input object is less than 97 or greater than 123 then the result is set to a string
        result += String.fromCharCode(charCode);
        continue;
      };
      charCode += shift;
      if (charCode < 97) {
        charCode += 26;
      };
      if (charCode > 122) {
        charCode -= 26;
      };
      result += String.fromCharCode(charCode);
    };
    return result;
  }

  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
