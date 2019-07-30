
function firstReverse(str) {
    var str = str.split("").reverse().join("");
    return str;
  }
  
  document.getElementById("app").innerHTML = firstReverse("wildcodeschool");
  document.getElementById("app").innerHTML = firstReverse("I Love Code");
  
