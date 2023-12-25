/* Correct a bug
You are working on an e-commerce website where customers can add items to their cart. The cart stores the
quantity of each item that the customer wants to purchase in an array of numbers. However, the website is
currently experiencing a bug where the quantity of each item is being recorded incorrectly by reducing it to
half. As a result, you need to write a JavaScript function that can double the quantity of each item in the cart
array to correct the bug. */

let cart = ["refined oil","atta","sugar","dal"];
function doubledArr(cart){
    let doubledCart = [];
    for (let i = 0; i < cart.length; i++){
        doubledCart.push(cart[i] + " "+ cart[i]);
    }
    return doubledCart;
}

console.log(doubledArr(cart));
