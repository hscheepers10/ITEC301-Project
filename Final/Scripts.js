
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  if (x == "") {
    alert("Name must be filled out");
    return false;
  }
}

function myFunction() {
    var inpObj = document.getElementById("id1");
    if (!inpObj.checkValidity()) {
      document.getElementById("demo").innerHTML = inpObj.validationMessage;
    }
  }

  var x, txt = "";
  var person = {name:"John", age:30, city:"New York"};
  
  for (x in person) {
  txt += person[x] + " ";
  };
  
  document.getElementById("demo").innerHTML = txt;