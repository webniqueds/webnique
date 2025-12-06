"user strict";

//>> Javascrip Js <<//
$(document).ready(function () {
  //custom tab
  $(".tablinks .nav-links").each(function () {
    var targetTab = $(this).closest(".singletab");
    targetTab.find(".tablinks .nav-links").each(function () {
      var navBtn = targetTab.find(".tablinks .nav-links");
      navBtn.click(function () {
        navBtn.removeClass("active");
        $(this).addClass("active");
        var indexNum = $(this).closest("li").index();
        var tabcontent = targetTab.find(".tabcontents .tabitem");
        $(tabcontent).removeClass("active");
        $(tabcontent).eq(indexNum).addClass("active");
      });
    });
  });
  //custom tab

  //side contact added
  $(".remove__click").on("click", function (e) {
    $(".subside__barmenu").toggleClass("active");
  });
  //side contact added

  //>> Swiper Slider <<//

  //>>>> Team slide
  var swiper = new Swiper(".teamslide__wrap", {
    spaceBetween: 30,
    direction: "horizontal",
    navigation: {
      nextEl: ".mcustom__next2",
      prevEl: ".mcustom__prev2",
    },
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-paginatio",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      575: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
      1400: {
        slidesPerView: 1,
      },
      1600: {
        slidesPerView: 1,
      },
    },
  });
  //service slide home3

  //>>>> Testimonial slide
  var swiper = new Swiper(".testimonial__slidewrap", {
    spaceBetween: 0,
    speed: 3000,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el: ".swiper-pagination3",
      clickable: true,
    },
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 10,
      },
      575: {
        slidesPerView: 1,
      },
      991: {
        slidesPerView: 1,
      },
      1200: {
        slidesPerView: 1,
      },
      1400: {
        slidesPerView: 1,
      },
      1600: {
        slidesPerView: 1,
      },
    },
  });
  //>>>> sponsor slider
  var swiper = new Swiper(".sponsor__wrap", {
    spaceBetween: 0,
    speed: 3000,
    loop: true,
    autoplay: {
      delay: 2000,
    },
    breakpoints: {
      320: {
        slidesPerView: 2,
        spaceBetween: 10,
      },
      575: {
        slidesPerView: 3,
      },
      991: {
        slidesPerView: 4,
      },
      1200: {
        slidesPerView: 5,
      },
      1400: {
        slidesPerView: 5,
      },
      1600: {
        slidesPerView: 5,
      },
    },
  });

  //>> Swiper Slider <<//

  //>> Nice Select <<//
  $("select").niceSelect();
  //>> Nice Select <<//

  //>> Menu Fixed Components <<//
  var fixed_top = $(".header-section");
  $(window).on("scroll", function () {
    if ($(this).scrollTop() > 20) {
      fixed_top.addClass("menu-fixed animated fadeInDown");
      fixed_top.removeClass("slideInUp");
      $("body").addClass("body-padding");
    } else {
      fixed_top.removeClass("menu-fixed fadeInDown");
      fixed_top.addClass("slideInUp");
      $("body").removeClass("body-padding");
    }
  });
  //>> Menu Fixed Components <<//

  //>> Main Menu <<//
  $(".header-bar").on("click", function (e) {
    $(".main-menu, .header-bar").toggleClass("active");
  });
  $(".main-menu li a").on("click", function (e) {
    var element = $(this).parent("li");
    if (element.hasClass("open")) {
      element.removeClass("open");
      element.find("li").removeClass("open");
      element.find("ul").slideUp(600);
    } else {
      element.siblings("li").removeClass("open");
      element.siblings("li").find("li").removeClass("open");
      element.addClass("open");
      element.find("ul").slideDown(600);
      element.siblings("li").find("ul").slideUp(600);
      element.siblings("li").find("ul").slideUp(600);
    }
  });
  $(".scrollToTop").on("click", function () {
    $("html, body").animate(
      {
        scrollTop: 0,
      },
      700
    );
    return false;
  });
  //>> Main Menu <<//

  //>> Magnific Popup <<//
  $(".video-btn").magnificPopup({
    type: "iframe",
    callbacks: {},
  });
  $(".imgc").magnificPopup({
    type: "image",
    gallery: {
      enabled: true,
    },
  });
  //>> Magnific Popup <<//

  //>> Odometer Counter <<//
  $(".odometer-item").each(function () {
    $(this).isInViewport(function (status) {
      if (status === "entered") {
        for (
          var i = 0;
          i < document.querySelectorAll(".odometer").length;
          i++
        ) {
          var el = document.querySelectorAll(".odometer")[i];
          el.innerHTML = el.getAttribute("data-odometer-final");
        }
      }
    });
  });
  //>> Odometer Counter <<//

  //>> Wow Animation <<//
  new WOW().init();
  //>> Wow Animation <<//

  //>> Aos Animation <<//
  AOS.init();
  //>> Aos Animation <<//

  //>> Scroll To Top <<//
  var progressPath = document.querySelector(".progress-wrap path");
  var pathLength = progressPath.getTotalLength();
  progressPath.style.transition = progressPath.style.WebkitTransition = "none";
  progressPath.style.strokeDasharray = pathLength + " " + pathLength;
  progressPath.style.strokeDashoffset = pathLength;
  progressPath.getBoundingClientRect();
  progressPath.style.transition = progressPath.style.WebkitTransition =
    "stroke-dashoffset 10ms linear";
  var updateProgress = function () {
    var scroll = $(window).scrollTop();
    var height = $(document).height() - $(window).height();
    var progress = pathLength - (scroll * pathLength) / height;
    progressPath.style.strokeDashoffset = progress;
  };
  updateProgress();
  $(window).scroll(updateProgress);
  var offset = 50;
  var duration = 1000;
  jQuery(window).on("scroll", function () {
    if (jQuery(this).scrollTop() > offset) {
      jQuery(".progress-wrap").addClass("active-progress");
    } else {
      jQuery(".progress-wrap").removeClass("active-progress");
    }
  });
  jQuery(".progress-wrap").on("click", function (event) {
    event.preventDefault();
    jQuery("html, body").animate({ scrollTop: 0 }, duration);
    return false;
  });

  //>> Scroll To Top <<//

  //>> Preloader <<//
  setTimeout(function () {
    $(".preloader__matias").fadeToggle();
  }, 1500);
  //>> Preloader <<//
});
//>> Javascrip Js <<//

