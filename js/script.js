let navDisplayIndex = true;
// document.getElementById("nav-icon-id").onclick = function () {
//   displayNav();
// };
const navButton = document.querySelector(".nav-icon");
navButton.addEventListener("click", displayNav);
function displayNav() {
  let displayNav1 = document.getElementById("nav-link-container-id");
  if (navDisplayIndex) {
    displayNav1.classList.remove("display-none");
    navDisplayIndex = false;
  } else {
    displayNav1.classList.add("display-none");
    navDisplayIndex = true;
  }
}
// look over
const elementInView = (el, scrollOffset = 0) => {
  const elementTop = el.getBoundingClientRect().top;
  return elementTop <= (window.innerHeight || document.documentElement.clientHeight) - scrollOffset;
};
