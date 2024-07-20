// header section
const hamburgerButton = document.querySelector(".hamburger-image");
const navigation = document.querySelector(".navigation");

hamburgerButton.addEventListener("click", () => {
  // show the slide navigation
  if (navigation.classList.contains("active")) {
    const contactInfo = document.querySelector(".contact-information");
    const hamburgerButtonImg = document.querySelector(".hamburger-image img");

    navigation.classList.remove("active");
    contactInfo.remove();
    hamburgerButtonImg.src = "./image/hamburger.png";
  } else {
    // hide the slide navigation
    const hamburgerButtonImg = document.querySelector(".hamburger-image img");
    navigation.classList.add("active");
    hamburgerButtonImg.src = "./image/closemark.png";

    navigation.innerHTML += `
        <div class="contact-information">
            <div class="contact">
                <figure class="icon">
                <img src="./image/phone.png" alt="phone" />
                </figure>
                <figure class="icon">
                <img src="./image/whatsapp.png" alt="whatsApp" />
                </figure>
                <figure class="icon">
                <img src="./image/instagram.png" alt="Instagram" />
                </figure>
            </div>
            <p class="company-catchphrase">Expert makeup and hairstyle studio</p>
        </div>`;
  }
});
