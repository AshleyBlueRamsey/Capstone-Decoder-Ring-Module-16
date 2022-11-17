// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6
const polybiusModule = (function () {
  // you can add any code you want within this function scope

  function polybius(input, encode = true) {
    // your solution code here
    const alpha = "abcdefghiklmnopqrstuvwxyz";
    if(encode==true){
      let result = [];
      input = input.toLowerCase();
      input = input.replace("j", "i")
      for (let c of input){
        let index = alpha.indexOf(c);
        if (index>-1) {
          let row = Math.floor(index/5)+1;
          let col = index%5+1;
            result.push(col.toString()+row.toString());
          } else{
            result.push(c);
        }
      }
      result = result.join("");
      return result;
    }
    else{
      let trimmed_input = input.replace(" ", "");
      if(trimmed_input.length%2!=0) return false;
      result = []
      for (let i=0; i<input.length; i++){
        let ch = input[i];
        if(ch===" "){
          result.push(input[i])
        }
        else{
          let col = parseInt(input[i]);
          i =  i+1;
          let row = parseInt(input[i]);
          let index = (row-1)*5 + col - 1;
          result.push(alpha[index]);
        }
      }
      result = result.join("");
      result = result.replace("i", "(i/j)");
      return result;
    }
      
  }

  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
