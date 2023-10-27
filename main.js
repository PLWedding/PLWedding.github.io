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
const radioButtons = document.querySelectorAll('input[name="invite"]');
radioButtons.forEach(radio => {
    radio.addEventListener('click', handleRadioClick);
});

function handleRadioClick() {
    if (document.getElementById('accept').checked) {
        checkboxOption.style.visibility = "visible";
    } else {
        checkboxOption.style.visibility = "hidden";
    }
}

//end hide/unhide

//submit form

const rsvpForm = document.getElementById('rsvpForm');
rsvpForm.addEventListener("submit", (e) => {
    e.preventDefault();
    emailjs.init('a60KQhBBVuomxoont');

    let firstName = document.getElementById("fName").value;
    let lastName = document.getElementById("lName").value;
    let email = document.getElementById("eAdd").value;
    let number = document.getElementById("mobNum").value;
    let rsvpAccept = document.getElementById('accept');
    let rsvpDecline = document.getElementById('decline');
    let optCeremony = document.getElementById('optCeremony');
    let optReception = document.getElementById('optReception');
    let rsvp = '';
    if (email == "") {
        email = 'pb.la.wedding.2024@gmail.com';
    }
    if (rsvpAccept.checked) {
        let title = ' See you!';
        let body = 'We can\'t wait to see you at our ';
        let bodyWhen = 'When: January 5, 2024 - 04:30 PM onwards. Gate opens at 04:00PM.\n';
        let bodyWhere = 'Where: 8 Temple Drive, Greenmeadows III, Quezon City, Metro Manila\n';
        let bodyDressCode = 'Dresscode:\n&emsp;Gents - Black suit (white inner) and bowtie or necktie (Bowtie preferred) \n&emsp;Ladies - Black long gown or tea-length dress (Long gown preferred) ';
        let bodyReminder = '\nReminders: \n' + bodyWhen + bodyWhere + bodyDressCode;
        rsvp = rsvpAccept.value;
        if (optCeremony.checked && !optReception.checked) {
            emailjs.send("service_4c6smc5", "template_mqntrrp", {
                    title: title,
                    firstName: firstName,
                    lastName: lastName,
                    body: body + optCeremony.value + '!',
                    bodyReminder: bodyReminder,
                    email: email,
                    number: number,
                })
                .then(function() {
                    console.log('Email Sent!');
                }, function(error) {
                    console.log('Email sending failed', error);
                });
            Swal.fire({
                heightAuto: false,
                title: 'Thank you!',
                text: 'Your form has been sent.',
                imageUrl: './media/splash-banner.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
            document.getElementById('rsvpForm').reset();
        } else if (!optCeremony.checked && optReception.checked) {
            emailjs.send("service_4c6smc5", "template_mqntrrp", {
                    title: title,
                    firstName: firstName,
                    lastName: lastName,
                    body: body + optReception.value + '!',
                    bodyReminder: bodyReminder,
                    email: email,
                    number: number,
                })
                .then(function() {
                    console.log('Email Sent!');
                }, function(error) {
                    console.log('Email sending failed', error);
                });
            Swal.fire({
                heightAuto: false,
                title: 'Thank you!',
                text: 'Your form has been sent.',
                imageUrl: './media/splash-banner.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
            document.getElementById('rsvpForm').reset();
        } else if (optCeremony.checked && optReception.checked) {
            emailjs.send("service_4c6smc5", "template_mqntrrp", {
                    title: title,
                    firstName: firstName,
                    lastName: lastName,
                    body: body + optCeremony.value + ' and ' + optReception.value + '!',
                    bodyReminder: bodyReminder,
                    email: email,
                    number: number,
                })
                .then(function() {
                    console.log('Email Sent!');
                }, function(error) {
                    console.log('Email sending failed', error);
                });
            Swal.fire({
                heightAuto: false,
                title: 'Thank you!',
                text: 'Your form has been sent.',
                imageUrl: './media/splash-banner.jpg',
                imageWidth: 400,
                imageHeight: 200,
                imageAlt: 'Custom image',
            })
            document.getElementById('rsvpForm').reset();
        } else {
            Swal.fire({
                heightAuto: false,
                icon: 'error',
                title: 'Oops...',
                text: 'Please select which part of the program you\'ll be attending.',
            });
            return false;
        }
    } else if (rsvpDecline.checked) {
        rsvp = rsvpDecline.value;
        emailjs.send("service_4c6smc5", "template_mqntrrp", {
                title: '',
                firstName: firstName,
                lastName: lastName,
                body: '',
                email: email,
                number: number,
            })
            .then(function() {
                console.log('Email Sent!');
            }, function(error) {
                console.log('Email sending failed', error);
            });
        Swal.fire({
            heightAuto: false,
            title: 'Thank you!',
            text: 'Your form has been sent.',
            imageUrl: './media/splash-banner.jpg',
            imageWidth: 400,
            imageHeight: 200,
            imageAlt: 'Custom image',
        })
        document.getElementById('rsvpForm').reset();
    } else {
        Swal.fire({
            heightAuto: false,
            icon: 'error',
            title: 'Oops...',
            text: 'Please select whether you\'re attending or not.',
        });
        return false;
    }
});
//end submit form