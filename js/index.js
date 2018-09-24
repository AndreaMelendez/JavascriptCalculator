var keys = document.querySelectorAll("#JSCalculator span");
var operators = ["+", "-", "x", "÷"];
var decimal = false;

for (var i = 0; i < keys.length; i++) {
  keys[i].onclick = function(e) {
    var input = document.querySelector("#display");
    var value = input.innerHTML;
    var valueBtn = this.innerHTML;

    if (valueBtn == "C") {
      input.innerHTML = "";
      decimal = false;
    } else if (valueBtn == "=") {
      var operation = value;
      var operatorLast = operation[operation.length - 1];
      operation = operation.replace(/x/g, "*").replace(/÷/g, "/");

      if (operators.indexOf(operatorLast) > -1 || operatorLast == ".") {
        operation = operation.replace(/.$/, "");
      }

      if (operation){
        input.innerHTML = eval(operation);
      }
      decimal = false;
    } else if (operators.indexOf(valueBtn) > -1) {
      var lastChar = value[value.length - 1];

      if (value != "" && operators.indexOf(lastChar) == -1) {
        input.innerHTML += valueBtn;
      } else if (value == "" && valueBtn == "-") {
        input.innerHTML += valueBtn;
      }
      if (operators.indexOf(lastChar) > -1 && value.length > 1) {
        input.innerHTML = value.replace(/.$/, valueBtn);
      }
      decimal = false;
    } else if (valueBtn == ".") {
      if (!decimal) {
        input.innerHTML += valueBtn;
        decimal = true;
      }
    } else {
      input.innerHTML += valueBtn;
    }
    e.preventDefault();
  };
}