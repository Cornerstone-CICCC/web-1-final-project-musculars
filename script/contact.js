//const variables for event type 
const eventwedding = "eventwedding";
const eventparty = "eventparty";
const eventphotoshoot = "eventphotoshoot";

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
    premiumgommage: "Gommage(body exfoliation and hydrtion)"
}


selectedeventtype();
checkedservice();

//checking radio for event type and change showing erea.
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

//go to second page
nextbtn.addEventListener("click",(e) =>{
    e.preventDefault();
    clientname = document.querySelector("#clientname").value;
    eventtypepage.classList.remove("showing"); // hide first page
    if(selectedtype===eventwedding){
        servicedetailspage.classList.add("showing"); // show second page
        document.querySelector(".secondpageservice").textContent = "Bridal Service";
        forwedding.classList.add("showing");

    }else if(selectedtype===eventparty){
        servicedetailspage.classList.add("showing"); // show second page
        forparty.classList.add("showing");

    }else{
        thankyoupage.classList.add("showing"); // show final page   
        document.querySelector("#messageforclient").textContent = `Thank you ${clientname}`;
    }
})

submitbtn.addEventListener("click",(e) =>{
    e.preventDefault();
    servicedetailspage.classList.remove("showing"); // hide secondpage
    thankyoupage.classList.add("showing"); // show final page

    document.querySelector("#messageforclient").textContent = `Thank you ${clientname}`;
    const phonenumber = document.querySelector("#callnumber").value;
    if(phonenumber.length > 0){
        document.querySelector("#callmessage").textContent = `We will call ${phonenumber} to confirm the appointment details with you.`;
    }

    document.querySelector(".bookedservice").classList.add("showing");

    const premiumservices = document.getElementsByName("serviceoption");
    //Showing selected premium services
    let bookedpremium = [];
    for(let i = 0; i<premiumservices.length; i++){
        if(premiumservices[i].checked){
            bookedpremium.push(premiumservices[i].value);
        }
    }
    
    if (bookedpremium.length > 0){
        for(let i = 0; i<bookedpremium.length; i++){
            const listitem = document.createElement("li");
            listitem.innerText = `${firstspace}${premiumservisestext[bookedpremium[i]]}`
            document.querySelector(".bookedpremium").appendChild(listitem);
        }
    }

    //Showing Additional attendees
    //Groom
    if(document.querySelector("#groomnumber").value > 0){
        let showingtext = "";
        showingtext = `${firstspace}Groom*${document.querySelector("#groomnumber").value}`;

        if(document.querySelector("#makeupforgroom").checked){
            showingtext += "(makeup)"
        }
        const listitem = document.createElement("li");
        listitem.innerText = showingtext;
        document.querySelector(".bookedadditional").appendChild(listitem);
    }

    //Bridesmaid
    if(document.querySelector("#bridesmaidnumber").value > 0){
        let showingtext = "";
        showingtext = `${firstspace}Bridesmaid*${document.querySelector("#bridesmaidnumber").value}`;

        if(document.querySelector("#makeupforbridesmaid").checked && document.querySelector("#hairstyleforbridesmaid").checked){
            showingtext += "(hairstyle + makeup)";
        }else if(document.querySelector("#makeupforbridesmaid").checked){
            showingtext += "(makeup)";
        }else if(document.querySelector("#hairstyleforbridesmaid").checked){
            showingtext += "(hairstyle)";
        }
        const listitem = document.createElement("li");
        listitem.innerText = showingtext;
        document.querySelector(".bookedadditional").appendChild(listitem);
    }

    //Flower girl
    if(document.querySelector("#flovergirlnumber").value > 0){
        let showingtext = "";
        showingtext = `${firstspace}Flower girl*${document.querySelector("#flovergirlnumber").value}`;

        if(document.querySelector("#makeupforflowergirl").checked && document.querySelector("#hairstyleforflowergirl").checked){
            showingtext += "(hairstyle + makeup)";
        }else if(document.querySelector("#makeupforflowergirl").checked){
            showingtext += "(makeup)";
        }else if(document.querySelector("#hairstyleforflowergirl").checked){
            showingtext += "(hairstyle)";
        }
        const listitem = document.createElement("li");
        listitem.innerText = showingtext;
        document.querySelector(".bookedadditional").appendChild(listitem);
    }

    //Woman
    if(document.querySelector("#womennumber").value > 0){
        let showingtext = "";
        showingtext = `${firstspace}Woman*${document.querySelector("#womennumber").value}`;

        if(document.querySelector("#makeupforwoman").checked && document.querySelector("#hairstyleforwoman").checked){
            showingtext += "(hairstyle + makeup)";
        }else if(document.querySelector("#makeupforwoman").checked){
            showingtext += "(makeup)";
        }else if(document.querySelector("#hairstyleforwoman").checked){
            showingtext += "(hairstyle)";
        }
        const listitem = document.createElement("li");
        listitem.innerText = showingtext;
        document.querySelector(".bookedadditional").appendChild(listitem);
    }
    

    //Man
    if(document.querySelector("#mannumber").value > 0){
        let showingtext = "";
        showingtext = `${firstspace}Man*${document.querySelector("#mannumber").value}`;

        if(document.querySelector("#makeupforman").checked){
            showingtext += "(makeup)"
        }
        const listitem = document.createElement("li");
        listitem.innerText = showingtext;
        document.querySelector(".bookedadditional").appendChild(listitem);
    }
})