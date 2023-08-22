// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}
function generatePassword() {
  const passwordLength = prompt("How long would you like your password? (8-128 characters)");
    if (passwordLength < 8 || passwordLength > 128){
      alert("Please enter a valid password length.");
      generatePassword();
    }
  const charTypes = prompt("What type(s) of characters would you like in your password? Your options are lowercase, uppercase, numbers and/or special characters.").split(",");
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
