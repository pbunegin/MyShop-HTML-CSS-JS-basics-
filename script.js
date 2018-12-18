data.forEach(category => {
    let categoryDiv = '<div class="category"><div>' + category.categoryName + '</div></div>';
    let productsDiv = document.createElement('div');
    productsDiv.className = "products";
    
    for (let i = 0; i < category.products.length; i++) {
        let productDiv = createProduct(category.products[i]);
        productsDiv.appendChild(productDiv);
    }

    $('#content').append(categoryDiv);
    $('#content').append(productsDiv);
});

function createProduct(product){
        let productDiv = document.createElement('div');
        productDiv.className = "product";
        
        productDiv.innerHTML = '<div class="logo"><img src="' + 
        'prodImg/' + product.id + '.jpg" value="logoButton" width="150px">'+
        '<div class="productName">' + product.productName + '</div>' +
        '</div><div class="infoProduct"><div class="characteristics">' +
        '<ul><li>' + product.memory + '</li><li>'+product.frequency+
        '</li><li>'+product.price+'</li><li>' + product.id + '</li></ul>'+
        '</div><div class="buttonAddToBasket"><form><input type="button" value="В корзину"'+
        ' name="addToBasket"></form></div></div>';

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
    let addToBasketElement = this.parentElement.cloneNode(true);
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

