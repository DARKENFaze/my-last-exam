$("#kurorty.owl-carousel").owlCarousel({
  items: 3,
  loop: true,
  autoplay: true,
  autoplayTimeout: 6000,
  margin: 30,
  navElement: "div",
  dots: false,
  nav: true,
  navText: ["<", ">"],
  responsive: {
    0: {
      items: 1,
      center: true,
    },
    576: {
      items: 2,
      center: true,
    },
    768: {
      items: 2,
    },
    992: {
      items: 3,
    },
    1200: {
      items: 3,
    },
  },
});


// 
