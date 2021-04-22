// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  // var password = generatePassword();
  var passwordText = document.querySelector("#password");
  // number of characters
  var length = prompt(
    "Please write your desired length of password... inbetween 8 and 128"
  );
  if (length < 8 || length > 128) {
    alert(
      "The Password Length you selected is not valid. Please enter a length between 8 and 128"
    );
  }
  //booleans
  var lowercase = confirm("Would you like to include lowercase characters?");
  var uppercase = confirm("would you like to include lowercase characters?");
  var numeric = confirm("would you like to include numbers?");
  var special = confirm("would you like to include special characters?");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
