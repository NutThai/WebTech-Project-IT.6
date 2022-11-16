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
        window.location.href = 'checkout.html'
    }
}

function addAddress(){
    document.getElementsByClassName("check_address")[0].innerHTML = `
    <div class="username">${localStorage.Username}</div>
    <div class="name">${localStorage.FirstName} ${localStorage.LastName}</div> <br>
    <div class="adress">${localStorage.Address}</div>
    <div class="phone">${localStorage.Phone}</div>
     `;
}