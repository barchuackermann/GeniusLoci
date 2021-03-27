/* const { param } = require("jquery"); */

const arrowAppears = (arrowTop) => {
  arrowTop.className = "d-block d-sm-block d-md-none back-to-top";
};

const load = () => {
  const arrowTop = document.getElementById("arrow-top");
  const cardHeaders = document.getElementsByClassName("card-headers");
  for (i = 0; i < cardHeaders.length; i++) {
    cardHeaders[i].addEventListener("click", () => arrowAppears(arrowTop));
  }
};

window.onload = load;
