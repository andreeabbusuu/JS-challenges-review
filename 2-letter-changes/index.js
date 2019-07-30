
function letterChanges(str) {
  // replace every letter in the string with the letter following it
  // first get the charCOde number of the letter, add , then
  // convert this number to a letter sing fromCharCode function
  // check if char is z and replace it with a because z has no next charCodeAt
  var newStr = str.replace(/[a-z]/gi, function(char){
    return(char === "z" || char === "Z") ? "a" : String.fromCharCode(char.charCodeAt() + 1) 
  })
  return newStr;
}

document.getElementById("app").innerHTML = letterChanges("I love coding");
  // function call
  
