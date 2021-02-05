$(function () {

    $("#kontaktBtn").on('click', function () {

        location.href = "index.html#contact";

    })
    
    if (window.location.hash == "#contact") {
        $('#contact').modal('show');
    }
    $("#removeHash, #removeHashCancelBtn").on('click', function () {
        window.location.hash = "";
    })
});

