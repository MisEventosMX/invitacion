(function ($) {

  "use strict";

  $(document).ready(function () {

    $("#preloader").fadeOut("slow");

    $('.feat-swiper').hcSticky({
      stickTo: $('.feat-product-grid')
    });

    $(".user-items .search-item").click(function () {
      $(".search-box").toggleClass('active');
      $(".search-box .search-input").focus();
    });
    $(".close-button").click(function () {
      $(".search-box").toggleClass('active');
    });

    var swiper = new Swiper(".main-swiper", {
      speed: 500,
      loop: true,
      pagination: {
        el: "#evento .swiper-pagination",
        clickable: true,
      },
    });

    $('.product-swiper').each(function () {
      var sectionId = $(this).attr('id');
      var swiper = new Swiper("#" + sectionId + " .swiper", {
        slidesPerView: 4,
        spaceBetween: 20,
        pagination: {
          el: "#" + sectionId + " .swiper-pagination",
          clickable: true,
        },
        breakpoints: {
          0: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          999: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          1366: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
        },
      });
    })


    var swiper = new Swiper(".testimonial-swiper", {
      loop: true,
      navigation: {
        nextEl: ".swiper-arrow-next",
        prevEl: ".swiper-arrow-prev",
      },
      pagination: {
        el: "#testimonials .swiper-pagination",
        clickable: true,
      },
    });

    var swiper = new Swiper(".collection-swiper", {
      slidesPerView: 4,
      spaceBetween: 10,
      loop: false,
      pagination: {
        el: "#collections .swiper-pagination",
        clickable: true,
      },
      breakpoints: {
        0: {
          slidesPerView: 1,
          spaceBetween: 20,
        },
        599: {
          slidesPerView: 2,
          spaceBetween: 10,
        },
        980: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
      },
    });


    // product single page
    var thumb_slider = new Swiper(".product-thumbnail-slider", {
      slidesPerView: 3,
      spaceBetween: 20,
      autoplay: true,
      direction: "vertical",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
    });

    var large_slider = new Swiper(".product-large-slider", {
      slidesPerView: 1,
      autoplay: true,
      spaceBetween: 0,
      effect: 'fade',
      thumbs: {
        swiper: thumb_slider,
      },
    });

    var swiper3 = new Swiper(".feat-swiper", {
      grabCursor: true,
      effect: "creative",
      pagination: {
        el: ".swiper-pagination",
        clickable: true,
      },
      creativeEffect: {
        prev: {
          shadow: true,
          translate: ["-20%", 0, -1],
        },
        next: {
          translate: ["100%", 0, 0],
        },
      },
    });

    // input spinner
    var initQuantitySpinner = function () {

      $('.product-qty').each(function () {

        var $el_product = $(this);
        var quantity = 0;

        $el_product.find('.quantity-right-plus').click(function (e) {
          e.preventDefault();
          var quantity = parseInt($el_product.find('#quantity').val());
          $el_product.find('#quantity').val(quantity + 1);
        });

        $el_product.find('.quantity-left-minus').click(function (e) {
          e.preventDefault();
          var quantity = parseInt($el_product.find('#quantity').val());
          if (quantity > 0) {
            $el_product.find('#quantity').val(quantity - 1);
          }
        });

      });

    }


    // init jarallax parallax
    var initJarallax = function () {
      jarallax(document.querySelectorAll(".jarallax"));

      jarallax(document.querySelectorAll(".jarallax-img"), {
        keepImg: true,
      });
    }

    initJarallax();
    initQuantitySpinner();


  }); // End of a document

  //CountDown Timer

  var timer;

    var compareDate = new Date('2024-12-28 16:00');
    compareDate.setDate(compareDate.getDate()); //just for this demo today + 7 days
    timer = setInterval(function() {
    timeBetweenDates(compareDate);
    }, 1000);

    function timeBetweenDates(toDate) {
    var dateEntered = toDate;
    var now = new Date();
    var difference = dateEntered.getTime() - now.getTime();

    if (difference <= 0) {

        // Timer done
        clearInterval(timer);
    
    } else {
        
        var seconds = Math.floor(difference / 1000);
        var minutes = Math.floor(seconds / 60);
        var hours = Math.floor(minutes / 60);
        var days = Math.floor(hours / 24);

        hours %= 24;
        minutes %= 60;
        seconds %= 60;

        $("#days").text(days);
        $("#hours").text(hours);
        $("#minutes").text(minutes);
        $("#seconds").text(seconds);
    }
    }

})(jQuery);