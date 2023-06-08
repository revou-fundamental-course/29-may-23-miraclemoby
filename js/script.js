function validateform(){
    var text = document.forms["message-form"]["full-name"].value;
    var date = document.forms["message-form"]["birth-date"].value;
    var gender = document.forms["message-form"]["gender"].value;
    var messages = document.forms["message-form"]["messages"].value;
  
    if  (text =="" || date == "" || gender == "" || messages == "") {
      alert("Input tidak boleh kosong");
      console.log();
      return false;
    }
  
    document.getElementById("sender-full-name").innerText= text;
    document.getElementById("sender-birth-date").innerText= date;
    document.getElementById("sender-gender").innerText=gender;
    document.getElementById("sender-messages").innerText=messages;
    
    return false;
  }

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
  showDivs((slideIndex +=n));
}

function showDivs(n) {
  var i;
  var x; document.getElementsByClassName("img-slideshow");
  if (n > x.length) {
    slideIndex = 1;
  }
  if (n < 1){
    slideIndex = x.length
  }

  for (i = 0; i < x.length; i++) {
    x[1].style.display = "none"
  }
  x[slideIndex - 1].style.display = "block"
}