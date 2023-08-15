
var btnGenerate = window.document.getElementById("generate")
var lblPassword = window.document.getElementById("password")
var lower = ["b", "r", "j", "q", "o"]
var upper = ["W", "Y", "J", "P", "N"]
var digits = [3, 6, 9, 1, 4]
var special = ["#", "@", "!", "*"]

function displayText (text) {
  lblPassword.innerText = text 
return text 
}

btnGenerate.addEventListener("click", function () {
  console.log("clickthegeneratebutton")
  displayText (generatePassword(12, true))
})

 function generatePassword (length, includeSpecial) {
    var password = ""
    var charlist = []
    charlist = charlist.concat(lower)
    charlist = charlist.concat(upper)
    charlist = charlist.concat(digits)
  if (includeSpecial === true) charlist = charlist.concat(special)

  for(var i=0;i < length;i++) {
    password = password + charlist [getRandom(charlist.length-1)]
  }
  return password
 }

 function getRandom (number) {
  return Math.ceil(Math.random() * number)
 }

// GIVEN I need a new, secure password
// WHEN I click the button to generate a password / DONE
// THEN I am presented with a series of prompts for password criteria / TODO
// WHEN prompted for password criteria / TODO
// THEN I select which criteria to include in the password / TODO
// WHEN prompted for the length of the password 
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN asked for character types to include in the password
// THEN I confirm whether or not to include lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page