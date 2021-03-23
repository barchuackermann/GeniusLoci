const categoryEducation = [
  {
    subcat: "lectures",
    circle: document.getElementById("lecturesCircle"),
  },
  {
    subcat: "seminars",
    circle: document.getElementById("seminarsCircle"),
  },
  {
    subcat: "tours",
    circle: document.getElementById("toursCircle"),
  },
];

const categoryCreativity = [
  {
    subcat: "opera",
    circle: document.getElementById("operaCircle"),
  },
  {
    subcat: "exhibitions",
    circle: document.getElementById("exhibitionsCircle"),
  },
  {
    subcat: "spaces",
    circle: document.getElementById("spacesCircle"),
  },
];

const categoryMapWorkshops = [
  {
    subcat: "cultural",
    circle: document.getElementById("culturalCircle"),
  },
  {
    subcat: "presentMap",
    circle: document.getElementById("presentMapCircle"),
  },
  {
    subcat: "urbanVision",
    circle: document.getElementById("urbanVisionCircle"),
  },
];

const categoryCapacity = [
  {
    subcat: "training",
    circle: document.getElementById("trainingCircle"),
  },
  {
    subcat: "studyVisit",
    circle: document.getElementById("studyVisitCircle"),
  },
];

const changeColor = ({ circle }) => {
  if (circle.className == "subcategory-card") {
    circle.className = "subcategory-card-dark";
  } else {
    circle.className = "subcategory-card";
  }
};

const load = () => {
  document
    .getElementById("lectures")
    .addEventListener("click", () => changeColor(categoryEducation[0]));
  document
    .getElementById("seminars")
    .addEventListener("click", () => changeColor(categoryEducation[1]));
  document
    .getElementById("tours")
    .addEventListener("click", () => changeColor(categoryEducation[2]));
  document
    .getElementById("opera")
    .addEventListener("click", () => changeColor(categoryCreativity[0]));
  document
    .getElementById("exhibitions")
    .addEventListener("click", () => changeColor(categoryCreativity[1]));
  document
    .getElementById("spaces")
    .addEventListener("click", () => changeColor(categoryCreativity[2]));
  document
    .getElementById("cultural")
    .addEventListener("click", () => changeColor(categoryMapWorkshops[0]));
  document
    .getElementById("presentMap")
    .addEventListener("click", () => changeColor(categoryMapWorkshops[1]));
  document
    .getElementById("urbanVision")
    .addEventListener("click", () => changeColor(categoryMapWorkshops[2]));
  document
    .getElementById("training")
    .addEventListener("click", () => changeColor(categoryCapacity[0]));
  document
    .getElementById("studyVisit")
    .addEventListener("click", () => changeColor(categoryCapacity[1]));
};

window.onload = load;
