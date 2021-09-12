// adding footer
$(function () {
    $("#footer").load("footer.html");
});

//adding navbar
$(function () {
    $("#navbar").load("navbar.html");
});

//submitting form
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

