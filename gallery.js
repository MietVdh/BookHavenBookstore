const cards = document.getElementsByClassName("card-body");
const viewCart = document.getElementById("view-cart");

const shoppingCartModal = document.getElementById("shopping-cart-modal");
const shoppingCartContents = document.getElementById("shopping-cart-contents");
const clearCartBtn = document.getElementById("clear-cart-btn");
const processOrderBtn = document.getElementById("process-order-btn");


viewCart.addEventListener("click", () => {
    console.log(sessionStorage.length);

    if (sessionStorage.length > 0) {
        const products = [];
        for (let i=0; i<sessionStorage.length; i++) {
            const product = sessionStorage.key(i)
            const price = sessionStorage.getItem(product)
            console.log(product, price);
            products.push([product, price]);
        }
        const total = products.reduce((a, p) => a + parseFloat(p[1]), 0);
        cartTable = "";
        products.forEach(p => cartTable += `<tr><td>${p[0]}</td><td>${p[1]}</td></tr>`);
        shoppingCartContents.innerHTML = `
        <table class="table">
            <thead>
                <th>Item</th>
                <th>Price</th>
            </thead>
            ${cartTable}
            <tr>
                <td class="total">Total</td>
                <td class="total">${total}</td>
            </tr>
        </table>
        <
    `
    } else {
        shoppingCartContents.innerHTML = "<p>Cart is empty.</p>";
    }

});

for (const card of cards) {
    const product = {
        "name": card.getElementsByClassName("card-title")[0].innerHTML,
        "btn": card.getElementsByClassName("add-to-cart")[0],
        "price": parseFloat(card.getElementsByClassName("price")[0].innerHTML)
    }
    card.getElementsByClassName("add-to-cart")[0].addEventListener("click", () => {
        // alert(`${product.name} ($${product.price}) has been added to cart`);
        addProduct(product);
        console.log("Add to cart clicked");
        alert("Item added to the cart");
    })
}

clearCartBtn.addEventListener("click", () => {
    clearCart();
})

processOrderBtn.addEventListener("click", () => {
    if (sessionStorage.length > 0) {
        clearCart();
        alert("Thank you for your order");
    } else {
        alert("Cart empty");
    }

})

const addProduct = product => {
    // products.push(product);
    sessionStorage.setItem(product.name, product.price);
}

const removeProduct = product => {
    // products = products.filter(p => p.name !== product.name);
    sessionStorage.removeItem(product.name);
}

const clearCart = () => {
    // products = [];
    if (sessionStorage.length > 0) {
        sessionStorage.clear();
        alert("Cart cleared");
    } else {
        alert("No items to clear");
    }
    shoppingCartContents.innerHTML = "<p>Cart is empty.</p>";

    console.log("Cart emptied");
}
