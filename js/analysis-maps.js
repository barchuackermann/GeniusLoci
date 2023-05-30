const setImg = () => {
  var map = $(".checked").attr("id");
  $(".pic-layer").attr("src", "./css/analysis-maps/maps/" + map + ".png");
  $(".pic-container").css("background-color", "var(--" + map + ")");
  $(".sidebar").css("background-color", "var(--" + map + ")");
  $(".pic-ref").attr("src", "./css/analysis-maps/refs/" + map + ".png");
  var screenWidth = $(window).width();
  if (screenWidth < 992 && screenWidth > 575) {
    $(".pic-references").css("background-color", "var(--" + map + ")");
  }
};

$(document).ready(function () {
  $(".sidebar").css("background-color", "#e5d5f2");
  $(".pic-container").css("background-color", "#e5d5f2");
  var screenWidth = $(window).width();
  if (screenWidth < 992 && screenWidth > 575) {
    $(".pic-references").css("background-color", "#e5d5f2");
  }
  $(".btn-layer").click(function () {
    var btnLayerId = $(this).attr("id");
    var firstChild = $("." + btnLayerId);
    $(".btn-check").removeClass("checked");
    $(".btn-layer").removeClass("active");
    $(this).addClass("active");
    firstChild.addClass("checked");
    setImg();
  });
  $(".btn-check").click(function () {
    $(".btn-check").removeClass("checked");
    $(this).addClass("checked");
    setImg();
  });
});
