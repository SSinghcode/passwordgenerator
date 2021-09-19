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
  if (password) {
    var passwordText = document.querySelector("#password");
    passwordText.value = password;
  } else {
    alert('Sorry ! Password can not be generated.Please try again')
  }

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
let finalChar = '';

let lengthOfPassword = promptLength();

if (!lengthOfPassword) {
  alert('Enter a valid length.Please try again');
  return '';
}