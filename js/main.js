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

//video

const player = document.querySelector("#play-video");
const videoOverlay = document.querySelector("#video-overlay");

player.addEventListener("click", function (e) {
  e.preventDefault();
  videoOverlay.classList.add("open");
  videoOverlay.innerHTML +=
    '<iframe width="120" height="150" src="https://www.youtube.com/embed/vp2yiZnjK0w?si=WBnKMkhnL2vecmk8" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>';
});

videoOverlay.addEventListener("click", function (e) {
  e.preventDefault();
  close_video();
});

document.addEventListener("keyup", function (e) {
  if (e.keyCode === 27) {
    close_video();
  }
});

function close_video() {
  videoOverlay.classList.remove("open");
  videoOverlay.querySelector("iframe").remove();
}

//  slider
