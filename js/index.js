// change the statistic
let sectionStatistic = document.querySelector(".statisic-value");
let counters = document.querySelectorAll(".counter");
let hasReachedTarget = false;
////////////////// why the count is not equal data-counter and other screen don't work /////////??????????????????????
window.onscroll = function () {
  const elementTop = sectionStatistic.getBoundingClientRect();
  if (elementTop.top <= window.innerHeight && !hasReachedTarget) {
    hasReachedTarget = true;
    counters.forEach((counter) => {
      counter.innerText = 0;
      let count = 0;
      function update() {
        const target = parseInt(counter.dataset.counter);
        if (count < target) {
          count++;
          counter.innerText = count;
          setTimeout(update, 1);
        } else {
          counter.innerText = target;
        }
      }
      update();
    });
  }
};

$("#testSlider").slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  nextArrow: '<i class="fas fa-angle-right slick-next"></i>',
  prevArrow: '<i class="fas fa-angle-left slick-prev"></i>',
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
window.addEventListener("load", function () {
  var target = document.getElementById("loader");
  var spinner = new Spinner().spin(target);

  setTimeout(function () {
    spinner.stop();
    document.querySelector(".content").style.display = "block";
  }, 2000);
});
setInterval(() => {
  document.querySelector(".loader-cont").style.display = "none";
}, 2000);

$("#about-slider").slick({
  autoplay: true, // Enable autoplay
  autoplaySpeed: 3000, // Autoplay speed in milliseconds (3 seconds)
  arrows: false, // Hide navigation arrows (optional)
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});

window.addEventListener("load", function () {
  var target = document.getElementById("loader");
  var spinner = new Spinner().spin(target);

  setTimeout(function () {
    spinner.stop();
    document.querySelector(".content").style.display = "block";
  }, 2000);
});
setInterval(() => {
  document.querySelector(".loader-cont").style.display = "none";
}, 2000);

$("#feedback-slider").slick({
  autoplay: true, // Enable autoplay
  autoplaySpeed: 2000, // Autoplay speed in milliseconds (3 seconds)
  arrows: false, // Hide navigation arrows (optional)
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$("#news-slider").slick({
  autoplay: true, // Enable autoplay
  autoplaySpeed: 2000, // Autoplay speed in milliseconds (3 seconds)
  arrows: false, // Hide navigation arrows (optional)
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  slidesToScroll: 1,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    // You can unslick at a given breakpoint now by adding:
    // settings: "unslick"
    // instead of a settings object
  ],
});
$("#main-slider").slick({
  asNavFor: "#synced-slider", // Link to synced slider
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  adaptiveHeight: true,
});

// Initialize synced slider
$("#synced-slider").slick({
  asNavFor: "#main-slider", // Link to main slider
  slidesToShow: 4,
  slidesToScroll: 1,
  centerMode: true,
  focusOnSelect: true,
});
