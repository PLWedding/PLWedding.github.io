//Navigation
function toggleMenu() {
    const toggleMenu = document.querySelector(".toggleMenu");
    const navigation = document.querySelector(".navigation");
    toggleMenu.classList.toggle("active");
    navigation.classList.toggle("active");
}

//End Navigation

//Swiper Slider
var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    grabCursor: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});

// End Swiper Slider

//filter
function filterPage(mainClass) {
    const allTab = document.querySelectorAll(`${mainClass} .filter-btn`);
    allTab.forEach((tab) => {
        tab.addEventListener("click", function() {
            allTab.forEach((tab) => {
                tab.classList.remove("active");
            });
            this.classList.add("active");
            const tabContent = document.querySelectorAll(`${mainClass} .filter-cards`);
            tabContent.forEach((content) => {
                content.classList.remove("t-active");
            });
            const tabActive = document.querySelector(
                `${mainClass} .tab` + this.dataset.tab
            );
            tabActive.classList.add("t-active");
        });
    });
}

filterPage(".details");
//end filter

//hide/unhide event buttons
const checkboxOption = document.getElementById('checkbox-option');
const numGuestInput = document.getElementById('numGuestInput');
const radioButtons = document.querySelectorAll('input[name="invite"]');
radioButtons.forEach(radio => {
    radio.addEventListener('click', handleRadioClick);
});

function handleRadioClick() {
    if (document.getElementById('accept').checked) {
        checkboxOption.style.visibility = "visible";
        numGuestInput.style.visibility = "visible";
    } else {
        checkboxOption.style.visibility = "hidden";
        numGuestInput.style.visibility = "hidden";
    }
}

//end hide/unhide

//submit form

const rsvpForm = document.getElementById('rsvpForm');
rsvpForm.addEventListener("submit", (e) => {
    e.preventDefault();

    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let email = document.getElementById("eAdd").value;
    let number = document.getElementById("mobNum").value;
    let numOfGuests = document.getElementById("numGuest").value;
    let rsvpAccept = document.getElementById('accept');
    let rsvpDecline = document.getElementById('decline');
    let optCeremony = document.getElementById('optCeremony');
    let optReception = document.getElementById('optReception');

    if (numOfGuests == "") {
        numOfGuests = "0";
    }
    console.log('Title: PLWedding RSVP | ' + firstName + ' ' + lastName + ' ' + numOfGuests)
    if (rsvpAccept.checked) {
        if (optCeremony.checked && !optReception.checked) {
            console.log(rsvpAccept.value + ' ' + optCeremony.value)
        } else if (!optCeremony.checked && optReception.checked) {
            console.log(rsvpAccept.value + ' ' + optReception.value)
        } else if (optCeremony.checked && optReception.checked) {
            console.log(rsvpAccept.value + ' ' + optCeremony.value + ' ' + optReception.value)
        } else {
            alert('Please select which part of the program you\'ll be attending.')
            return false;
        }
    } else {
        console.log(rsvpDecline.value)
    }

});
//end submit form