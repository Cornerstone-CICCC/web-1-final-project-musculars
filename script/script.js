const hamburgerButton = document.querySelector(".hamburger-image");
const hamburgerWrapper = document.querySelector(".header-wrapper");
const navigation = document.querySelector(".navigation");
const menuContent = document.querySelectorAll(".menu-content");
const test = document.querySelector(".company-logo");
const test2 = document.querySelectorAll(".menu-list a");
const test3 = document.querySelectorAll(".menu-list");
const instagramIcon = document.querySelector(".icon-instagram");

let activated = false;

hamburgerButton.addEventListener("click", () => {
  if (navigation.classList.contains("active")) {
    const hamburgerWrapper = document.querySelector(".header-wrapper");
    const navigation = document.querySelector(".navigation");
    const menuContent = document.querySelectorAll(".menu-content");
    const test = document.querySelector(".company-logo");
    const test2 = document.querySelectorAll(".menu-list a");
    const test3 = document.querySelectorAll(".menu-list");
    const companyLogo = document.querySelector(".company-logo");
    const instagramIcon = document.querySelector(".icon-instagram");

    hamburgerWrapper.classList.remove("nav-active");
    navigation.classList.remove("nav-active");
    companyLogo.classList.remove("company-logo-active");

    menuContent.forEach((element) => {
      console.log(element);
      element.classList.remove("nav-active", "test5");
    });
    console.log(menuContent);

    test2.forEach((element) => {
      element.classList.remove("test4");
    });

    test3.forEach((element) => {
      element.classList.remove("test5");
    });

    instagramIcon.style.display = "block";

    const contactInfo = document.querySelector(".contact-information");
    contactInfo.remove();

    activated = false;
    navigation.classList.remove("active");
  } else {
    const hamburgerWrapper = document.querySelector(".header-wrapper");
    const navigation = document.querySelector(".navigation");
    const menuContent = document.querySelectorAll(".menu-content");
    const companyLogo = document.querySelector(".company-logo");
    const test2 = document.querySelectorAll(".menu-list a");
    const test3 = document.querySelectorAll(".menu-list");
    const instagramIcon = document.querySelector(".icon-instagram");

    navigation.classList.add("active");
    hamburgerWrapper.classList.add("nav-active");
    navigation.classList.add("nav-active");
    companyLogo.classList.add("company-logo-active");

    menuContent.forEach((element) => {
      element.classList.add("nav-active", "test5");
    });

    test2.forEach((element) => {
      element.classList.add("test4");
    });

    test3.forEach((element) => {
      element.classList.add("test5");
    });

    instagramIcon.style.display = "none";

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

      activated = true;
    }
  }
});
