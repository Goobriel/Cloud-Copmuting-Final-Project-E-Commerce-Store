
alert("JESUS LOVES ME!")


/***** Contact Form ********/

document.getElementById('btn-submit').addEventListener('click', function() {

    let name = document.getElementById('Name').value.trim();
    let num = document.getElementById('Number').value.trim();
    let mail = document.getElementById('Email').value.trim();
    let sub = document.getElementById('Subject').value.trim();
    let mes = document.getElementById('Contact-Message').value.trim();

    if (name.length === 0 || num.length === 0 || mail.length === 0 || sub.length === 0 || mes.length === 0) {
        alert("Please fill in all fields");
    } else {
        alert("Message Submitted");
    }
});

/***** Login Up ********/



const cardLinks = document.querySelectorAll('.card-link');

// Add event listener to each card link
cardLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        // Prevent default link behavior (e.g., navigating to a new page)
        event.preventDefault();

        // Get the ID of the clicked link
        let clickedId = event.target.id;
        
        // Add the clicked ID to the cartList array
        cartList.push(clickedId);
        
        // Display the updated cartList array
        console.log(cartList);
    })});