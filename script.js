// Setting variables based off HTML elements.
var characterAmountRange = document.getElementById('characterAmountRange')
var characterAmountNumber = document.getElementById('characterAmountNumber')
var includeUppercaseElement = document.getElementById('includeUppercase')
var includeNumbersElement = document.getElementById('includeNumbers')
var includeSymbolsElement = document.getElementById('includeSymbols')
var form = document.getElementById('passwordForm')
var passwordText = document.getElementById('passwordText')

// When AmountNumber/AmountRange receive input, update syncCharacterAmount
characterAmountNumber.addEventListener('input', syncCharacterAmount) 
characterAmountRange.addEventListener('input', syncCharacterAmount)

// Passing information from form inputs and adding them to password variable
form.addEventListener('submit', e => {
  // When form is submitted, prevents page from refreshing.
  e.preventDefault()
  const characterAmount = characterAmountNumber.value
  const includeUppercase = includeUppercase.checked
  const includeNumbers = includeNumbers.checked
  const includeSymbols = includeSymbols.checked
  
  const password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordText.innerText = passwordText
})


// // Assignment Code
// var generateBtn = document.querySelector("#generate");

// // Write password to the #password input
// function writePassword() {
//   var password = generatePassword();
//   var passwordText = document.querySelector("#password");

//   passwordText.value = password;

// }

// // Add event listener to generate button
// generateBtn.addEventListener("click", writePassword);

