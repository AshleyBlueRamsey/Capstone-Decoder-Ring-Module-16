// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {

  function substitution(input, alphabet, encode = true) {
    const decipheringKey = {}; //Declared that the variable decipheringKey would return an object
    if(!alphabet || alphabet.length < 26 || alphabet.length > 26) return false; //Setting the function to argue if the index is not a character in the alphabet, or if it is less than 97 characters long or larger than 122 characters, return false
    let codeKeyCount = 97; //Declaring that the variable codeKeyCount be equal to 97
    for(let c = 0; c <= 25; c++){ //Setting the function to loop through the index c
      if(Object.values(decipheringKey).includes(alphabet[c])){ return false; } //Setting the function to include the normal letters of the alphabet with the value of the objects in the decipheringKey if they are returned
      else { //Setting the function to argue that if a value in decipheringKey already exists it will be equal to the iteration alphabet[c]
        //set each key to a normal alphabet letter, value to a new alphabet char
        decipheringKey[String.fromCharCode(codeKeyCount)] = alphabet[c]; 
        codeKeyCount++;
      };
    };

    const encryptionKey = input.toLowerCase().split(''); { //Declaring the variable encryptionKey to be equal to the input set to lowercase and split into a new array
		  return encryptionKey.map(letter => {  //Setting the function to iterate through each letter of the input code
		  	for(let plainLetter in decipheringKey){  //Setting the function to iterate through each object in the decipheringKey
		  		let substitutionCode = decipheringKey[plainLetter]; //Declaring that our substitutionCode be the same as the deciphering key with plain letters
          if(letter == " ") return " "; //Setting the function to argue that if the inputted letter is equal to a space, the return a space
		  		if(encode && letter == plainLetter) return substitutionCode; //Setting the function to argue that if we set it to encode, and if our inputted letter is equal to the value of the plainLetter variable, return the value of subsitutionCode
          if(!encode && letter == substitutionCode) return plainLetter; //Setting the function to argue that if we set it to decode, and if our inputted letter is equal to the value of the substitutionCode, return the value of the plainLetter
      };
		}).join('');
    };
  };

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };