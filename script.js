// // Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    //prompt for size of the password
    let n = prompt('Type number of charcters for your password (min=8 max=128)');
    //validate the number of charcters are min 8 and max 128 chars
    if (!(n >= 8 && n <= 128 ) || n === null) {
      return alert('Does not meet password criteria (min=8 max=128), start again');
    }
    
    // Confirm the criteria selection True and false
    let lowerCaseConf = confirm('Would you like to include lower case charcters ?');
    
    let upperCaseConf = confirm('Would you like to include upper case charcters ?');
    
    let numConf = confirm('Would you like to include number ?');

    let spclConf = confirm('Would you like to include special charcters ?');

    // validate at least one character criteria selected (at least 1 true)
    if (lowerCaseConf === false && upperCaseConf === false && numConf === false && spclConf === false) {
      return alert('Oops!! No password charcters type selected, start again');
    }

    // select random charcters from charcters arrays
    function randLower() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 97)); 
    }

    function randUpper() {
      return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
    }

    function randNumber() {
      return String.fromCharCode(Math.floor(Math.random() * 10 + 48));
    }

    function randSpecial() {
      var special = "!#$%&'()*+,-./:;<=>?@[]^_`{|}~";
      return special[Math.floor(Math.random() * special.length)];
    }

    function generatePassword() {
      // declare empty var for password
      var Pass = ""
      var finalPass = ""
      // this is the loop building the pass char by char, this password length would be 16 chars
      for (var i=0; i<n; i++) {
        
        // Randomize the picking of types
        randomFunc = Math.floor(Math.random() * 4) 
        
        if (randomFunc === 0 && lowerCaseConf === true) {finalPass =randLower()}
        if (randomFunc === 1 && upperCaseConf === true) {finalPass =randUpper()}
        if (randomFunc === 2 && numConf === true) {finalPass =randNumber()} 
        if (randomFunc === 3 && spclConf === true) {finalPass =randSpecial()}

        Pass += finalPass
      } 
       return Pass
    }
      //loop throug the chars type functions with number of chars
      var password = generatePassword();
      var passwordText = document.querySelector("#password");

      passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


