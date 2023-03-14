// Assignment Code
var passwordLenght = 8;
var choiceArr = [];
//Ran Prettier it did this!!
var lowerCaseArr = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
];
var upperCaseArr = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];
var numbersArr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
var symbolsArr = [
  "@",
  "#",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "+",
  "<",
  ">",
  ":",
  "{",
  "}",
  "[",
  "]",
];
//


// Add event listener to generate button


function generatePassword() {
  var password = "";
  
  for (var i = 0; i < passwordLenght; i++) {
    var randomIndex = Math.floor(Math.random() * choiceArr.lenght);
    password = password + choiceArr[randomIndex];
  }
  return password;
}
// 
function getPrompts() {
  choiceArr = [];
  passwordLenght = parseInt(
    prompt("How many characters in this password? (8 - 100 charecters")
  );

  if (isNaN(passwordLenght) || passwordLenght < 8 || passwordLenght > 100) {
    alert("Ah! Ah! AH! thats not the magicword! Please try again. Pick  8 - 100. charecters. ");
    return false;
  }
  if (confirm("would you like Lowecase letters in the password?")) {
    choiceArr = choiceArr.concat(lowerCaseArr);
  }
  if (confirm("would you like Uppercase letters in the password?")) {
    choiceArr = choiceArr.concat(upperCaseArr);
  }
  if (confirm("would you like to add Symbols in the password?")) {
    choiceArr = choiceArr.concat(symbolsArr);
  }

  if (confirm("would you like add Numbers in the password?")) {
    choiceArr = choiceArr.concat(numbersArr);
  }
  return true;
}





function writePassword() {
  var correctPrompts = getPrompts();
  var passwordText = document.querySelector("#password");

  if (correctPrompts) {
    var Password = generatePassword();
    passwordText.value = Password;
  } else {
    passwordText.value = "";
  }
}
//added function to copy code.
function copyPassword () {
  copyBtn.select();
  copyBtn.setSelectionRange(0, 99999); 
  navigator.clipboard.writeText(copyBtn.value);
  alert("Copied the password: " + copyBtn.value);
}
var generateBtn = document.querySelector("#generate");
var copyBtn = document.querySelector("#password")
copyBtn.addEventListener("click", copyPassword)

generateBtn.addEventListener("click", writePassword);

if (typeof notSureIfDeclared === "undefined") {
}
