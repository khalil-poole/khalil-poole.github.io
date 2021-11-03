//template_ev23uji
//service_vikroba
//user_VnzhlwlmrXYTBYsgRkktB

//Email setup

function contact() {
    event.preventDefault() //Stops instant refresh
    const loading = document.querySelector('.modal__overlay--loading');
    const success = document.querySelector('.modal__overlay--success');
    loading.classList += " modal__overlay--visible"; //NEVER forget the space before the class for a classList

    emailjs
        .sendForm(
            'service_vikroba',
            'template_ev23uji',
            event.target,
            'user_VnzhlwlmrXYTBYsgRkktB'
        ).then(() => {
            loading.classList.remove("modal__overlay--visible");
            success.classList += " modal__overlay--visible";
        }).catch(() => {
            loading.classList.remove("modal__overlay--visible");
            alert(
                "The email service is temporarily unavailable. Please contact me directly on khalilpoole1992@gmail.com"
            );
        })



    setTimeout(() => {

        console.log('it worked again')
    }, 500);
}


//Dark Mode

let contrastToggle = false;

function toggleContrast() {
    contrastToggle = !contrastToggle;
    if (contrastToggle) {
        document.body.classList += " dark-theme"
    }
    else {
        document.body.classList.remove("dark-theme")
    }
}

//Toggling the Modal

let isModalOpen = false;
function toggleModal() {
    if (isModalOpen) {
        isModalOpen = false;
        return document.body.classList.remove("modal--open");
    }
    isModalOpen = true;
    document.body.classList += " modal--open";

}

//Moving shapes

const scaleFactor = 1 / 20;

function moveBackground(event) {
    const shapes = document.querySelectorAll(".shape");
    const x = event.clientX * scaleFactor;
    const y = event.clientY * scaleFactor;

    for (let i = 0; i < shapes.length; i++) {
        const isOdd = i % 2 !== 0;
        const boolInt = isOdd ? -1 : 1;
        shapes[i].style.transform = `translate(${x * boolInt}px, ${y * boolInt}px)`;
    }
}