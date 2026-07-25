function login(){

let user=document.getElementById("username").value;
let pass=document.getElementById("password").value;

if(user==="admin" && pass==="12345"){

window.location="dashboard.html";

}else{

alert("Wrong Username or Password");

}

}
