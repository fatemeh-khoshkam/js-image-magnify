const mainImage = document.querySelector(".img");
const squareZoom = document.querySelector(".squareZoom");
const showZoomImg = document.querySelector(".showZoomImg");

mainImage.addEventListener("mousemove", (e) => {
  var x = e.offsetX - squareZoom.offsetWidth / 3;
  var y = e.offsetY - squareZoom.offsetHeight / 3;

  squareZoom.style.left = x + "px";
  squareZoom.style.top = y + "px";
  squareZoom.style.opacity = "1";

  showZoomImg.style.backgroundPosition = `${
    (e.offsetX / e.currentTarget.offsetWidth) * 100
  }% ${(e.offsetY / e.currentTarget.offsetHeight) * 100}%`;
  showZoomImg.style.opacity = "1";
});

mainImage.addEventListener("mouseleave", function () {
  squareZoom.style.opacity = "0";
  showZoomImg.style.opacity = "0";
});
