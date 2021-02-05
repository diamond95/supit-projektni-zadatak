$(function () {
    startAnimations();
    initMap();
});



function startAnimations() {
    $("#emptySpace").show();
    $("#fadeAnimation, #imageCampus, #vrijednosti, #cards").hide();
    $("#fadeAnimation").slideDown(1200);
    $("#imageCampus").slideDown(2000);
    $("#about-text").slideDown(2300, function () {
        $("#vrijednosti, #cards").fadeIn(1000);
        $("#emptySpace").hide();
    });
}

let map;

function initMap() {
    try {
        // 45.81516200493088, 15.944953654011027
        const newPosition = { lat: 45.81516200493088, lng: 15.944953654011027 };

        const map = new google.maps.Map(document.getElementById("map"), {
            zoom: 14,
            center: newPosition,
        });

        const marker = new google.maps.Marker({
            position: newPosition,
            map: map,
        });

    } catch (error) {
        console.error(error)
    }

}