// Setting variables based off HTML elements.
var characterAmountRange = document.getElementById('characterAmountRange')
var characterAmountNumber = document.getElementById('characterAmountNumber')
var includeUppercaseElement = document.getElementById('includeUppercase')
var includeNumbersElement = document.getElementById('includeNumbers')
var includeSymbolsElement = document.getElementById('includeSymbols')
var form = document.getElementById('passwordForm')
var passwordText = document.getElementById('passwordText')

// Defining list of charcodes/arrays to pull from.
var UPPERCASE_CODES = arrayCharCode(65, 90)
var LOWERCASE_CODES = arrayCharCode(97, 122)
var NUMBER_CODES = arrayCharCode(48, 57)
var SYMBOL_CODES = arrayCharCode(33, 47).concat(
  arrayCharCode(58, 64)
).concat(
  arrayCharCode(91, 96)
).concat(
  arrayCharCode(123, 126)
)

// When AmountNumber/AmountRange receive input, update syncCharacterAmount
characterAmountNumber.addEventListener('input', syncCharacterAmount)
characterAmountRange.addEventListener('input', syncCharacterAmount)

// Passing information from form inputs and adding them to password variable
form.addEventListener('submit', e => {
  // When form is submitted, prevents page from refreshing.
  e.preventDefault()
  var characterAmount = characterAmountNumber.value
  var includeUppercase = includeUppercaseElement.checked
  var includeNumbers = includeNumbersElement.checked
  var includeSymbols = includeSymbolsElement.checked

  var password = generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols)
  passwordText.innerText = password
})

// Function to run through arrays of characters...
function generatePassword(characterAmount, includeUppercase, includeNumbers, includeSymbols) {
  // Default is lowercase characters
  let charCodes = LOWERCASE_CODES
  if (includeUppercase) charCodes = charCodes.concat(UPPERCASE_CODES)
  if (includeNumbers) charCodes = charCodes.concat(NUMBER_CODES)
  if (includeSymbols) charCodes = charCodes.concat(SYMBOL_CODES)

  var passwordCharacters = []
  for (let i = 0; i < characterAmount; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    passwordCharacters.push(String.fromCharCode(characterCode))
  }
  return passwordCharacters.join('')
}

function arrayCharCode(low, high) {
  var array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
}

// Syncs the number/slider for number of characters. When changing one, the other updates as well.
function syncCharacterAmount(e) {
  var value = e.target.value
  characterAmountNumber.value = value
  characterAmountRange.value = value
}