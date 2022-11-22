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
function getPasswordOptions() {
    var validPasswordLength = false;
    var passwordOptions = new Object();

    while (!validPasswordLength) {
        passwordOptions.numberOfChar = prompt('Please choose the length of the password to generate');

        if (passwordOptions.numberOfChar === null && confirm('Do you want to cancel password generation? ')) {
            break;
        }

        validPasswordLength = passwordOptions.numberOfChar >= 10 && passwordOptions.numberOfChar <= 64;

        if (passwordOptions.numberOfChar && !validPasswordLength) {
            alert('This is not valid length; please enter number between 10 and 64');
        }
    }

    if (passwordOptions.numberOfChar) {
        passwordOptions.includeNumber = confirm('Do you want numeric characters in your password?');
        passwordOptions.includeLowerCase = confirm('Do you want lowercase characters in your password?');
        passwordOptions.includeUpperCase = confirm('Do you want uppercase characters in your password?');
        passwordOptions.includeSpecialChar = confirm('Do you want special characters in your password?');
    }
    return passwordOptions;
}


// Function for getting a random element from an array
function getRandom(arr) {
    var randomChar = arr[Math.floor(Math.random() * arr.length)];
    return randomChar;
}

// Function to generate password with user input
function generatePassword() {
    var password = '';
    var returnPwdOptions = getPasswordOptions();

    while (password.length < returnPwdOptions.numberOfChar) {
        if (returnPwdOptions.includeNumber && password.length < returnPwdOptions.numberOfChar) {
            password += getRandom(numericCharacters);
        }
        if (returnPwdOptions.includeLowerCase && password.length < returnPwdOptions.numberOfChar) {
            password += getRandom(lowerCasedCharacters);
        }
        if (returnPwdOptions.includeUpperCase && password.length < returnPwdOptions.numberOfChar) {
            password += getRandom(upperCasedCharacters);
        }
        if (returnPwdOptions.includeSpecialChar && password.length < returnPwdOptions.numberOfChar) {
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