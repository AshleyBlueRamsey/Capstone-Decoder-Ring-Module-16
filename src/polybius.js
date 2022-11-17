// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const alpha = "abcdefghiklmnopqrstuvwxyz"; //Declared the variable alpha to equal the 26 letters of the alphabet
    if(encode==true){ //Setting the function to argue that if it is set to encode proceed
      let result = []; //Declaring the results will be an array
      input = input.toLowerCase(); //Setting all input to be put to lower case
      input = input.replace("j", "i"); //Setting the all input to replace any letter 'j' with the letter 'i"
      for (let c of input){ //Setting the function to recognize the characters of the put index
        let index = alpha.indexOf(c); //Declaring that the index be equal to the index of the characters of the alphabet
        if (index>-1) { //Setting the function to argue that if the index is greater than negative one proceed
          let row = Math.floor(index/5)+1; //Declaring that a row will be rounded to the nearest integer once the index has been divided by 5 and then add one to that value
          let col = index%5+1; //Declaring that a column will be the value of the index divided by 5 and then add 1 to that value
            result.push(col.toString()+row.toString()); //Declaring that the value of the column and row, once they have been converted to strings, will be added to the value of the result
          } else{ //Setting the function to return the result with the value of the characters of the index added to it if none of the other requirements are met
            result.push(c);
        }
      }
      result = result.join(""); //Setting the function to join the value of the result to the index string
      return result; //Return the value of the result
    }
    else{ //Setting the function, if the previous arguments are not satisified, to remove all the spaces of the index and let that value be called trimmed_input
      let trimmed_input = input.replace(" ", "");
      if(trimmed_input.length%2!=0) return false; //Declaring that if the value of the trimmed input divided by 2 does not equal zero then return false
      result = []; //Setting the result to equal an array
      for (let i=0; i<input.length; i++){ //Looping through the array
        let ch = input[i];//Declaring the variable ch to be the iteration of the above loop
        if(ch===" "){ //Setting the function to argue if the value of ch is equal to a space...(continues on line 35) 
          result.push(input[i]); //(continued from line 34)...then set the function to add the iteration of the loop to the result
        }
        else{
          let col = parseInt(input[i]); //Declaring that the column variable will be equal to the value of the iteration set to an integer
          i =  i+1; // Declaring that the iteration be equal to the iteration plus 1
          let row = parseInt(input[i]); //Declaring that the row variable will be equal to the value of the iteration set to an integer
          let index = (row-1)*5 + col - 1; //Declaring that the index will be the value of the row minus one, that value multiplied by 5, then adding the value of the column and then subtracting one
          result.push(alpha[index]); //Declaring that the value of the index of the alphabet will be added to the result
        }
      }
      result = result.join(""); //Joins the value of the result to the string
      result = result.replace("i", "(i/j)"); //Setting the function to have any "i"'s changesd to "(i/j)"
      return result;
    }
      
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
