
/***** Contact Form ********/

document.getElementById('btn-submit').addEventListener('click', function() {

    let name = document.getElementById('Name').value.trim();
    let num = document.getElementById('Number').value.trim();
    let mail = document.getElementById('Email').value.trim();
    let subj = document.getElementById('Subject').value.trim();
    let mes = document.getElementById('Contact-Message').value.trim();

    let check = mail.includes("@");

    if (name.length === 0 || num.length === 0 || mail.length === 0 || subj.length === 0 || mes.length === 0) {
        alert("Please fill in all fields.");
    } else if (check != true) {
        alert("Please enter a valid Email.");
    }
    else {
        alert("Message Submitted");
    }
});
