let crossHair = 0;
let material = 0;
let intangible = 0;

function checkAccordionSection($el) {
  if ($el.parent().find(":invalid").length) {
    $el.removeClass("border-ok").addClass("border-wrong");
  } else {
    $el.removeClass("border-wrong").addClass("border-ok");
  }
}

/* Deshabilita opciones en Heritage */
const setOption = (id) => {
  if (id == "phisical") {
    material = 1;
    intangible = 0;
    setDisable(material, intangible);
  } else {
    intangible = 1;
    material = 0;
    setDisable(material, intangible);
  }
};

const setDisable = () => {
  if (material == 0 && intangible == 1) {
    document.getElementById("phisicalInput").setAttribute("disabled", "");
    document.getElementById("abstractInput").removeAttribute("disabled", "");
    material = 1;
    intangible = 0;
  } else {
    document.getElementById("abstractInput").setAttribute("disabled", "");
    document.getElementById("phisicalInput").removeAttribute("disabled", "");
    material = 0;
    intangible = 1;
  }
};
/* Cambia cursor sobre mapa */
const cursorCrossHair = () => {
  document.getElementById("mappast").style.cursor = "crossHair";
  crossHair = 1;
};

const load = () => {
  const createMap = document.getElementById("createMap");
  createMap.addEventListener("click", cursorCrossHair);

  const phisical = document.getElementById("phisical");
  phisical.addEventListener("click", () => setOption(phisical.id));
  const abstract = document.getElementById("abstract");
  abstract.addEventListener("click", () => setOption(abstract.id));

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
