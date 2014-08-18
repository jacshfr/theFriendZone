var elEmail = document.getElementById("email");
var elName = document.getElementById("name");
var elStreetAddress = document.getElementById("streetAddress");
var elCityStatezip = document.getElementById("cityStatezip");
var elCcn = document.getElementById("ccn");
var elExpdt = document.getElementById("expdt");
var elChecked = document.getElementById("chk_box");
var elSubmit = document.getElementById("submit");
elSubmit.disabled = true;

function checkForValid(form) {
  if (form.value == "") {
    form.style.background = "#F78181";
    form = false;
  }
  else {
    form.style.background = "#A9F5A9";
    form = true;
  }
}

function termsAndConditions() {
  if (elChecked.checked == false) {
    elSubmit.disabled = true;
  }
  else {
    elSubmit.disabled = false;
  }
}

function verifyInfo() {
  if ((elEmail.value == "") || (elName.value == "") || (elStreetAddress.value == "") || (elCityStatezip.value == "") || (elCcn.value == "") || (elExpdt.value == "")) {
    document.getElementById("Warning").innerHTML = "Ummm, I think you're missing something.";
  }
  else {
    document.getElementById("Warning").innerHTML = "This looks to be the start of wonderful friendship.";
  }
}

function addListener(name) {
  name.addEventListener("blur", function() {
  checkForValid(name) }, false);
}

elChecked.addEventListener("change", termsAndConditions, false);
elSubmit.addEventListener("click", verifyInfo, false);
addListener(elEmail);
addListener(elName);
addListener(elStreetAddress);
addListener(elCityStatezip);
addListener(elCcn);
addListener(elExpdt);
