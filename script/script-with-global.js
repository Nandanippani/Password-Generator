// Array of special characters to be included in password
var specialCharacters = [
  '@',
  '%',
  '+',
  '\\',
  '/',
  "'",
  '!',
  '#',
  '$',
  '^',
  '?',
  ':',
  ',',
  ')',
  '(',
  '}',
  '{',
  ']',
  '[',
  '~',
  '-',
  '_',
  '.'
];

// Array of numeric characters to be included in password
var numericCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

// Array of lowercase characters to be included in password
var lowerCasedCharacters = [
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z'
];

// Array of uppercase characters to be included in password
var upperCasedCharacters = [
  'A',
  'B',
  'C',
  'D',
  'E',
  'F',
  'G',
  'H',
  'I',
  'J',
  'K',
  'L',
  'M',
  'N',
  'O',
  'P',
  'Q',
  'R',
  'S',
  'T',
  'U',
  'V',
  'W',
  'X',
  'Y',
  'Z'
];

// Function to prompt user for password options
// Used global variables and set to false
var numberOfChar = 0;
var includeNumber = false;
var includeUpperCase = false;
var includeLowerCase = false;
var includeSpecialChar = false;


function getPasswordOptions() {
  var validPasswordLength = false;  // here I set validPasswordLength to false and used in while condition with ! to set it to true.

  while (!validPasswordLength) {
    numberOfChar = prompt('Please choose the length of the password to generate');

    if (numberOfChar === null && confirm('Do you want to cancel password generation? ')) {
      break;
    }

    validPasswordLength = numberOfChar >= 10 && numberOfChar <= 64;  // Set number of characters between 10 and 64 and assigned it to validPasswordLength to validate input number so that it only accepts number between 10 and 64.

    if (numberOfChar && !validPasswordLength) { //If numberOfChar and validPasswordLength is false then alerts user about invalid length and asks to enter number between 10 and 64.
      alert('This is not valid length; please enter number between 10 and 64');
    }
  }
  includeNumber = confirm('Do you want numeric characters in your password?');  // Used confirm statement to ask user to include numeric,lowercase, uppercase and special characters.
  includeLowerCase = confirm('Do you want lowercase characters in your password?');
  includeUpperCase = confirm('Do you want uppercase characters in your password?');
  includeSpecialChar = confirm('Do you want special characters in your password?');
}


// Function for getting a random element from an array
function getRandom(arr) {
  var randomChar = arr[Math.floor(Math.random() * arr.length)];// Here using math method created random numbers and assigned to randomChar variable to get random index of array.
  return randomChar;
}

// Function to generate password with user input
function generatePassword() {
  var password = '';  // Used empty string password and called getPasswordOptions function to set global vaiables.
  getPasswordOptions();

  while (password.length < numberOfChar) {   //This condition is set to get password of desired length.
    if (includeNumber && password.length < numberOfChar) {  // If condition is used to set password length, numeric, lowercase, uppercase and special characters to less than number of characters to not exceed password length more than number of characters.
      password += getRandom(numericCharacters);
    }
    if (includeLowerCase && password.length < numberOfChar) {
      password += getRandom(lowerCasedCharacters);
    }
    if (includeUpperCase && password.length < numberOfChar) {
      password += getRandom(upperCasedCharacters);
    }
    if (includeSpecialChar && password.length < numberOfChar) {
      password += getRandom(specialCharacters);
    }
  }
  return password;  // returned password of desired length containing charcters that user wish to include.
}

// Get references to the #generate element
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);