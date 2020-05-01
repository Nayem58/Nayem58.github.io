$(document).ready(function () {
  $(".div-team-members-carousel").owlCarousel({
    loop: true,
    margin: 10,
    nav: false,
    dots: true,
    center: true,
    autoplay: true,
    autoplayTimeout: 5000,
    smartSpeed: 1000,
    responsive: {
      0: {
        items: 3,
      },
      576: {
        items: 3,
      },
    },
  });
});
