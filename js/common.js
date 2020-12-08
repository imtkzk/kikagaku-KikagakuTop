/*  swiper
-------------------------------------------------------*/

var swiper1 = new Swiper('#products', {
  loop: false,
  slidesPerView: 3,
  spaceBetween: 30,
  speed: 1500,
  autoplay: {
    delay: 1500,
  },
  navigation: {
    nextEl: '#product-slide-next',
    prevEl: '#product-slide-prev',
  },
  pagination: {
    el: '#product-slide-pagination',
    type: 'bullets',
    clickable: true
  },
  breakpoints: {
    800: {
      slidesPerView: 1,
    }
  },
});

  var swiper2 = new Swiper('#members', {
    loop: false,
    slidesPerView: 3,
    spaceBetween: 30,
    navigation: {
      nextEl: '#member-slide-next',
      prevEl: '#member-slide-prev',
    },
    pagination: {
      el: '#member-slide-pagination',
      type: 'bullets',
      clickable: true
    },
    speed: 1500,
    autoplay: {
      delay: 5000,
    },
    breakpoints: {
      800: {
        slidesPerView: 1,
      }
    }
  });


/*  header
-------------------------------------------------------*/

var header = document.getElementById('header');
var submenu = document.getElementById('navi-submenu-head');
header.onclick = function() {
  this.classList.toggle("is-open");
  document.getElementById("navigation").classList.toggle("is-open");
  document.getElementById("toggle").classList.toggle("is-active");
};


/*  page top
-------------------------------------------------------*/

var px_change = 1;
window.addEventListener('scroll', function(e) {
  var scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if ( scrollTop > px_change ) {
    document.getElementById( "pagetop" ).classList.add( "is-show" );
  } else {
    document.getElementById( "pagetop" ).classList.remove( "is-show" );
  }
});

/*  MoveTo
-------------------------------------------------------*/

document.addEventListener('DOMContentLoaded', function(){
  const moveTo = new MoveTo();
  const triggers = document.getElementsByClassName('pagetop');
  for (var i = 0; i < triggers.length; i++) {
    moveTo.registerTrigger(triggers[i]);
  }
});


/*  scroll animation
-------------------------------------------------------*/

ScrollReveal().reveal('.fade-left', {
  origin: 'left',
  distance: '70px',
  duration: 1000,
  delay: 100,
  reset: false,
  viewFactor: 0,
  mobile:false,
});
ScrollReveal().reveal('.fade-up', {
  origin: 'bottom',
  distance: '70px',
  duration: 1000,
  delay: 100,
  reset: false,
  viewFactor: 0,
  mobile:false,
});


/*  count To
-------------------------------------------------------*/
$(function() {
  $('#count01').on('inview', function(event, isInView) {
    $("#count01").countTo({
      formatter: function (value, options) {
        return value.toFixed(options.decimals).replace(/\B(?=(?:\d{3})+(?!\d))/g, ',');
      }
    });
  });
});

$(function() {
  $('#count02').on('inview', function(event, isInView) {
    $("#count02").countTo({
    });
  });
});
