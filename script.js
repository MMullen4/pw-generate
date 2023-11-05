// Assignment Code
var generateBtn = document.querySelector("#generate");

var lwcase = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var upcase = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var symbols = ["!", "@", "#", "%", "^", "&", "*", "(",")", "_", "+", "=","-","< ",">","?","/"]
var numbs = [1,2,3,4,5,6,7,8,9,0,]
  
//var upcase = lwcase.join("','").toUpperCase().split(); takes the lwcase array and converts it into uppercase string
// it doesn't work

console.log(lwcase);
console.log(upcase);
console.log(symbols);


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
