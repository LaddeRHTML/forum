$(document).ready(function() {
  $('.conference__item').slick({
      arrows: true,
      prevArrow: '<button type="button" class="slick-prev"><img src="icons/left.svg"></button>',
      nextArrow: '<button type="button" class="slick-next"><img src="icons/right.svg"></button>',
      dots: false,
      autoplay: false,
      speed: 700,
      slidesToShow: 1,
      responsive: [
          {
            breakpoint: 768,
            settings: {
              arrows: false,
              slidesToShow: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              /* autoplay: true, */
              arrows: false,
              slidesToShow: 1
          }
      }
  ]
  });
  $('.review__content').slick({
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_2.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right_2.svg"></button>',
    dots: false,
    autoplay: false,
    speed: 700,
    slidesToShow: 2,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            autoplay: true,
            arrows: false,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            autoplay: true,
            arrows: false,
            slidesToShow: 1
        }
    }
  ]
  });
  $('.clients__slider').slick({
    arrows: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="icons/left_2.svg"></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="icons/right_2.svg"></button>',
    dots: false,
    autoplay: true,
    speed: 700,
    slidesToShow: 6,
    infinite: true,
    responsive: [
        {
          breakpoint: 1200,
          settings: {
            autoplay: true,
            arrows: false,
            slidesToShow: 4
          }
        },
        {
          breakpoint: 480,
          settings: {
            autoplay: true,
            arrows: false,
            slidesToShow: 1
        }
    }
  ]
  });
  $(window).scroll(function() {
    if ($(this).scrollTop() > 600) {
      $('.pageup').fadeIn();
    } else {
      $('.pageup').fadeOut();
    }
  });
  $("a[href^='#']").click(function(){
    var _href = $(this).attr("href");
    $("html, body").animate({scrollTop: $(_href).offset().top+"px"});
    return false;
  });

  let more = document.getElementById('starter'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.modal__close');
        more.addEventListener('click', function(e) {
            e.preventDefault();
            overlay.style.display = "block";
            document.body.style.overflow = 'hidden';
  });
        close.addEventListener('click', function() {
            overlay.style.display = "none";
            document.body.style.overflow = 'auto';
  });  
  const menu = document.querySelector('.navbar_list'),
  menuItem = document.querySelectorAll('.navbar_list-item'),
  hamburger = document.querySelector('.hamburger');

  hamburger.addEventListener('click', () => {
      hamburger.classList.toggle('hamburger_active');
      menu.classList.toggle('navbar_list_active');
  });

  menuItem.forEach(item => {
      item.addEventListener('click', () => {
          hamburger.classList.toggle('hamburger_active');
          menu.classList.toggle('navbar_list_active');
      });
  });
}); 