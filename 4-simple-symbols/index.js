function simpleSymbols(str) {

    var arr = str.toLowerCase().split("");
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] >= "a" && arr[i] <= "z") {
        if (i === 0 || i === arr.length) {
          return false;
        }
  
        if (arr[i - 1] !== "+" || arr[i + 1] !== "+") {
          return false;
        }
      }
    }
  
    return true;
  
  }
   
  
  document.getElementById("app").innerHTML =
    simpleSymbols("+d+=3=+s+");
    document.getElementById("app").innerHTML =
    simpleSymbols("f++d+");
   


  