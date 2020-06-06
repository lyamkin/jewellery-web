 // Get the current year for the copyright
$('#year').text(new Date().getFullYear());

 // Light box

$(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

//Scrollspy
$('body').scrollspy({target: '#main-nav'});