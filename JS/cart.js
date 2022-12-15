const productList = document.querySelector('.product-list')

eventListeners();

function eventListeners(){
    window.addEventListener('DOMContentLoaded', () =>{
        loadJSON();
    })
}

function loadJSON(){
    fetch('product.json')
    .then(response => response.json())
    .then(data =>{
        let html = '';
        data.forEach(product =>{
            html += `
                <div class="card">
                    <a href="../menProduct/menProduct1.html"><img width="100%" src="${product.Image}" alt="Denim Jeans" style="width:100%"></a>
                    <a href="../menProduct/menProduct1.html"><p class="item-name">${product.Product}</p></a>
                    <p class="price">$${product.Price}</p>
                    <p><button>Add to Cart</button></p>
                </div>
            `;
        });
            productList.innerHTML = html;
    })
}