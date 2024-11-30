let imgIndex = 1;
const leftbtn = document.querySelector(".index-btn-left");
const rightbtn = document.querySelector(".index-btn-right");
const img = document.querySelector(".index-img");

leftbtn.addEventListener("click", clickLeft);
rightbtn.addEventListener("click", clickRight);

function clickLeft() {
  if (imgIndex > 1) {
    imgIndex--;
    img.src = "./Img/Bild-" + imgIndex + ".jpg";
  }
}
function clickRight() {
  if (imgIndex < 3) {
    imgIndex++;
    img.src = "./Img/Bild-" + imgIndex + ".jpg";
  }
}
