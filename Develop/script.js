// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function getPasswordLength() {
  const passwordLength = prompt("How long would you like your password? (8-128 characters)");
    if (passwordLength < 8 || passwordLength > 128){
      alert("Please enter a valid password length.");
      getPasswordLength();
    }
    else {
      return passwordLength;
    }
}
  
  function getPasswordTypes() {
  const charTypes = prompt("What type(s) of characters would you like in your password? Your options are lowercase, uppercase, numbers and/or special characters. (Please seperate your options with commas)").split(",");
  for(let i=0; i<charTypes.length; i++){
    charTypes[i].toLowerCase();
  }
    if(!charTypes.includes("lowercase") && !charTypes.includes("uppercase") && !charTypes.includes("numbers") && !charTypes.includes("special characters")) {
      alert("Please enter valid character options.");
      getPasswordTypes();
      }
    else{
      return charTypes;
    }
  }

  function generatePassword() {
    getPasswordLength();
    getPasswordTypes();
    
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
