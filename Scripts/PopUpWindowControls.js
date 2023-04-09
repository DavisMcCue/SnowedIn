//Retrieving Data and Storing Data Local
function StoreUsernameVariable(){
    let Users = document.getElementById("usernameVar").value;
    //alert(Users)

//Storing Data Local
var localUsers = localStorage.setItem("Users", Users);
    
}