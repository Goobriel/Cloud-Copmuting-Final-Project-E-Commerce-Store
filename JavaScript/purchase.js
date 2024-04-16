// JavaScript to handle fetching data from the server and populating the cart array

// Initialize an empty array to store cart items
let cart = [];

// Function to fetch product data from the server
async function fetchProduct(productId) {
    try {
        const response = await fetch(`/api/product?id=${productId}`);
        if (!response.ok) {
            throw new Error('Failed to fetch product data');
        }
        const productData = await response.json();
        return productData;
    } catch (error) {
        console.error('Error fetching product data:', error);
    }
}

// Function to handle "buy now" button click event
async function handleBuyNow(productId) {
    try {
        // Fetch product data based on the productId
        const productData = await fetchProduct(productId);
        // Add the fetched product data to the cart array
        cart.push(productData);
        // Call the function to update the cart display immediately after adding the product
        updateCartDisplay();
    } catch (error) {
        console.error('Error handling buy now:', error);
    }
}

// Function to update the cart display
function updateCartDisplay() {
    const cartList = document.getElementById('cartList');
    // Clear the existing contents of the cart display
    cartList.innerHTML = '';
    // Loop through the cart array and create list items to display each product
    cart.forEach(product => {
        const listItem = document.createElement('li');
        listItem.textContent = `${product.name} - $${product.price}`;
        cartList.appendChild(listItem);
    });
}

// Event listener for "buy now" buttons
document.addEventListener('DOMContentLoaded', () => {
    const buyNowButtons = document.querySelectorAll('.card-link.btn');
    buyNowButtons.forEach(button => {
        button.addEventListener('click', () => {
            const productId = button.dataset.productId;
            handleBuyNow(productId);
        });
    });
});


// Event listener for "buy now" buttons
document.addEventListener('DOMContentLoaded', () => {
    // Your implementation goes here
});


function loadCart(){

        $("#proverbs16-24").click(function() {
            let productId = $(this).data("product-id");
            $.get("/api/product?id=" + productId, function(response) {
                cart.push(response.price);
            });
        });
    
        $("#hebrews12-1").click(function() {
            let productId = $(this).data("product-id");
            $.get("/api/product?id=" + productId, function(response) {
                cart.push(response.price);
            });
        });
    $("#jeremiah29-13").click(function(){
        let productId = $(this).data("product-id");
        $.get("/api/product?id=" + productId, function(response) {
            cart.push(response.price);
        });
    })
    $("#panda").click(function(){
        let productId = $(this).data("product-id");
        $.get("/api/product?id=" + productId, function(response) {
            cart.push(response.price);
        });
    })
    $("#cat").click(function(){
        let productId = $(this).data("product-id");
        $.get("/api/product?id=" + productId, function(response) {
            cart.push(response.price);
        });
    })
    $("#samurai").click(function(){
        let productId = $(this).data("product-id");
        $.get("/api/product?id=" + productId, function(response) {
            cart.push(response.price);
        });
    })
    $("#smile").click(function(){
        let productId = $(this).data("product-id");
        $.get("/api/product?id=" + productId, function(response) {
            cart.push(response.price);
        });
    })

}





$(document).ready(function () {
    loadCart();

    function displayCart() {
        $("#cartList").empty();
    
        // Add each item from cart array to the list
        cart.forEach(function(item) {
            $("#cartList").append("<li>" + item.productname + " - $" + item.price + "</li>");
        });
    }
});

        // $.post( "/api/purchased/create", data, function( data ) {
        //     console.log("Purchase Succsseful!");
        // });
        // return false;




/*function loadPurchase(){
    $(".list").empty();

    $.get("/api/reviews", function (response) {

        for (const reviews of response) {
            $(".list").append("<li>" + reviews.reviewname + " from " + reviews.locate + " says: " + "<p>" + reviews.response + "</p>" + "</li>")
        }
    });

}*/


/*
    var item1 = $("#proverbs16-24").val();
    var item2 = $("#hebrews12-1").val();
    var item3 = $("#hebrews12-1").val();
    var item4 = $("#jeremiah29-13").val();
    var item5 = $("#panda").val();
    var item6 = $("#cat").val();
    var item7 = $("#samurai").val();
    var item8 = $("#smile").val();
*/