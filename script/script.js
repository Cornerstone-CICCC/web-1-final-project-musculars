//componentization of the header and footer
fetch("../header.html")
  .then((response) => response.text())
  .then((data) => {
    document.querySelector("#header").innerHTML = data
    const hamburgerButton = document.querySelector(".hamburger-image");
    const navigation = document.querySelector(".navigation");

    // header section
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
  
});

fetch("footer.html")
  .then((response) => response.text())
  .then((data) => (document.querySelector("#footer").innerHTML = data));

//const variables for event type
const eventwedding = "eventwedding";
const eventparty = "eventparty";
const eventphotoshoot = "eventphotoshoot";


const thumbnails = document.querySelectorAll(".thumbnail");
const modal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const closeBtn = document.querySelector(".close");
const openChat = document.getElementById("chat-open");

let clientname = "";
let selectedtype = ""

const eventtype = document.getElementsByName("eventtype"); // radio buttons for event type
const calltimearea = document.querySelector(".calltimearea"); // "When do you want us to call?" area
const eventtypepage = document.querySelector(".eventtype"); // first page
const nextbtn = document.querySelector("#next-btn");
const servicedetailspage = document.querySelector(".servicedetails"); // second page
const servicedetailtype = document.getElementsByName("servicedetailtype"); // radio buttons for event type
const submitbtn = document.querySelector("#submit-btn");
const thankyoupage = document.querySelector(".thankyoupage"); // final page



//"Anyone else need service?" areas in second page
const forwedding = document.querySelector(".forwedding");
const forparty = document.querySelector(".forparty");

const firstspace = " - ";

const premiumservisestext = {
    premiumclensing: "Deep skin cleansing",
    premiumsydro: "Hydromassage",
    premiumwaxing: "Waxing",
    premiummassage: "Relaxing massage",
    premiumbleach: "Bleach body hair",
    premiummoisture: "Hair Moisture",
    premiumspa: "Foot and hand SPA",
    premiumgommage: "Gommage(body exfoliation and hydration)"
}

selectedeventtype();
checkedservice();

//checking radio for event type and change showing area.
function selectedeventtype(){
    for(let i = 0; i < eventtype.length; i++){
        if(eventtype[i].checked){
            eventtype[i].classList.toggle("checkedmark");
            selectedtype = eventtype[i].value;
        }else{
            eventtype[i].classList.remove("checkedmark");
        }

        //"When do you want us to call?" area.
        if(eventtype[0].checked){
            calltimearea.classList.add("showing");
        }else{
            calltimearea.classList.remove("showing");
        }
    }
}

//checking checkbox for service type
function checkedservice(){
    for(let i = 0; i < servicedetailtype.length; i++){
        if(servicedetailtype[i].checked){
            servicedetailtype[i].classList.add("checkedmark");
        }else{
            servicedetailtype[i].classList.remove("checkedmark");
        }
    }
}

// Ensure that the elements exist and add event listeners
if (nextbtn) {
    nextbtn.addEventListener("click", (e) => {
        e.preventDefault();
        clientname = document.querySelector("#clientname").value;
        eventtypepage.classList.remove("showing"); // hide first page
        if (selectedtype === eventwedding) {
            servicedetailspage.classList.add("showing"); // show second page
            document.querySelector(".secondpageservice").textContent = "Bridal Service";
            forwedding.classList.add("showing");

        } else if (selectedtype === eventparty) {
            servicedetailspage.classList.add("showing"); // show second page
            forparty.classList.add("showing");

        } else {
            thankyoupage.classList.add("showing"); // show final page   
            document.querySelector("#messageforclient").textContent = `Thank you ${clientname}`;
        }
    });
}

