// Assignment Code
let generateBtn = document.querySelector("#generate");
let smallCase = 'abcdefghijklmnopqrstuvwxyz';
let upperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
let numericCase = '0123456789';
let specialCharacterCase = '@#$%^&*()_+~}{[]=';
promptResponseOptionMessage = 'Enter Yes or No. Anything else will be treated as No';
// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
