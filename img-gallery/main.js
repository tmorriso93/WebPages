var fullImgBox = document.getElementById("fullImgBox");
var fullImg = document.getElementById("fullImg");

//when you click on small img it'll display FullImgBox
function openFullImg(pic) {
  fullImgBox.style.display = "flex";
  fullImg.src = pic;
}

//when clicked it will exit the full img
function closeFullImg() {
  fullImgBox.style.display = "none";
}
