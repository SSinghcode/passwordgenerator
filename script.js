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

function generatePassword() {
  let finalChar = '';

  let lengthOfPassword = promptLength();

  if (!lengthOfPassword) {
    alert('Enter a valid length.Please try again');
    return '';
  }
  if (validateYesOrNo(openPrompt('Do you want to add Lower case to Password. ' + promptResponseOptionMessage, 'YES'))) {
    finalChar += smallCase;
  }
  if (validateYesOrNo(openPrompt('Do you want to add upper case to Password. ' + promptResponseOptionMessage, 'YES'))) {
    finalChar += upperCase;
  }
  if (validateYesOrNo(openPrompt('Do you want to add numeric character to Password. ' + promptResponseOptionMessage, 'YES'))) {
    finalChar += numericCase;
  }
  if (validateYesOrNo(openPrompt('Do you want to add spacial character to Password. ' + promptResponseOptionMessage, 'YES'))) {
    finalChar += specialCharacterCase;
  }

  if (finalChar.length) {
    var password = ''
    for (var i = 0, n = finalChar.length; i < lengthOfPassword; ++i) {
      password += finalChar.charAt(Math.floor(Math.random() * n));
    }
    return password;
  } else {
    alert('You need to select atleast one type to proceed');
    return '';
  }


}
