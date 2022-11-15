if(localStorage.Username == null){
    let log = "<button class='nowwhat' onclick='log()'>Log in</button>"
    document.getElementById("userstatus").innerHTML = log;
}else{
    let log = "<button class='nowwhat' onclick='log()'>Log out</button>"
    document.getElementById("userstatus").innerHTML = log;

}



function user(){
    
}

function log(){
    localStorage.removeItem("Username")
    localStorage.removeItem("Address")
    window.location.href = 'login.php'
}

function check(){
    if(localStorage.Username == null){
        window.location.href = 'login.php'
    }else{
        window.location.href = 'check.html'
    }
}