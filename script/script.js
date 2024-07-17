// Modal of beauty tips section
const thumbnails = document.querySelectorAll(".thumbnail");
const modal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const closeBtn = document.querySelector(".close");

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const videoUrl = thumbnail.getAttribute("data-video");
    videoFrame.src = videoUrl;
    modal.style.display = "block";
  });
});

closeBtn.addEventListener("click", () => {
  modal.style.display = "none";
  videoFrame.src = "";
});
