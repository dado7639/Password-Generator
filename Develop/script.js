// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerArray = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperArray = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numArray = ["1", "2", "3", "4", "5", "6", "7", "8", "9"];
var specialArray = ["%", "*", "$", "!", "@", "#", "^", "&"];

// generatePrefs
function generatePrefs() {
  // number of characters
  var length = prompt(
    "Please write your desired length of password... inbetween 8 and 128"
  );
  // check to make sure the length is corrct
  //loop back to original questions if the desired length is not inbetween 8 and 128
  if (length < 8 || length > 128) {
    alert(
      "The Password Length you selected is not valid. Please enter a length between 8 and 128"
    );
    generatePrefs();
  }

  // loop asking these questions and repeating if the user says they dont want any of them
  var lowercase = confirm("Would you like to include lowercase characters?");
  var uppercase = confirm("would you like to include Uppercase characters?");
  var numeric = confirm("would you like to include numbers?");
  var special = confirm("would you like to include special characters?");
  // user must select atelast one of options
  if (
    lowercase === false &&
    uppercase === false &&
    numeric === false &&
    special === false
  ) {
    alert(
      "You must select OK for atleast one of the previous options to create a password"
    );
    return;
  }

  // create object to store data received from user
  var prefs = {
    length: length,
    lowercase: lowercase,
    uppercase: uppercase,
    numeric: numeric,
    special: special,
  };
  // if we didnt use return fucntion would not spit out info
  return prefs;
}

function randomPicker(anyArray) {
  // math.random random number between 0-1
  var randomNum = Math.floor(Math.random() * anyArray.length);
  var randomItem = anyArray[randomNum];
  return randomItem;
}

// generatePassword
function generatePassword() {
  var userPrefs = generatePrefs();
  // define varibale that holds created password
  var createdPass = [];
  // creates array with all the possible characters can use based on users answer... from top
  var prefArray = [];

  if (userPrefs.lowercase === true) {
    prefArray = prefArray + lowerArray;
  }
  if (userPrefs.uppercase === true) {
    prefArray = prefArray + upperArray;
  }
  if (userPrefs.numeric === true) {
    prefArray = prefArray + numArray;
  }
  if (userPrefs.special === true) {
    prefArray = prefArray + specialArray;
  }
  // loop over using prefarray length number of times
  for (var i = 0; i < userPrefs.length; i++) {
    var chosenItem = randomPicker(prefArray);
    createdPass = createdPass + chosenItem;
  }

  // join method to make createdPass array a single string
  // could not get join method to work... used toString() to make string from createdPass array
  var createdPassString = createdPass.toString();
  // return createdPassString value so generatePassword() function has value
  return createdPassString;
}

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  // how to generate the password using above variables
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
