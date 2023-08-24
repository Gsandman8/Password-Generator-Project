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
  const response = prompt("What type(s) of characters would you like in your password? Your options are lowercase, uppercase, numbers and/or special characters. (Please seperate your options with commas)");
  const charTypes = response.split(",");
  console.log(charTypes);
  for(let i=0; i<charTypes.length; i++){
    charTypes[i] = charTypes[i].toLowerCase();
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
    const passwordLength = getPasswordLength();
    const charTypes = getPasswordTypes();
    let password = "";
    const letters = ["a","b","c","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
    const numbers = ["1","2","3","4","5","6","7","8", "9","0"];
    const specialChars = ["!", "@", "#", "$", "%", "^","&","*","(",")","~","`","-","_","+","=","{","}","[","]",";",":","|","/","'","\"","<",">",".",",","?","\\"];
    for(let i=1;i<=passwordLength;i++){
      //case for all 4 character types
      if(charTypes.includes('lowercase')&&charTypes.includes('uppercase')&&charTypes.includes('numbers')&&charTypes.includes('special characters')){
        let typeCounter = Math.random()*4;
        if(typeCounter>3){
          password = password.concat(letters[Math.floor(Math.random()*letters.length)])
        }
        else if(typeCounter>2){
          password = password.concat(letters[Math.floor(Math.random()*letters.length)].toUpperCase())
        }
        else if(typeCounter>1){
          password = password.concat(numbers[Math.floor(Math.random()*numbers.length)])
        }
        else if(typeCounter>0){
          password = password.concat(specialChars[Math.floor(Math.random()*specialChars.length)])
        }
      }
      //case for all but lowercase
      else if(charTypes.includes('uppercase')&&charTypes.includes('numbers')&&charTypes.includes('special characters')){
        let typeCounter = Math.random()*3;
        if(typeCounter>2){
          password = password.concat(letters[Math.floor(Math.random()*letters.length)].toUpperCase())
        }
        else if(typeCounter>1){
          password = password.concat(numbers[Math.floor(Math.random()*numbers.length)])
        }
        else if(typeCounter>0){
          password = password.concat(specialChars[Math.floor(Math.random()*specialChars.length)])
        }
      }
      //case for all but uppercase
      else if(charTypes.includes('lowercase')&&charTypes.includes('numbers')&&charTypes.includes('special characters')){
        let typeCounter = Math.random()*3;
        if(typeCounter>2){
          password = password.concat(letters[Math.floor(Math.random()*letters.length)])
        }
        else if(typeCounter>1){
          password = password.concat(numbers[Math.floor(Math.random()*numbers.length)])
        }
        else if(typeCounter>0){
          password = password.concat(specialChars[Math.floor(Math.random()*specialChars.length)])
        }
      }
      //case for all but numbers
      else if(charTypes.includes('lowercase')&&charTypes.includes('uppercase')&&charTypes.includes('special characters')){
        let typeCounter = Math.random()*3;
        if(typeCounter>2){
          password = password.concat(letters[Math.floor(Math.random()*letters.length)])
        }
        else if(typeCounter>1){
          password = password.concat(letters[Math.floor(Math.random()*letters.length)].toUpperCase())
        }
        else if(typeCounter>0){
          password = password.concat(specialChars[Math.floor(Math.random()*specialChars.length)])
        }
      }
      //case for all but special characters
      else if(charTypes.includes('lowercase')&&charTypes.includes('uppercase')&&charTypes.includes('numbers')){
        let typeCounter = Math.random()*3;
        if(typeCounter>2){
          password = password.concat(letters[Math.floor(Math.random()*letters.length)])
        }
        else if(typeCounter>1){
          password = password.concat(letters[Math.floor(Math.random()*letters.length)].toUpperCase())
        }
        else if(typeCounter>0){
          password = password.concat(numbers[Math.floor(Math.random()*numbers.length)])
        }
      }
      //case for lower and upper
      else if(charTypes.includes('lowercase')&&charTypes.includes('uppercase')){
        let typeCounter = Math.random()*2;
        if(typeCounter>1){
          password = password.concat(letters[Math.floor(Math.random()*letters.length)])
        }
        else if(typeCounter>0){
          password = password.concat(letters[Math.floor(Math.random()*letters.length)].toUpperCase())
        }
      }
      //case for lower and numbers
      else if(charTypes.includes('lowercase')&&charTypes.includes('numbers')){
        let typeCounter = Math.random()*2;
        if(typeCounter>1){
          password = password.concat(letters[Math.floor(Math.random()*letters.length)])
        }
        else if(typeCounter>0){
          password = password.concat(numbers[Math.floor(Math.random()*numbers.length)])
        }
      }
      //case for lower and special
      else if(charTypes.includes('lowercase')&&charTypes.includes('special characters')){
        let typeCounter = Math.random()*2;
        if(typeCounter>1){
          password = password.concat(letters[Math.floor(Math.random()*letters.length)])
        }
        else if(typeCounter>0){
          password = password.concat(specialChars[Math.floor(Math.random()*specialChars.length)])
        }
      }
      //case for upper and numbers
      else if(charTypes.includes('uppercase')&&charTypes.includes('numbers')){
        let typeCounter = Math.random()*2;
        if(typeCounter>1){
          password = password.concat(letters[Math.floor(Math.random()*letters.length)].toUpperCase())
        }
        else if(typeCounter>0){
          password = password.concat(numbers[Math.floor(Math.random()*numbers.length)])
        }
      }
      //case for upper and special
      else if(charTypes.includes('uppercase')&&charTypes.includes('special characters')){
        let typeCounter = Math.random()*2;
        if(typeCounter>2){
          password = password.concat(letters[Math.floor(Math.random()*letters.length)].toUpperCase())
        }
        else if(typeCounter>0){
          password = password.concat(specialChars[Math.floor(Math.random()*specialChars.length)])
        }
      }
      //case for numbers and special
      else if(charTypes.includes('numbers')&&charTypes.includes('special characters')){
        let typeCounter = Math.random()*2;
        if(typeCounter>1){
          password = password.concat(numbers[Math.floor(Math.random()*numbers.length)])
        }
        else if(typeCounter>0){
          password = password.concat(specialChars[Math.floor(Math.random()*specialChars.length)])
        }
      }
      //case for lower
      else if(charTypes.includes('lowercase')){
          password = password.concat(letters[Math.floor(Math.random()*letters.length)])
      }
      //case for upper
      else if(charTypes.includes('uppercase')){
          password = password.concat(letters[Math.floor(Math.random()*letters.length)].toUpperCase())
      }
      //case for numbers
      else if(charTypes.includes('numbers')){
          password = password.concat(numbers[Math.floor(Math.random()*numbers.length)])
      }
      //case for special
      else if(charTypes.includes('special characters')){
          password = password.concat(specialChars[Math.floor(Math.random()*specialChars.length)])
      }
    }
    return password;
  }

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
