
function firstReverse(str) {
  var splitString = str.split("");
  var reverseArray = splitString.reverse();
  var joinArray = reverseArray.join("");
  return joinArray;
} 

document.getElementById("app").innerHTML = firstReverse("wildcodeschool");
document.getElementById("app").innerHTML = firstReverse("I Love Code");

