function login(){
    var uname = document.getElementById("username").value;
  
    var pass = document.getElementById("password").value;
  
    if(uname == "lak" && pass == "123"){
     location.assign("https://www.youtube.com/")
    } else {
      document.getElementById("error").innerHTML = "Your login details is not appropriate";
    }
  }