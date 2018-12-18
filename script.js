data.forEach(category => {
    let categoryDiv = document.createElement('div');
    categoryDiv.className = "category";
    categoryDiv.innerHTML = "<div>" + category.categoryName + "</div>";
    let productsDiv = document.createElement('div');
    productsDiv.className = "products";
    
    for (let i = 0; i < category.products.length; i++) {
        const product = category.products[i];
        
        let productDiv = document.createElement('div');
        productDiv.className = "product";
        
        let logoDiv = document.createElement('div');
        logoDiv.className = "logo";
        let prodImg;
        if(category.categoryName == "Процессоры"){
            prodImg = "proc.jpg";
        } else if(category.categoryName == "Видеокарты"){
            prodImg = "vcard" + (Math.floor(Math.random() * 2) + 1) + ".jpg";
        }
        logoDiv.innerHTML = '<img src=' + prodImg + ' value="logoButton" width="150px"><div class="productName">' + product.productName + '</div>';
        let infoProductDiv = document.createElement('div');
        infoProductDiv.className = 'infoProduct';
        
        let characteristicsDiv = document.createElement('div');
        characteristicsDiv.className = 'characteristics';
        characteristicsDiv.innerHTML = '<ul><li>'+product.memory+'</li><li>'+product.frequency+'</li><li>'+product.price+'</li></ul>';

        let buttonAddToBasketDiv = document.createElement('div');
        buttonAddToBasketDiv.className = 'buttonAddToBasket';
        buttonAddToBasketDiv.innerHTML = '<form><input type="button" value="В корзину" name="addToBasket"></form>';

        infoProductDiv.appendChild(characteristicsDiv);
        infoProductDiv.appendChild(buttonAddToBasketDiv);

        productDiv.appendChild(logoDiv);
        productDiv.appendChild(infoProductDiv);

        productsDiv.appendChild(productDiv);
    }

    document.getElementById('content').appendChild(categoryDiv);
    document.getElementById('content').appendChild(productsDiv);

    // $('<div>', { class: 'category' }).appendTo('.category');
});

let loginPassword = location.href.split("?")[1];
let username = document.getElementById("username");

if (loginPassword.split("&")[0].split("=")[0] == "login" && loginPassword) {
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
    countProducts.setAttribute("style", "border: 1px solid red; border-radius: 10px;");
}

let sendButton = document.getElementsByName("addToBasket");
sendButton.forEach(element => {
    element.onclick = login_click;
});

function productShow() {
    if (this.hasAttribute("style")) {
        this.removeAttribute("style");
        let infoProduct = this.getElementsByClassName("infoProduct");
        infoProduct[0].setAttribute("style", "display:none;");
        return;
    }

    products.forEach(prod => {
        prod.removeAttribute("style");
        let infoProduct = prod.getElementsByClassName("infoProduct");
        infoProduct[0].setAttribute("style", "display:none;");
    });

    this.setAttribute("style", "width:100%;");
    let infoProduct = this.getElementsByClassName("infoProduct");
    infoProduct[0].setAttribute("style", "display:flex;");
}

let products = document.querySelectorAll(".product");
products.forEach(element => {
    element.addEventListener('click', productShow);
});

// $(document).ready(function(){  
//     PopUpHide();
// });

function basketShow() {
    $("#popup1").show();
}

function basketHide() {
    $("#popup1").hide();
}

function searchShow() {
    $("#popup2").show();
}

function searchHide() {
    $("#popup2").hide();
}

