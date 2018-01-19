/* 
Victoria Castillo 111523171
adapted from lecture slides and examples */

function formValidation() {
  clearerrors();
  var result = validPassword();
  result = matchPassword() && result;
  result = validateFirstname() && result;
  result = validateSurname() && result;
  result = validatePhoneNumber() && result;
  result = fillStatus() && result;
  return result;
}

function validateFirstname() {

  var errors = document.querySelector("#fnerror");
  var allAlpha = true;
  var passAlpha = false;
  var alphString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var elem = document.getElementById("firstname");
  var inputValue = elem.value.trim();
  if (inputValue.length == 0) {      /* check the length */
    errors.innerHTML += "&#10060; Please enter a first name";
    return false;
  }
  inputValue = inputValue.toUpperCase();
  for (var i = 0; i < inputValue.length; i++) {
    // check all character are letters
    if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z") { allAlpha = false; }
    if (inputValue.charAt(i) == "'") { allAlpha = true; } // accepts apostrophe
    if (inputValue.charAt(i) == "-") { allAlpha = true; } // accepts hyphen
    if (alphString.indexOf(inputValue.substr(i, 1)) >= 0) { passAlpha = true; } // checks at least one letter
  }  // for
  if (!allAlpha) {
    errors.innerHTML += "&#10060; Only letters, ', and - are accepted";
    elem.focus();
    return false;
  }
  if (!passAlpha) {
    errors.innerHTML += "&#10060; Please enter a first name with at least one letter";
    return false; // failed for validation
  }

  /* else */
  return true; // passed for validation
}  //  End of function

function validateSurname() {

  var errors = document.querySelector("#lnerror");
  var allAlpha = true;
  var passAlpha = false;
  var alphString = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var elem = document.getElementById("lastname");
  var inputValue = elem.value.trim();
  if (inputValue.length == 0) {      /* check the length */
    errors.innerHTML += "&#10060; Please enter a last name";
    return false;
  }
  inputValue = inputValue.toUpperCase();
  for (var i = 0; i < inputValue.length; i++) {
    // check all character are letters
    if (inputValue.charAt(i) < "A" || inputValue.charAt(i) > "Z") { allAlpha = false; }
    if (inputValue.charAt(i) == "'") { allAlpha = true; } // accepts apostrophe
    if (inputValue.charAt(i) == "-") { allAlpha = true; } // accepts hyphen
    if (alphString.indexOf(inputValue.substr(i, 1)) >= 0) { passAlpha = true; } // checks at least one letter
  }  // for
  if (!allAlpha) {
    errors.innerHTML += "&#10060; Only letters, ', and - are accepted";
    elem.focus();
    return false;
  }
  if (!passAlpha) {
    errors.innerHTML += "&#10060; Please enter a last name with at least one letter";
    return false; // failed for validation
  }

  /* else */
  return true; // passed for validation
}  //  End of function

function validPassword() {
  var errors = document.querySelector("#ps1error");
  //var clearErr = document.querySelector("#ps1error").innerHTML = "";
  var passUp = false;
  var passLow = false;
  var passNum = false;
  var upString = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  var lowString = "abcdefghijklmnopqrstuvwxyz"
  var numString = "1234567890";
  var elem = document.getElementById("password1");
  var inputValue = elem.value.trim();
  if (inputValue.length < 8) {      /* check the length */
    errors.innerHTML = "&#10060; Password must have at least 8 characters";
    return false;
  }
  for (var i = 0; i < inputValue.length; i++) {
    if (upString.indexOf(inputValue.substr(i, 1)) >= 0) { passUp = true; } // checks at least one upper case letter
    if (lowString.indexOf(inputValue.substr(i, 1)) >= 0) { passLow = true; } // checks at least one lower case letter
    if (numString.indexOf(inputValue.substr(i, 1)) >= 0) { passNum = true; } // checks at least one number
  }  // for

  if (!passUp) {
    errors.innerHTML = "&#10060; Must contain at least one upper case letter";
    return false; // failed for validation
  }

  if (!passLow) {
    errors.innerHTML = "&#10060; Must contain at least one lower case letter";
    return false; // failed for validation
  }

  if (!passNum) {
    errors.innerHTML = "&#10060; Must contain at least one number";
    return false; // failed for validation
  }

  return true;
} // end of function

// Verifies that retyped password matches

function matchPassword() {
  var errors = document.querySelector("#ps2error");
  var elem1 = document.getElementById("password1").value;
  var elem2 = document.getElementById("password2").value;

  if (elem1 != elem2) {
    errors.innerHTML = "&#10060; Passwords do not match";
    return false;
  }

  return true;
}

// adapted from lecture slides

function validatePhoneNumber() {

  var str = document.getElementById("phonenumber").value;
  str = str.trim();
  var errors = document.querySelector("#phoneerror");

  var stringLength = str.length;

  if (stringLength == 0) {
    errors.innerHTML = "&#10060; You must enter a valid phone number";
    return false;
  }

  if (str.charAt(3) !== '-' || str.charAt(7) !== '-' || stringLength !== 12) {
    errors.innerHTML = "&#10060; Enter the phone number in the format 999-999-9999";
    return false;
  }
  else {
    var i, flag = true, myArray = str.split('-');
    for (i = 0; i < 3; i++) {
      if (parseInt(myArray[i]) != myArray[i]) {
        flag = false;
        break;
      }
    }

    if (!flag) {
      errors.innerHTML = "&#10060; Enter the phone number in the format 999-999-9999";
      return false;
    }
  }

  return true;

}  //  End of function

function fillStatus () {
  var statusCheck = document.getElementsByName('status');
  var isChecked = false;
  var errors = document.querySelector("#statuserror");

  for (var i = 0; i < statusCheck.length; i++) {
    if (statusCheck[i].checked) {
        isChecked = true;
        break;
    }
  }
  if (!isChecked)   { 
    errors.innerHTML = "&#10060; Please select your graduation status";
    return false;
  }

  return true;
}


function clearerrors() {
  document.querySelector("#lnerror").innerHTML = "";
  document.querySelector("#fnerror").innerHTML = "";
  document.querySelector("#ps1error").innerHTML = "";
  document.querySelector("#ps2error").innerHTML = "";
  document.querySelector("#phoneerror").innerHTML = "";
  document.querySelector("#statuserror").innerHTML = "";
}
