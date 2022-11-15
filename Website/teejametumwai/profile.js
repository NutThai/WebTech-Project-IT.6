if(localStorage.Username == null){

    document.getElementById("userstatus").innerHTML = `<button class='nowwhat' onclick='window.location.href = "login.php"'>Log in</button>`;
}else{

    document.getElementsByClassName("acc")[0].innerHTML = `<div class="fas fa-user"></div>
    <div class="username">${localStorage.Username}</div>`
    document.getElementById("userstatus").innerHTML = `<button class='nowwhat' onclick='window.location.href = "login.php"'>Log out</button>`;

}

function check(){
    if(localStorage.Username == null){
        window.location.href = 'login.php'
    }else{
        window.location.href = 'check.html'
    }
}

function addAddress(){
    document.getElementsByClassName("check_address")[0].innerHTML = `
    ${localStorage.Username} ${localStorage.Address}`;
}