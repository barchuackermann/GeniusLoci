$(document).ready(function () {
    const $arrowTop = $("#arrow-top");
    $arrowTop.click(function () {
        $(window).scrollTop($("section").offset().top - $("nav").height());
    });
    $(".card-headers").click(function () {
        $arrowTop.removeClass("d-none").addClass(["d-block", "d-md-none"]);
    });
});
