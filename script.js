// Assignment Code
var generateBtn = document.querySelector("#generate");

var lwcase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upcase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbols = ["!", "@", "#", "%", "^", "&", "*", "(",")", "_", "+", "=","-","< ",">","?","/"]
var numbs = [1,2,3,4,5,6,7,8,9,0,]
  
//var upcase = lwcase.join("','").toUpperCase().split(); takes the lwcase array and converts it into one uppercase string

var charChoice = function () {
  var charChoice = window.Prompt("Choose a password length (8 to 128 characters :");
    return;
} 
var charType_sm = function () {
  var charType_sm = Window.Prompt("Include lowercase letters (y/n) ? ");
  return;
}
var charType_cap = function () {
  var charType_cap = window.prompt("Include uppercase letters (y/n) ? ");
  return;
}
var charType_numbs = function () {
  var charType_numbs = window.prompt("Include numbers (y/n) ? ");
  return;
}
var charType_sym = function () {
  var charType_sym = window.prompt("Include symbols (y/n) ? ");
  return;
}
if (charChoice > 7 && charChoice < 129) {
  
}
  


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