if (submitbtn) {
    submitbtn.addEventListener("click", (e) => {
        e.preventDefault();
        servicedetailspage.classList.remove("showing"); // hide second page
        thankyoupage.classList.add("showing"); // show final page

        document.querySelector("#messageforclient").textContent = `Thank you ${clientname}`;
        const phonenumber = document.querySelector("#callnumber").value;
        if (phonenumber.length > 0) {
            document.querySelector("#callmessage").textContent = `We will call ${phonenumber} to confirm the appointment details with you.`;
        }

        // Clear the previous list items
        document.querySelector(".bookedpremium").innerHTML = "";
        document.querySelector(".bookedadditional").innerHTML = "";

        document.querySelector(".bookedservice").classList.add("showing");

        const premiumservices = document.getElementsByName("serviceoption");
        // Showing selected premium services
        let bookedpremium = [];
        for (let i = 0; i < premiumservices.length; i++) {
            if (premiumservices[i].checked) {
                bookedpremium.push(premiumservices[i].value);
            }
        }

        if (bookedpremium.length > 0) {
            for (let i = 0; i < bookedpremium.length; i++) {
                const listitem = document.createElement("li");
                listitem.innerText = `${firstspace}${premiumservisestext[bookedpremium[i]]}`;
                document.querySelector(".bookedpremium").appendChild(listitem);
            }
        }

        // Showing Additional attendees
        // Groom
        if (document.querySelector("#groomnumber").value > 0) {
            let showingtext = "";
            showingtext = `${firstspace}Groom*${document.querySelector("#groomnumber").value}`;

            if (document.querySelector("#makeupforgroom").checked) {
                showingtext += "(makeup)";
            }
            const listitem = document.createElement("li");
            listitem.innerText = showingtext;
            document.querySelector(".bookedadditional").appendChild(listitem);
        }

        // Bridesmaid
        if (document.querySelector("#bridesmaidnumber").value > 0) {
            let showingtext = "";
            showingtext = `${firstspace}Bridesmaid*${document.querySelector("#bridesmaidnumber").value}`;

            if (document.querySelector("#makeupforbridesmaid").checked && document.querySelector("#hairstyleforbridesmaid").checked) {
                showingtext += "(hairstyle + makeup)";
            } else if (document.querySelector("#makeupforbridesmaid").checked) {
                showingtext += "(makeup)";
            } else if (document.querySelector("#hairstyleforbridesmaid").checked) {
                showingtext += "(hairstyle)";
            }
            const listitem = document.createElement("li");
            listitem.innerText = showingtext;
            document.querySelector(".bookedadditional").appendChild(listitem);
        }

        // Flower girl
        if (document.querySelector("#flovergirlnumber").value > 0) {
            let showingtext = "";
            showingtext = `${firstspace}Flower girl*${document.querySelector("#flovergirlnumber").value}`;

            if (document.querySelector("#makeupforflowergirl").checked && document.querySelector("#hairstyleforflowergirl").checked) {
                showingtext += "(hairstyle + makeup)";
            } else if (document.querySelector("#makeupforflowergirl").checked) {
                showingtext += "(makeup)";
            } else if (document.querySelector("#hairstyleforflowergirl").checked) {
                showingtext += "(hairstyle)";
            }
            const listitem = document.createElement("li");
            listitem.innerText = showingtext;
            document.querySelector(".bookedadditional").appendChild(listitem);
        }

        // Woman
        if (document.querySelector("#womennumber").value > 0) {
            let showingtext = "";
            showingtext = `${firstspace}Woman*${document.querySelector("#womennumber").value}`;

            if (document.querySelector("#makeupforwoman").checked && document.querySelector("#hairstyleforwoman").checked) {
                showingtext += "(hairstyle + makeup)";
            } else if (document.querySelector("#makeupforwoman").checked) {
                showingtext += "(makeup)";
            } else if (document.querySelector("#hairstyleforwoman").checked) {
                showingtext += "(hairstyle)";
            }
            const listitem = document.createElement("li");
            listitem.innerText = showingtext;
            document.querySelector(".bookedadditional").appendChild(listitem);
        }

        // Man
        if (document.querySelector("#mannumber").value > 0) {
            let showingtext = "";
            showingtext = `${firstspace}Man*${document.querySelector("#mannumber").value}`;

            if (document.querySelector("#makeupforman").checked) {
                showingtext += "(makeup)";
            }
            const listitem = document.createElement("li");
            listitem.innerText = showingtext;
            document.querySelector(".bookedadditional").appendChild(listitem);
        }
    });
}

// Attach event listeners to radio buttons for event type
eventtype.forEach((radio) => {
    radio.addEventListener("change", selectedeventtype);
});

// Attach event listeners to checkboxes for service details
servicedetailtype.forEach((checkbox) => {
    checkbox.addEventListener("change", checkedservice);
});

thumbnails.forEach((thumbnail) => {
  thumbnail.addEventListener("click", () => {
    const videoUrl = thumbnail.getAttribute("data-video");
    videoFrame.src = videoUrl;
    modal.style.display = "block";
  });
});

if (closeBtn) {
    closeBtn.addEventListener("click", () => {
        modal.style.display = "none";
        videoFrame.src = "";
    });
}

if (openChat) {
    openChat.addEventListener("click", () => {
        const currentSrc = openChat.src.split('/').pop();

        if (currentSrc !== "onClickChat.svg") {
            openChat.src = "./image/onClickChat.svg";
        } else {
            openChat.src = "./image/chatIcon.png";
        }
    });
}

// My Work ページの切り替え処理
// window.addEventListener('load', () => {
  // checkbox
  const checkbox1 = document.getElementById("makeups");
  const checkbox2 = document.getElementById("hairstyle");

  // label
  const label1 = document.getElementById("makeupLabel");
  const label2 = document.getElementById("hairLabel");
  const underline1 = document.getElementById("underline1");
  const underline2 = document.getElementById("underline2");

  // タブの内容部分
  const hoge1Content = document.getElementById("makeup-container");
  const hoge2Content = document.getElementById("hair-container");

  // Initial state setup
  checkbox1.checked = true;
  checkbox2.checked = false;
  hoge1Content.style.display = "block";
  hoge2Content.style.display = "none";
  label1.style.color = "black";
  label2.style.color = "#888888";
  underline1.style.backgroundColor = "black";
  underline2.style.backgroundColor = "#888888";

  // hoge1タブのクリック時
  label1.addEventListener("click", function () {
    checkbox1.checked = true;
    checkbox2.checked = false;
    hoge1Content.style.display = "block";
    label1.style.color = "black";
    label2.style.color = "#888888";
    hoge2Content.style.display = "none";
    underline1.style.backgroundColor = "black";
    underline2.style.backgroundColor = "#888888";
  });

  // hoge2タブのクリック時
  label2.addEventListener("click", function () {
    checkbox2.checked = true;
    checkbox1.checked = false;
    label1.style.color = "#888888";
    label2.style.color = "black";
    underline1.style.backgroundColor = "#888888";
    underline2.style.backgroundColor = "black";
    hoge2Content.style.display = "block";
    hoge1Content.style.display = "none";
  });
// });

