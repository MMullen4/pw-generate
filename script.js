// Assignment Code
var generateBtn = document.querySelector("#generate");

var lwcase = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var upcase = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
var symbols = ["!", "@", "#", "%", "^", "&", "*", "(", ")", "_", "+", "=", "-", "<", ">", "?", "/"]
var numbs = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Write password to the #password input
function writePassword() {
  var charLength = window.prompt("Choose a password length (8 to 128 characters :");
  if ((charLength < 8 || charLength > 128) || (console.log(typeof charLength))) {
    alert("Please enter a password length between 8 - 128")
    return;
  }
// (charType_cap.toLowerCase() && charType_numbs.toLowerCase() && charType_sm.toLowerCase() && charType_sym.toLowerCase()) If you are trying to check if the user did not enter any information you should change it to: (!charType_cap.toLowerCase() && !charType_numbs.toLowerCase() && !charType_sm.toLowerCase() && !charType_sym.toLowerCase()) An empty string is considered falsy and putting a ! in front of a false boolean will make it true. If you do not like that logic you can change it to: charType_cap.toLowerCase() === "" This way you are explicitly checking if the value is an empty string. 
  var charType_sm = window.prompt("Include lowercase letters (y/n) ? ");
  var charType_cap = window.prompt("Include uppercase letters (y/n) ? ");
  var charType_numbs = window.prompt("Include numbers (y/n) ? ");
  var charType_sym = window.prompt("Include symbols (y/n) ? ");
  if ((charType_cap.toLowerCase() == "n" && charType_numbs.toLowerCase() == "n" && charType_sm.toLowerCase() == "n" && charType_sym.toLowerCase() == "n") || (!charType_cap.toLowerCase() && !charType_numbs.toLowerCase() && !charType_sm.toLowerCase() && !charType_sym.toLowerCase())) {
    alert("You need to select at least one type of character.")
    return;
  }
  var password = [] //array holding the password
  var passwordText = document.querySelector("#password");
  if (charLength > 7 && charLength < 129) {
    console.log(charType_sm, charType_cap, charType_numbs, charType_sym)
    if (charType_sm.toLowerCase() == "y") {
      password = password.concat(lwcase)
    }
    if (charType_cap.toLowerCase() == "y") {
      password = password.concat(upcase)
    }
    if (charType_numbs.toLowerCase() == "y") {
      password = password.concat(numbs)
    }
    if (charType_sym.toLowerCase() == "y") {
      password = password.concat(symbols)
    }
  }

  console.log(password)
  var result = ""; //empty string to hold characters

  for (var i = 0; i < charLength; i++) {
    var index = Math.floor(Math.random() * password.length)
    result += password[index]
  }

  passwordText.value = result;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
