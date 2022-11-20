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

var numberOfChar = 0;
var includeNumber = false;
var includeUpperCase = false;
var includeLowerCase = false;
var includeSpecialChar = false;


function getPasswordOptions() {
  var validPasswordLength = false;

  while (!validPasswordLength) {
    numberOfChar = prompt('Please choose the length of the password to generate');

    if (numberOfChar === null && confirm('Do you want to cancel password generation? ')) {
      break;
    }

    validPasswordLength = numberOfChar >= 10 && numberOfChar <= 64;

    if (numberOfChar && !validPasswordLength) {
      alert('This is not valid length; please enter number between 10 and 64');
    }
  }
  includeNumber = confirm('Do you want numeric characters in your password?');
  includeLowerCase = confirm('Do you want lowercase characters in your password?');
  includeUpperCase = confirm('Do you want uppercase characters in your password?');
  includeSpecialChar = confirm('Do you want special characters in your password?');
}


// Function for getting a random element from an array
function getRandom(arr) {
  var randomChar = arr[Math.floor(Math.random() * arr.length)];
  return randomChar;
}

// Function to generate password with user input
function generatePassword() {
  var password = '';
  getPasswordOptions();

  while (password.length < numberOfChar) {
    if (includeNumber && password.length < numberOfChar) {
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
  return password;
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