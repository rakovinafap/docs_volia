



function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
  
    if (username == "admin" || password == "kerui2017") {
      window.location.href = 'http://127.0.0.1:5500/volia-docs.space/volia-docs.space/form.html'; 
      return true;
     
    } else  {
      document.querySelector('.result').innerHTML = "Шото пошло не так, дядя";
      return false;
    }
  };



