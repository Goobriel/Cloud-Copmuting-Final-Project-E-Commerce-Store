/*konami code*/
alert("JESUS LOVES ME!")
let code;
function konami(){
    document.getElementById('Up').addEventListener('click', function() {
        alert("Pressed")
    });
    if (code = "up" + "up" + "down" + "down" + "left" + "right" + "left" + "right"){
        alert("Ester Egg found! Enter Code: 'Konami' at check out for %50 off!")
    };
    document.getElementById('story').textContent = story;
};