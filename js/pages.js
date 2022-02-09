// adding footer
$(function () {
    $("#footer").load("components/footer.html");
});

//adding navbar
$(function () {
    $("#navbar").load("components/navbar.html");
});

//submitting contact form
$('#contact-form').submit(function (e) {
    e.preventDefault();
    // generate a five digit number for the contact_number variable
    this.contact_number.value = Math.random() * 100000 | 0;
    // service ID and template ID
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
var magnifyingClick = document.querySelectorAll('.magnifying');

magnifyingClick.forEach(function (magnifier) {
    magnifier.onclick = function () {
        var img = magnifier.previousElementSibling;
        var modalId = img.getAttribute("data-modal");
        var modal = document.getElementById(modalId);
        modal.style.display = "block";
        modal.classList.add("zoom");
        img.classList.remove("zoom-out");
        var modalImg = modal.querySelector(".modal-content");
        modalImg.src = img.src || modalImg.src;
        modal.addEventListener('click', closeModal);
        modalImg.addEventListener('click', function (e) { e.stopPropagation() })
    }
});

function closeModal() {
    var modal = document.querySelector('.modal.zoom');
    modal.style.display = "none";
    modal.classList.remove("zoom");
    var img = document.querySelector(`[data-modal="${modal.id}"]`);
    img.classList.add("zoom-out");
};


