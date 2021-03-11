let crossHair = 0;
let material = 0;
let intangible = 0;

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

  const firstGroupValidation = (firstGroup) => {
    var confirmation;
    for (i = 0; i < firstGroup.length; i++) {
      var valor = firstGroup[i].value.trim();
      if (valor.length <= 0) {
        confirmation = false;
      } else {
        confirmation = true;
      }
    }
    confirmation == true
      ? (addlocation.className = "btn border-none")
      : (addlocation.className = "btn border-red");
  };

  // Loop over them and prevent submission
  var validation = Array.prototype.filter.call(forms, function (form) {
    form.addEventListener(
      "submit",
      function (e) {
        if (form.checkValidity() === false) {
          e.preventDefault();
          e.stopPropagation();
          firstGroupValidation(firstGroup);
        }
        form.classList.add("was-validated");
      },
      false
    );
  });

  var entireForm = document.getElementById("form");
  var formTocomplete = document.getElementById("formTocomplete");
  var thanks = document.getElementById("thanks");
  var smallerThanks = document.getElementById("smallerThanks");
  var spin = document.getElementById("spin");
  var addlocation = document.getElementById("headingOne");
  var firstGroup = document.getElementsByClassName("firstGroup");

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
