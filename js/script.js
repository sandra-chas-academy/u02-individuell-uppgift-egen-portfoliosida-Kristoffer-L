let navDisplayIndex = 0;
// document.getElementById("nav-icon-id").onclick = function () {
//   displayNav();
// };
const navBtn = document.querySelector(".nav-icon");
navBtn.addEventListener("click", displayNav);
function displayNav() {
  let displayNav1 = document.getElementById("nav-link-container-id");
  if (navDisplayIndex === 0) {
    displayNav1.classList.remove("display-none");
    navDisplayIndex++;
  } else {
    displayNav1.classList.add("display-none");
    navDisplayIndex = 0;
  }
}
