data.forEach(category => {
    let categoryDiv = '<div class="category"><div>' + category.categoryName + '</div></div>';
    let productsDiv = document.createElement('div');
    productsDiv.className = "products";
    
    for (let i = 0; i < category.products.length; i++) {
        let productDiv = createProduct(category.products[i],category.categoryName);
        productsDiv.appendChild(productDiv);
    }

    document.getElementById('content').appendChild(categoryDiv);
    document.getElementById('content').appendChild(productsDiv);
});

function createProduct(productDiv,categoryName){
        productDiv.className = "product";
        
        let logoDiv = document.createElement('div');
        logoDiv.className = "logo";
        let prodImg;
        if(categoryName == "Процессоры"){
            prodImg = "proc.jpg";
        } else if(categoryName == "Видеокарты"){
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

        return productDiv;
}

let loginPassword = location.href.split("?")[1];
let username = document.getElementById("username");

if (loginPassword.split("&")[0].split("=")[0] == "login" && loginPassword) {
    let login = loginPassword.split("&")[0].split("=")[1];
    username.innerText = login;
}

if (!username.innerText) {
    location.replace("login.html");
}

function addToBasket() {
    let addToBasketElement = this.parentElement;
    addToBasketElement.getElementsByClassName("addToBasket")[0].setAttribute("style", "display:none;");
    // addToBasketElement.getElementsByClassName("removeFromBasket")[0].setAttribute("style", "display:none;");

    $('#basketProducts').append(addToBasketElement);
    // document.getElementsById("basketProducts").appendChild(addToBasketElement);
    let countProducts = document.getElementById("countProducts");
    countProducts.innerText = $("basketProducts").length;

    countProducts.setAttribute("style", "border: 1px solid red; border-radius: 10px;");
}

$('.addToBasket').on('click',addToBasket);

function productShow() {
    if (this.hasAttribute("style")) {
        this.removeAttribute("style");
        this.getElementsByClassName("infoProduct")[0].setAttribute("style", "display:none;");
        this.getElementsByClassName("addToBasket")[0].setAttribute("style", "display:none;");
        return;
    }

    products.forEach(prod => {
        prod.removeAttribute("style");
        let infoProduct = prod.getElementsByClassName("infoProduct");
        infoProduct[0].setAttribute("style", "display:none;");
    });

    this.setAttribute("style", "width:100%;");
    this.getElementsByClassName("infoProduct")[0].setAttribute("style", "display:flex;");
    this.getElementsByClassName("addToBasket")[0].setAttribute("style", "display:initial;");

}

let products = document.querySelectorAll(".product");
products.forEach(element => {
    element.addEventListener('click', productShow);
});

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

