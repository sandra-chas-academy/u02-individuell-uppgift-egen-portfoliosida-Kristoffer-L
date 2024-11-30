let navDisplayBoolean = true;
const navButton = document.querySelector(".nav-icon");
navButton.addEventListener("click", displayNav);
function displayNav() {
  let displayNav1 = document.getElementById("nav-link-container-id");
  if (navDisplayBoolean) {
    displayNav1.classList.remove("display-none");
    navDisplayBoolean = false;
  } else {
    displayNav1.classList.add("display-none");
    navDisplayBoolean = true;
  }
}
