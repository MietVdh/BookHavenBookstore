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
            products.push([product, price]);
        }
        const total = products.reduce((a, p) => a + parseFloat(p[1]), 0);
        let cartTable = "";
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
        addProduct(product);
        alert("Item added to the cart");
    })
}

clearCartBtn.addEventListener("click", () => {
    if (sessionStorage.length > 0) {
        clearCart();
        alert("Cart cleared");
    } else {
        alert("No items to clear");
    }
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
    sessionStorage.setItem(product.name, product.price);
}

const removeProduct = product => {
    sessionStorage.removeItem(product.name);
}

const clearCart = () => {
    shoppingCartContents.innerHTML = "<p>Cart is empty.</p>";
    sessionStorage.clear();
}
