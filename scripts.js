// dette skriptet er for hamburgermenyen
function toggleMenu() {
    var meny = document.getElementById("meny");
    meny.classList.toggle("active");
  
    var lines = document.getElementsByClassName("line");
    for (var i = 0; i < lines.length; i++) {
      lines[i].classList.toggle("spin");
    }
  }


// FORKLARING: Dette scriptet sjekker om du har skrevet samme passord eller ikke i bekreft-passord feltet
function validateForm(event) {
  event.preventDefault();
  
  var username = document.getElementById('username').value;
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  var confirmPassword = document.getElementById('confirm-password').value;
  
  var errorMessage = document.getElementById('error-message');
  errorMessage.innerHTML = '';
  
  if (password !== confirmPassword) {
    errorMessage.innerHTML = 'Passordene matcher ikke!';
    return;
  }
  
  document.getElementById('signup-form').submit();
  }
  



