// adding footer
$(() => $("#footer").load("../components/footer.html"));

//adding navbar
$(() => $("#navbar").load("../components/navbar.html"));

//submitting contact form
$('#contact-form').submit(function (e) {
    e.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;
    
    emailjs.sendForm('service_tgchhup', 'template_k4mnxk4', this)
        .then(function () {
            console.log('SUCCESS!');
        }, function (error) {
            console.log('FAILED...', error);
        });
    this.reset();
    var success = $('<p></p>').text('Thank you for getting in touch!');
    $(this).append(success);
})

//image modals - open and close
let magnifyingClick = document.querySelectorAll('.magnifying');

magnifyingClick.forEach(magnifier => {
    magnifier.onclick = () => {
        const img = magnifier.previousElementSibling;
        const modal = document.getElementById(img.getAttribute("data-modal"));
        modal.style.display = "block";
        modal.classList.add("zoom");
        img.classList.remove("zoom-out");
        const modalImg = modal.querySelector(".modal-content");
        modalImg.src = img.src || modalImg.src;
        modal.addEventListener('click', closeModal);
        modalImg.addEventListener('click', e => e.stopPropagation() )
    }
});

function closeModal() {
    const modal = $('.modal.zoom');
    modal.css("display", "none").removeClass("zoom");
    $(`[data-modal="${modal.attr('id')}"]`).addClass("zoom-out");
};


