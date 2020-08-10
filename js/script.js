 // Get the current year for the copyright
$('#year').text(new Date().getFullYear());

 // Light box

 $(document).on('click', '[data-toggle="lightbox"]', function(event) {
    event.preventDefault();
    $(this).ekkoLightbox();
});

//Scrollspy
$('body').scrollspy({target: '#main-nav'});

// Smooth Scrolling
$("#main-nav a").on('click', function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      const hash = this.hash;

      $('html, body').animate({
        scrollTop: $(hash).offset().top
      }, 800, function () {

        window.location.hash = hash;
      });
    }
  });