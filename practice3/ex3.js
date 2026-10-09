const images = ["img1.png", "img2.png", "img3.png"];
let currentIndex = 0;
const sliderImg = document.getElementById("slider");

setInterval(() => {
    currentIndex = (currentIndex + 1) % images.length;
    sliderImg.src = images[currentIndex];
}, 2000);