//>> Search Popup <<//
$(function () {
  $('a[href="#search"]').on("click", function (event) {
    event.preventDefault();
    $("#search").addClass("open");
    $('#search > form > input[type="search"]').focus();
  });

  $("#search, #search button.close").on("click keyup", function (event) {
    if (
      event.target == this ||
      event.target.className == "close" ||
      event.keyCode == 27
    ) {
      $(this).removeClass("open");
    }
  });

  $("form").submit(function (event) {
    event.preventDefault();
    return false;
  });
});
//>> Search Popup <<//
/*------------------------------------- */
const loadmore_btn=document.getElementById("load-more-text-input")
const loadmore_btn_text=document.getElementById("loadmore-btn-text")
// const loadmore_btn_icon=document.getElementById('load-more-btn-icon')

loadmore_btn.addEventListener('change',()=>{
  if(loadmore_btn.checked){
    // loadmore_btn_icon.classList.remove("bi-arrow-down") 
    // loadmore_btn_icon.classList.add("bi-arrow-up")
    loadmore_btn_text.innerHTML='Show Less'  
  }
  else{
    // loadmore_btn_icon.classList.remove("bi-arrow-up") 
    // loadmore_btn_icon.classList.add("bi-arrow-down")
    loadmore_btn_text.innerHTML='Read More'  
  }
})


/*---------------------------------------- */

        document.addEventListener('DOMContentLoaded', function() {
            const slider = document.getElementById('testimonialSlider');
            const items = document.querySelectorAll('.testimonial-item');
            const indicators = document.querySelectorAll('.indicator');
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            
            let currentIndex = 0;
            let interval;
            const totalItems = items.length;
            
            function updateSlider() {
                slider.style.transform = `translateX(-${currentIndex * 100}%)`;
                
                indicators.forEach((indicator, index) => {
                    indicator.classList.toggle('active', index === currentIndex);
                });
            }
            
            function nextSlide() {
                currentIndex = (currentIndex + 1) % totalItems;
                updateSlider();
            }
            
            function prevSlide() {
                currentIndex = (currentIndex - 1 + totalItems) % totalItems;
                updateSlider();
            }
            
            function goToSlide(index) {
                currentIndex = index;
                updateSlider();
            }
            
            function startAutoSlide() {
                interval = setInterval(nextSlide, 3000);
            }
            
            function stopAutoSlide() {
                clearInterval(interval);
            }
            
            // Event listeners
            nextBtn.addEventListener('click', () => {
                stopAutoSlide();
                nextSlide();
                startAutoSlide();
            });
            
            prevBtn.addEventListener('click', () => {
                stopAutoSlide();
                prevSlide();
                startAutoSlide();
            });
            
            indicators.forEach(indicator => {
                indicator.addEventListener('click', () => {
                    stopAutoSlide();
                    const slideIndex = parseInt(indicator.getAttribute('data-slide'));
                    goToSlide(slideIndex);
                    startAutoSlide();
                });
            });
            
            // Pause on hover
            const testimonialContainer = document.querySelector('.testimonial-container');
            testimonialContainer.addEventListener('mouseenter', stopAutoSlide);
            testimonialContainer.addEventListener('mouseleave', startAutoSlide);
            
            // Touch events for mobile swipe
            let touchStartX = 0;
            let touchEndX = 0;
            
            testimonialContainer.addEventListener('touchstart', (e) => {
                touchStartX = e.changedTouches[0].screenX;
                stopAutoSlide();
            });
            
            testimonialContainer.addEventListener('touchend', (e) => {
                touchEndX = e.changedTouches[0].screenX;
                handleSwipe();
                startAutoSlide();
            });
            
            function handleSwipe() {
                if (touchEndX < touchStartX - 50) {
                    // Swipe left
                    nextSlide();
                }
                if (touchEndX > touchStartX + 50) {
                    // Swipe right
                    prevSlide();
                }
            }
            
            // Start auto-slide
            startAutoSlide();
        });
   
