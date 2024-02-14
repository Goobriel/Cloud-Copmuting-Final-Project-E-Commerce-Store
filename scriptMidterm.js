
alert("JESUS LOVES ME!")

let count =0;

document.getElementById('btn-submit').addEventListener('click', function() {

    let name = document.getElementById('Name').value.trim();
    let num = document.getElementById('Number').value.trim();
    let mail = document.getElementById('Email').value.trim();
    let sub = document.getElementById('Subject').value.trim();
    let mes = document.getElementById('Contact-Message').value.trim();

    console.log(name + " _ " + num + " _ " +  mail + " _ " + sub);

    if (name.length === 0 || num.length === 0 || mail.length === 0 || sub.length === 0 || mes.length === 0) {
        alert("Please fill in all fields");
    } else {
        alert("Message Submitted");
    }
});
