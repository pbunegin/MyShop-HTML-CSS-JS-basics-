let loginPassword = location.href.split("?")[1];
let username = document.getElementById("username");

if (loginPassword.split("&")[0].split("=")[0] == "login" &&  loginPassword) {
    let login = loginPassword.split("&")[0].split("=")[1];
    username.innerText = login;
}

if (!username.innerText) {
    location.replace("login.html");
}

let i = 0;
function login_click() {
    let countProducts = document.getElementById("countProducts");
    countProducts.innerText = ++i;
    countProducts.setAttribute("style","border: 1px solid red; border-radius: 10px;");
}

let sendButton = document.getElementsByName("addToBasket");
sendButton.forEach(element => {
    element.onclick = login_click;
});

function productShow() {
    for(let i = 0; i < products.length; ++i){
        products[i].setAttribute("style","width:auto;");
        let infoProduct = products[i].getElementsByClassName("infoProduct");
        infoProduct[0].setAttribute("style","display:none;");
    }
    this.setAttribute("style","width:100%;");
    let infoProduct = this.getElementsByClassName("infoProduct");
    infoProduct[0].setAttribute("style","display:flex;");
}

let products = document.getElementsByClassName("product");
for(let i = 0; i < products.length; ++i){
    products[i].addEventListener('click',productShow);
}

$(document).ready(function(){  
    PopUpHide();
});

function basketShow(){
    $("#popup1").show();
}

function basketHide(){
    $("#popup1").hide();
}

function searchShow(){
    $("#popup2").show();
}

function searchHide(){
    $("#popup2").hide();
}