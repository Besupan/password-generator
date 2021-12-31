// Assignment code here
var abc = "abcdefghijklmnopqrstuvwxyz";
var ABC = "ABCDEFGHIJKLMNOPQRSTUVWKYZ";
var symb = "!@#$%^&*()";
var num = "0123456789";
var abcLength = abc.length;
var ABCLength = ABC.length;
var symbLength = symb.length;
var numLength = num.length;
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");


function writePassword() {


// Write password to the #password input
function pwLength() {

passwordLength = window.prompt("how long do you want your password? (8-128 character limit)");

if (parseInt(passwordLength) < 8 || parseInt(passwordLength) > 128) {
  window.alert("password length must me between 8 and 128");
  this.pwLength();
} 
return parseInt(passwordLength);
};

//set values for checkboxes
var set1 = document.querySelector("#abc"); {
if (set1.checked) {
  set1 = true;
} else false;
}

var set2 = document.querySelector("#ABC");{
if (set2.checked) {
  set2 = true;
} else false;
}

var set3 = document.querySelector("#symb"); {
if (set3.checked) {
  set3 = true;
} else false;
}

var set4 = document.querySelector("#num"); {
if (set4.checked) {
  set4 = true;
} else false;
}

//confirm or deny input of variables
  if (set1 === true) {
    var lowerCase = abc;
  } else if (set1 === false) {
    lowerCase = null;
    abcLength = null;
  }
  
  if (set2 === true) {
    var upperCase = ABC;
  } else if (set2 === false) {
    upperCase = null;
    ABCLength = null;
  }

  if (set3 === true) {
    var specialCase = symb;
  } else if (set3 === false) {
    specialCase = null;
    symbLength = null;
  }

  if (set4 === true) {
    var numeric = num;
  } else if (set4 === false) {
    numeric = null;
    numLength = null;
  }
//create array of variables
var options = [lowerCase, upperCase, specialCase, numeric]
var passwordLength = pwLength();
//filter out undefined variables
options = options.filter(function(element) {
  return element !== undefined;
});
//generate passord
function generatePassword(length) {
  var randomNumber     = '';
  
  for ( var i = 0; i < length; i++ ) {
    var varietys = options[Math.floor(Math.random() * options.length)];
    var varRandom = varietys.charAt(Math.floor(Math.random() * varietys.length));
    randomNumber += varRandom;
 }
 return randomNumber;
}
var password = generatePassword(passwordLength);  

var passwordText = document.querySelector("#password");

passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


//character length 8-128
// include lowercase, uppercase, numeric or special?
// at least one character type be selected
// generate password that matched said criteria
// display in alert or written to page.