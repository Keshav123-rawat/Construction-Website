let allBtns = document.querySelector("#all-btn");
let OngoingBtns = document.querySelector("#ongoing-btn");
let completedBtns = document.querySelector("#completed-btn");

let allprojects = document.querySelector("#all-projects");
let Ongoingprojects = document.querySelector("#ongoing-projects");
let Completedprojects = document.querySelector("#completed-projects");

allBtns.addEventListener("click", () => {
  allprojects.classList.remove("display");
  Ongoingprojects.classList.add("display");
  Completedprojects.classList.add("display");

  allBtns.classList.add("btnColor");
  OngoingBtns.classList.remove("btnColor");
  completedBtns.classList.remove("btnColor");
});

OngoingBtns.addEventListener("click", () => {
  allprojects.classList.add("display");

  OngoingBtns.classList.add("btnColor");
  allBtns.classList.remove("btnColor");
  completedBtns.classList.remove("btnColor");

  Ongoingprojects.classList.remove("display");
  Completedprojects.classList.add("display");
});

completedBtns.addEventListener("click", () => {
  allprojects.classList.add("display");

  OngoingBtns.classList.remove("btnColor");
  allBtns.classList.remove("btnColor");
  completedBtns.classList.add("btnColor");

  Ongoingprojects.classList.add("display");
  Completedprojects.classList.remove("display");
});
