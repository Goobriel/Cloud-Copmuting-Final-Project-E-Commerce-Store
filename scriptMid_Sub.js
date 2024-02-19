
/***** Subscribe to Newsletter ********/

document.getElementById('btn-subscribe').addEventListener('click', function() {
    let sub = document.getElementById('subscription').value.trim();
    let check = sub.includes("@");
    if (sub.length === 0 || check != true) {
        alert("Please use a valid email");
    } else {
        alert("Subscribed to InsperShirt NewsLetter!");
    }
});
