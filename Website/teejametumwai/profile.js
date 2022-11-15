if(localStorage.Username == null){

    document.getElementById("userstatus").innerHTML = "<button class='nowwhat' onclick='log()'>Log in</button>";
}else{

    document.getElementsByClassName("acc")[0].innerHTML = `<div class="fas fa-user"></div>
    <div class="username">${localStorage.Username}</div>`
    document.getElementById("userstatus").innerHTML = "<button class='nowwhat' onclick='log()'>Log out</button>";

}





function log(){
    localStorage.clear
    window.location.href = 'login.php'
}

function check(){
    if(localStorage.Username == null){
        window.location.href = 'login.php'
    }else{
        window.location.href = 'check.html'
    }
}