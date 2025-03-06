



function validate() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;
    
  
    if (username == "admin" && password == "foltex12") {
      window.location.href = 'https://docs-volia.vercel.app/form.html'; 
      return true;
     
    } else  {
      document.querySelector('.result').innerHTML = "Шото пошло не так, дядя";
      return false;
    }
  };



