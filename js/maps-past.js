let crossHair = 0;
let material = 0;
let intangible = 0;

let input = document.querySelector("#hashtags");
let container = document.querySelector(".tag-container");
let hashtagArray = [];

/* Add ANother Picture */
/* anotherPic = () => {
  let picNode = document.getElementById("picNode");
  let inputFile = document.createElement("input");
  inputFile.classList.add("form-control-file");
  inputFile.setAttribute("type", "file");
  picNode.appendChild(inputFile);
}; */

/* Keywords */
input.addEventListener("keyup", (e) => {
  if (e.which == 188 && input.value.length > 0) {
    var text = document.createTextNode(input.value.replace(/,/g, ""));
    var p = document.createElement("p");
    container.appendChild(p);
    p.appendChild(text);
    p.classList.add("tag");
    input.value = "";

    let deleteTags = document.querySelectorAll(".tag");

    for (let i = 0; i < deleteTags.length; i++) {
      deleteTags[i].addEventListener("click", () => {
        container.removeChild(deleteTags[i]);
      });
    }
  }
});

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

  /* Add Picture */
  /* const addPic = document.getElementById("addPic");
  addpic.addEventListener("click", anotherPic); */

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
      },
      false
    );
  });

  var entireForm = document.getElementById("form");
  var formTocomplete = document.getElementById("formTocomplete");
  var thanks = document.getElementById("thanks");
  var smallerThanks = document.getElementById("smallerThanks");
  entireForm.addEventListener("submit", function (e) {
    e.preventDefault();
    e.stopPropagation();
    formTocomplete.classList.add("d-none");
    smallerThanks.className = "modal-dialog modal-dialog-centered";
    thanks.className = "text-center";
  });
};

window.onload = load;
