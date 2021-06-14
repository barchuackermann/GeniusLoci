let crossHair = 0;

function checkAccordionSection($el) {
  if ($el.parent().find(":invalid").length) {
    $el.removeClass("border-ok").addClass("border-wrong");
  } else {
    $el.removeClass("border-wrong").addClass("border-ok");
  }
}
/* Cambia cursor sobre mapa */
const cursorCrossHair = () => {
  document.getElementById("mappast").style.cursor = "crossHair";
  crossHair = 1;
};

const load = () => {
  const createMap = document.getElementById("createMap");
  createMap.addEventListener("click", cursorCrossHair);

  /* Validation */
  var forms = document.getElementsByClassName("needs-validation");

  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener(
      "submit",
      function (e) {
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
        }
        form.classList.add("was-validated");
        if (form.getAttribute("id") === "formTocomplete") {
          checkAccordionSection($("#headingOne"));
          checkAccordionSection($("#headingThree"));
        }
      },
      false
    );
  });

  var entireForm = document.getElementById("form");
  var formTocomplete = document.getElementById("formTocomplete");
  var thanks = document.getElementById("thanks");
  var smallerThanks = document.getElementById("smallerThanks");
  var spin = document.getElementById("spin");

  entireForm.addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();
    spin.className = "spinner-border spinner-border-sm";
    formTocomplete.classList.add("d-none");
    smallerThanks.className = "modal-dialog modal-dialog-centered";
    thanks.className = "text-center";
  });

  $("#keywords").select2({
    maximumSelectionLength: 3,
    multiple: true,
    tags: true,
    width: "100%",
    selectOnClose: true,
    tokenSeparators: [","],
  });
};

window.onload = load;
