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


// function productClick() {
//     product.setAttribute("style","border: 1px solid red; border-radius: 10px;");
// }

// let product = document.getElementsByName("logo");
// sendButton.forEach(element => {
//     element.onclick = alert("346");
// });
