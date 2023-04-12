const setImg = () => {
  var map = $(".checked").attr("id");
  $(".pic-layer").attr("src", "./css/analysis-maps/maps/" + map + ".png");
  $(".pic-container").css("background-color", "var(--" + map + ")");
  $(".sidebar").css("background-color", "var(--" + map + ")");
  $(".pic-ref").attr("src", "./css/analysis-maps/refs/" + map + ".png");
  if (screen.width < 982 && screen.width > 576) {
    $(".pic-references").css("background-color", "var(--" + map + ")");
  }
};

$(document).ready(function () {
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
