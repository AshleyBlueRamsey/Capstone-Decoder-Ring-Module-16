// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const polybiusModule = (function () {
  //you can add any code you want within this function scope
  function polybius(input, encode = true) {
    const alphabet = "abcdefghijklmnopqrstuvwxyz"; //Declared the alphabet variable to begin deciphering key
    if(encode == true) { //Setting the function to begin encoding
      let results = []; //Declaring the results to equal an array
      input = input.toLowerCase(); //Setting all input to be lower case
      input = input.replace("j", "i"); //Setting input to replace any "j" with "i"
      for (let character of input) { //Setting the function to argue for the character of input
        let index = alphabet.indexOf(character); //Declaring that the index is equal to the return of the position of the first occurrence of the character in the alphabet
        if (index > -1) { //Setting the function to argue that if the index is greater than -1
          let row = Math.floor(index / 5) + 1; //Declaring that a row value will use the Math.floor() function to round down and return the largest integer divided by 5
          let column = index % 5 + 1; //Declares that a column value will be equal to the remainder of the value of the index divided by 5 + 1
          output.push(column.toString() + row.toString()); //Setting the column and row values to strings and adding them to the output
        } else {
          output.push(column); //Setting the value of the column to be added to the output
        };
      };
      output = output.join(""); //Setting the output to wait until the other argument completes its execution
      return output;
    }
    else {
      let trimmed_input = input.replace(" ", ""); //Declaring that trimmed_input be set to the input with spaces replaced with no space
      if (trimmed_input.length % 2 != 0) return false; //Setting the function to return false if the length of the input with the remainder divided by 2 is not equal to zero
      output = []; //Declaring that the output be returned as an array
      for (let i = 0; i < input.length; i++) { //Setting the function to loop through the input
        let characters = input[i]; //Declaring that the variable characters equal the iteration of the loop of the index
        if(characters === " ") { 
          output.push(input[i]); //Setting the function to argue that if the value of characters equals a space then add the iteration of the input to the output
        }
        else {
          let column = parseInt(input[i]); //Declares that the value of column be equal to the value of the iteration of the input changed to an integer
          i = i + 1;
          let row = parseInt(input[i]); //Declares that the value of row be equal to the value of the iteration of the input changed to an integer
          let index = (row - 1) * 5 + column - 1; //Declares that the index equal the value of row minus one, then that value multiplied by 5 and then that value added to the value of the column value minus 1
          output.push(alphabet[index]); //Declaring that the value of the index of the alphabet be added to the output
        };
      };
      output = output.join("");
      output = output.replace("i", "(i/j)");
      return output;
    };
  };
  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
