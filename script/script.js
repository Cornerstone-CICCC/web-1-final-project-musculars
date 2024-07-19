const hamburgerButton = document.querySelector(".hamburger-image");
const navigation = document.querySelector(".navigation");

let activated = false;

hamburgerButton.addEventListener("click", () => {
  if (navigation.classList.contains("active")) {
    const hamburgerWrapper = document.querySelector(".header-wrapper");
    const navigation = document.querySelector(".navigation");
    const menuContent = document.querySelectorAll(".menu-content");
    const menuList = document.querySelectorAll(".menu-list a");
    const menuListWrap = document.querySelectorAll(".menu-list");
    const companyLogo = document.querySelector(".company-logo");
    const instagramIcon = document.querySelector(".icon-instagram");
    const contactInfo = document.querySelector(".contact-information");

    navigation.classList.remove("active");
    hamburgerWrapper.classList.remove("nav-active");
    navigation.classList.remove("nav-active");
    companyLogo.classList.remove("company-logo-active");

    menuContent.forEach((element) => {
      console.log(element);
      element.classList.remove("nav-active", "menu-active");
    });

    menuList.forEach((element) => {
      element.classList.remove("menu-fontsize-active");
    });

    menuListWrap.forEach((element) => {
      element.classList.remove("menu-active");
    });

    instagramIcon.style.display = "block";
    contactInfo.remove();
    activated = false;
  } else {
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

      instagramIcon.style.display = "none";

      activated = true;
    }
  }
});
