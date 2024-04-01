

$(function(){

/////////// Account SIGNUP form (Stored in Database) /////////////////////////////////

    $("form").submit(function(){
        const data = {
            username: $("#username").val(),
            password: $("#password").val(),
            email: $("#email").val()
        }
    
        $.post( "/api/users/create", data, function( data ) {
            console.log("Succsseful sign-up!");
        });
        return false;
    });

/////////////////// SIGN UP FORM RETRIEVAL ENDS /////////////////////////////////////
})

