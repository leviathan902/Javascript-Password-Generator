// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);




// var generateBtn = document.querySelector("#generate");
// // Possible characters
// var criteria = {
//   lowercase: ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"],
//   uppercase: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
//   numeric: [0,1,2,3,4,5,6,7,8,9],
//   specialChara: ["+", "-", "&&", "||", "!", "(", ")", "{", "}", "[", "]", "^",
//   "~", "*", "?", ":"]
// }
// // Prompts after click
// function generatePassword() {
//   var passLength = prompt("Please enter length of password - 8 to 128 characters.");
//   if (passLength < 8 || passLength > 128) {
//     alert("Invalid selection, please try again.");
//     return;
//   }
//   else {
//   }
//   passCharacters = prompt("Please choose the following: \nLowercase\nUppercase\nNumeric\nSpecial Characters");
//   if (passCharacters == "lowercase") {
//     for (i = 0; i <= passLength - 1; i++) {
//       var index = Math.floor(Math.random() * criteria.lowercase.length);
//       var digit = criteria.lowercase[index];
//       console.log(digit);
//     }
//   }
//   else if (passCharacters == "uppercase") {
//     for (i = 0; i <= passLength - 1; i++) {
//       var index = Math.floor(Math.random() * criteria.uppercase.length);
//       var digit = criteria.uppercase[index];
//       console.log(digit);
//     }
//   }
//   else if (passCharacters == "numeric") {
//     for (i = 0; i <= passLength - 1; i++) {
//       var index = Math.floor(Math.random() * criteria.numeric.length);
//       var digit = criteria.numeric[index];
//       console.log(digit);
//     }
//   }
//   else if (passCharacters == "special character") {
//     for (i = 0; i <= passLength - 1; i++) {
//       var index = Math.floor(Math.random() * criteria.specialChara.length);
//       var digit = criteria.specialChara[index];
//       console.log(digit);
//     }
//   }
//   else {
//     alert("Invalid selection, please try again.");
//     prompt("Please choose the following: \nLowercase\nUppercase\nNumeric\nSpecial Characters");
//   }
// }
// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");
//   passwordText.value = password;
// }
// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);
