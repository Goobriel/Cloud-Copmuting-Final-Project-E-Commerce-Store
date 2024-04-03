/*$(function() {


    $("form").submit(function(){
        const data = {
            reviewname: $("#reviewname").val(),
            locate: $("#locate").val(),
            response: $("#response").val()
        }
    
        $.post( "/api/reviews/create", data, function( data ) {
            console.log("Succsseful sign-up!");
        });
        return false;
    });

})
*/
function loadReviews() {

    $(".list").empty();

    $.get("/api/reviews", function (response) {

        for (const reviews of response) {
            $(".list").append("<li>" + reviews.reviewname + " from " + reviews.locate + " says " + reviews.response + "</li>")
        }
    });
}


$(document).ready(function () {


    
    // Call this function when the open is opened
    loadReviews();
    $("form").submit(function () {

        const data = {
            reviewname: $("#reviewname").val(),
          locate: $("#locate").val(),
            response: $("#response").val()        }

        $.post("/api/reviews/create", data, function (response) {
            loadReviews();
            console.log("Done");
        });

        return false;
    })

});
