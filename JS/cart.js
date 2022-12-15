const productList = document.querySelector('.product-list')
const cartList = document.querySelector('.cart-list');
const cartTotal = document.getElementById('total');

let cartItemID = 1;



eventListeners();

function eventListeners(){
    window.addEventListener('DOMContentLoaded', () =>{
        loadJSON();
    });
    productList.addEventListener('click', purchaseProduct);
}

function loadJSON(){
    fetch('product.json')
    .then(response => response.json())
    .then(data =>{
        let html = '';
        data.forEach(product =>{
            html += `
                <div class="card">
                    <a href="${product.Single}"><img class="item-img" width="100%" src="${product.Image}" alt="Denim Jeans" style="width:100%"></a>
                    <a href="${product.Single}"><p class="item-name">${product.Product}</p></a>
                    <p class="price">$${product.Price}</p>
                    <button type = "button" class = "add-to-cart-btn">
                        </i>Add To Cart
                        </button>
                </div>
            `;
        });
            productList.innerHTML = html;
    });
}

function purchaseProduct(e){
    if(e.target.classList.contains('add-to-cart-btn')){
        let product = e.target.parentElement;
        getProductInfo(product);
    }
}

function getProductInfo(product){
    let productInfo = {
        id: cartItemID,
        Image: product.querySelector('.item-img').src,
        Product: product.querySelector('.item-name').textContent,
        Price: product.querySelector('.price').textContent
    }
    cartItemID++;
    console.log(productInfo);
    addToCartList(productInfo);
}

function addToCartList(product){
    const cartItem = document.createElement('div');
    cartItem.classList.add('cart-item');
    cartItem.setAttribute('data-id', `${product.id}`);
    cartItem.innerHTML = `
        <td style="display: flex; align-items: center;"><img  width="150px" src="${product.Image}" alt="">${product.Product}</td>
        <td><p><span>$</span><span>${product.Price}</span></p></td>
        <td><input type="number" value="1" min="1"></td>
        <td style="cursor: pointer">Delete</td>
    `;
    cartList.appendChild(cartItem)
}
