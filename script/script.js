const hamburgerButton = document.querySelector(".hamburger-image");
const navigation = document.querySelector(".navigation");

let activated = false;

hamburgerButton.addEventListener("click", () => {
  // show the slide nav
  if (navigation.classList.contains("active")) {
    const hamburgerButtonImg = document.querySelector(".hamburger-image img");
    const hamburgerWrapper = document.querySelector(".header-wrapper");
    const navigation = document.querySelector(".navigation");
    const menuContent = document.querySelectorAll(".menu-content");
    const menuList = document.querySelectorAll(".menu-list a");
    const menuListWrap = document.querySelectorAll(".menu-list");
    const companyLogo = document.querySelector(".company-logo");
    const contactInfo = document.querySelector(".contact-information");
    const instagramIcon = document.querySelector(".icon-instagram");

    navigation.classList.remove("active");
    hamburgerWrapper.classList.remove("nav-active");
    navigation.classList.remove("nav-active");
    companyLogo.classList.remove("company-logo-active");
    instagramIcon.classList.remove("icon-active");
    contactInfo.remove();
    hamburgerButtonImg.src = "./image/hamburger.png";

    menuContent.forEach((element) => {
      element.classList.remove("nav-active", "menu-active");
    });

    menuList.forEach((element) => {
      element.classList.remove("menu-fontsize-active");
    });

    menuListWrap.forEach((element) => {
      element.classList.remove("menu-active");
    });

    activated = false;
  } else {
    // hide the slide nav
    const hamburgerButtonImg = document.querySelector(".hamburger-image img");
    const hamburgerWrapper = document.querySelector(".header-wrapper");
    const navigation = document.querySelector(".navigation");
    const menuContent = document.querySelectorAll(".menu-content");
    const companyLogo = document.querySelector(".company-logo");
    const menuList = document.querySelectorAll(".menu-list a");
    const menuListWrap = document.querySelectorAll(".menu-list");
    const instagramIcon = document.querySelector(".icon-instagram");

    navigation.classList.add("active");
    hamburgerWrapper.classList.add("nav-active");
    navigation.classList.add("nav-active");
    companyLogo.classList.add("company-logo-active");

    menuContent.forEach((element) => {
      element.classList.add("nav-active", "menu-active");
    });

    menuList.forEach((element) => {
      element.classList.add("menu-fontsize-active");
    });

    menuListWrap.forEach((element) => {
      element.classList.add("menu-active");
    });

    instagramIcon.classList.add("icon-active");
    hamburgerButtonImg.src = "./image/closemark.png";

    if (!activated) {
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

    activated = true;
  }
});
