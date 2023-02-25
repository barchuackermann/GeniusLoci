$(document).ready(function () {
    GLightbox({
        touchNavigation: true,
        loop: true,
        autoplayVideos: true
    });
    $("#burger").on("click", function(){
        $("body").toggleClass("overflow-hidden");
    });
});