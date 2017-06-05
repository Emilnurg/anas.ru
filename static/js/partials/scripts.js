/*jshint esversion: 6*/


/**
 * maskedinput
 */
function maskedInput() {
  $('[name=tel]').inputmask({
    mask: '+7 (999) 999-99-99',
    showMaskOnHover: false,
    showMaskOnFocus: true
  });
}

/**
 * placeholders
 */
function placehodlers() {
	(function() {
		// trim polyfill : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/Trim
		if (!String.prototype.trim) {
			(function() {
				// Make sure we trim BOM and NBSP
				var rtrim = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function() {
					return this.replace(rtrim, '');
				};
			})();
		}

		[].slice.call( document.querySelectorAll( 'input.form__field' ) ).forEach( function( inputEl ) {
			// in case the input is already filled..
			if( inputEl.value.trim() !== '' ) {
				inputEl.parentNode.classList.add('input--filled' );
			}

			// events:
			inputEl.addEventListener( 'focus', onInputFocus );
			inputEl.addEventListener( 'blur', onInputBlur );
		} );

		function onInputFocus( ev ) {
			ev.target.parentNode.classList.add('input--filled' );
		}

		function onInputBlur( ev ) {
			if( ev.target.value.trim() === '' ) {
				ev.target.parentNode.classList.remove('input--filled' );
			}
		}
	})();
}

/**
 * fancybox
 */
function fancybox() {
  $('[data-fancybox]').fancybox({
    focus : false,
    closeClickOutside : true,
    afterLoad: function(){
      placehodlers();
    }
  });

  $('body').on('click', '.fancybox-slide', function(event) {
    if(!$(event.target).closest('.modal').length) {
      $.fancybox.close('all');
    }
  });
}

/**
 * validation
 */
function formValidation() {
  function validate(field, type) {
    var pp = '';

    if (type === 'email') {
      pp = /^([a-zA-Z0-9_.\-])+@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    }

    if (type === 'onlyNumber') {
      pp = /^([0-9()\/+ -]+)$/;
    }

    if (type === 'tel') {
      pp = /^\+?[\d()\-\s]*\d+\s*$/;
    }
    if (type === 'notEmpty') {
      pp = /^[A-Za-zА-Яа-я0-9 _]*[A-Za-zА-Яа-я0-9][A-Za-zА-Яа-я0-9 _#()$@8%№;'":,.+?!#*-/\n]*$/;
    }

    return field.match(pp);
  }

  var required = 0;
  var validated = 0;

  //проверяем валидность когда нажимается конпка
  $('body').on('submit', 'form:not[data-novalidate]', function() {
    var $form = $(this);

    $form.find('.required').each(function() {
      var fieldType = $(this).data('validate');
      if (!validate($(this).val(), fieldType)) {
        $(this).parent().removeClass('has-success').addClass('has-error');
      } else {
        $(this).parent().removeClass('has-error').addClass('has-success');
      }
    });

    required = $form.find('.required').length;
    validated = $form.find('.has-success').length;

    //если нет ошибок
    if (required === validated) {
      var postUrl = $form.attr('action');
      var data = $form.serialize();
      $.ajax({
        type: "POST",
        url: postUrl,
        data: data,
        success: function(){
          $form.trigger('reset');
          $(this).find('.has-success').removeClass('has-success');

          $.fancybox.close('all');

        },
        error: function(){

        }
      });
      return false;
    } else {
      return false;
    }
  });

  //проверяем валидность при изменение текста в инпутах
  $('body').on('input', '.required', function() {
    var fieldType = $(this).data('validate');

    if (!validate($(this).val(), fieldType)) {
      $(this).parent().removeClass('has-success').addClass('has-error');

    } else {
      $(this).parent().removeClass('has-error').addClass('has-success');
    }

    required = $(this).parents('form').find('.required').length;
    validated = $(this).parents('form').find('.has-success').length;
  });
}

/**
 * scroll to anchor
 */
function scrollToHref() {
  $('a.scrollto').unbind().on("click", function () {
    var offset = 0;

    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    if (target.length) {
      $('html,body').animate({
        scrollTop: target.offset().top - offset
      }, 1000);
      return false;
    }
  });
}

/**
 * Breakpoints
 */
function breakpointsHandler() {
  Breakpoints({
    xs: {
      min: 0,
      max: 767
    },
    sm: {
      min: 0,
      max: 991
    },
    md: {
      min: 0,
      max: 1264
    }
  });
  Breakpoints.is('md');
  Breakpoints.get('md').on({
    enter: function () {
      $('.header__nav').prependTo('.header__scroll');
      $('.header__lang').appendTo('.header__mobile > .container');
      $('.header__bottom .header__search-open').insertAfter('.menu-toggle');

      $('.footer__contacts').appendTo('.footer__right');
      $('.footer__menu').prependTo('.footer__middle .container');
    },
    leave: function () {
      $('.header__nav').appendTo('.header__bottom-left');
      $('.header__lang').appendTo('.header__bottom-right');
      $('.header__top .header__search-open').prependTo('.header__bottom-right');

      $('.footer__contacts').appendTo('.footer__middle-right');
      $('.footer__menu').prependTo('.footer__right');
    }
  });

  Breakpoints.is('sm');
  Breakpoints.get('sm').on({
    enter: function () {
      $('.footer__address').insertAfter('.footer__socials');
    },
    leave: function () {
      $('.footer__address').insertBefore('.footer__middle-right');
    }
  });

  Breakpoints.is('xs');
  Breakpoints.get('xs').on({
    enter: function () {
      $('.footer__contacts').prependTo('.footer__middle-right');

      $('.product-tabs__links').slick({
        slidesToShow: 1,
        arrows: false,
        infinite: false,
        swipeToSlide: true,
        variableWidth: true
      });

      $('.catalog-filter__categories').slick({
        slidesToShow: 1,
        arrows: false,
        infinite: false,
        swipeToSlide: true,
        variableWidth: true
      });

      $('.select-brand').slick({
        slidesToShow: 1,
        arrows: false,
        infinite: false,
        swipeToSlide: true,
        variableWidth: true
      });

      $('.course-tabs').slick({
        slidesToShow: 1,
        arrows: false,
        infinite: false,
        swipeToSlide: true,
        variableWidth: true
      });

      $('.articles-categories').slick({
        slidesToShow: 1,
        arrows: false,
        infinite: false,
        swipeToSlide: true,
        variableWidth: true
      });
    },
    leave: function () {
      $('.footer__contacts').appendTo('.footer__right');

      $('.product-tabs__links').slick('unslick');
      $('.catalog-filter__categories').slick('unslick');
      $('.select-brand').slick('unslick');
      $('.course-tabs').slick('unslick');
      $('.articles-categories').slick('unslick');
    }
  });
}

/**
 * parallax
 */
function parallax() {
  if(!isMobile.any()) {
    skrollr.init({
      forceHeight: false
    });

    if ($('#mouse-parallax').length) {
      var scene = document.getElementById('mouse-parallax');
      var parallax = new Parallax(scene, {
        calibrateX: false,
        calibrateY: false,
        invertX: true,
        invertY: true,
        limitX: false,
        limitY: false,
        scalarX: 3,
        scalarY: 3,
        frictionX: 1,
        frictionY: 1,
        originX: 1.0,
        originY: 0
      });
    }
  }
}

/**
 * waves
 */
function waves() {
  Waves.init();
  Waves.attach('.btn', ['waves-float']);
  Waves.attach('.catalog-item');
}

/**
 * masonry
 */
function masonry() {
  $('.catalog__row').masonry({
    itemSelector: '.catalog__col'
  });
}

/**
 * header fixed
 */
function headerfixed() {
  function headerFixedFunc() {
    var scrollTop = $(window).scrollTop();
    var offset = 0;

    if (scrollTop>offset) {
      $('.header').addClass('is-fixed');
    }else {
      $('.header').removeClass('is-fixed');
    }
  }

  $(window).on('load scroll',  function(event) {
    event.preventDefault();
    headerFixedFunc();
  });

  $('.header__scroll').perfectScrollbar();
}

/**
 * dropdown
 */
function headerDropdown() {
  $('.header__nav-item--dropdown').on('click', '.header__nav-link', function(event) {
    event.preventDefault();
    var windowWidth = window.innerWidth;

    $('.header__nav-item').not($(this).parent()).removeClass('is-open');
    if (windowWidth < 1265) {
      $('.header__nav-dropdown').not($(this).siblings('.header__nav-dropdown')).stop().slideUp(300);
    }else {
      $('.header__nav-dropdown').not($(this).siblings('.header__nav-dropdown')).stop().fadeOut(0);
    }

    $(this).parent().toggleClass('is-open');

    if (windowWidth < 1265) {
      $(this).siblings('.header__nav-dropdown').stop().slideToggle(300);
    }else {
      $(this).siblings('.header__nav-dropdown').stop().fadeToggle(0);
    }

  });

  $('.menu-toggle').on('click', function(event) {
    event.preventDefault();

    if ($(this).hasClass('is-active')) {
      $('.header__search-open .search__toggle').removeClass('is-active');
      $('.header__search').stop().slideUp(400);
    }

    $(this).toggleClass('is-active');
    $('.header__mobile').stop().fadeToggle(400);
  });

  $(document).click(function(event) {
    var windowWidth = window.innerWidth;

    if(!$(event.target).closest('.header__nav-item').length) {
      if (windowWidth >= 1265) {
        $('.header__nav-item').removeClass('is-open');
        $('.header__nav-dropdown').stop().fadeOut(0);
      }
    }

    if(!$(event.target).closest('.header').length) {
      if (windowWidth < 1265) {
        $('.header__mobile').stop().fadeOut(300);
        $('.menu-toggle').removeClass('is-active');
      }
    }
  });
}

/**
 * select language
 */
function langDropdown() {
  $('.lang__selected').on('click', function(event) {
    event.preventDefault();
    $(this).parent().toggleClass('is-open');
  });

  $(document).click(function(event) {
    if(!$(event.target).closest('.lang').length) {
      $('.lang').removeClass('is-open');
    }
  });
}

/**
 * hero slider
 */
function heroSlider() {
  $('.main-slider').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    cssEase: 'linear',
    infinite: true,
    speed: 500,
    adaptiveHeight: true
  });
}

/**
 * brands carousel
 */
function brands() {
  $('.brands-carousel').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    infinite: false,
    speed: 500,
    responsive: [
      {
        breakpoint: 1265,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 500,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
}

/**
 * slider
 */
function slider() {
  var slider = $('.slider');
  slider.filter(':not(.slider--thumbnails)').slick({
    fade: true,
    dots: false
  });

  slider.filter('.slider--thumbnails').slick({
    fade: true,
    dots: false,
    asNavFor: '.slider-thumbnails'
  });

  slider
    .on('afterChange', function(slick, currentSlide, nextSlide) {
      $(this).find('.slide__nums span:nth-child(1)').text(nextSlide + 1);
    })
    .each(function() {
      var getSlick = $(this).slick('getSlick');
      var length = getSlick.$slides.length;

      $(this).find('.slide__nums span:nth-child(2)').text(length);
    });

  $('.slider-thumbnails').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.slider.slider--thumbnails',
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1265,
        settings: {
          slidesToShow: 5
        }
      },
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
}

/**
 * videos
 */
function videos() {
  function youtube_parser(url){
    var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#\&\?]*).*/;
    var match = url.match(regExp);
    return (match&&match[7].length===11)? match[7] : false;
  }

  $('.video-preview').each(function() {
    var url = $(this).find('.video-preview__link').attr('href');
    var videoID = youtube_parser(url);

    if (videoID === 'XIMLoLxmTDw') {
      $(this).find('.video-preview__placeholder span').css('background-image', 'url(/static/images/raster/video_placeholder.jpg');
    }else {
      $(this).find('.video-preview__placeholder span').css('background-image', 'url(https://i.ytimg.com/vi/'+videoID+'/sddefault.jpg)');
    }
  });

  $('.video-preview__link').on('click', function(event) {
    event.preventDefault();
    var url = $(this).attr('href');
    var videoID = youtube_parser(url);
    $(this).parents('.video-preview').addClass('is-play');
    $(this).siblings('.video-preview__iframe').find('.embed-responsive').html('<iframe class="embed-responsive-item" src="https://www.youtube.com/embed/'+videoID+'?rel=0&autoplay=1"></iframe>');
  });
}

/**
 * dropzone
 */
function uploadPhoto() {
  function readURL(input) {
    if (input.files && input.files[0]) {
      var reader = new FileReader();

      reader.onload = function(e) {
        $(input).siblings('label').css('background-image','url('+e.target.result+')').addClass('is-active');
      };

      reader.readAsDataURL(input.files[0]);
    }
  }

  $('.commentPhoto').change(function() {
      readURL(this);
  });
}

/**
 * header search
 */
function headerSearch() {
  $('.header__search-open .search__toggle').on('click', function(event) {
    event.preventDefault();
    $(this).toggleClass('is-active');

    $('.header__search').stop().slideToggle(400);
    $('.header__search .search-form__field').focus();
  });

  $('.header__search .search-form__field').on('input', function() {
    if ($(this).val() !== '') {
      $('.header__search .search-form__button').prop('disabled', false);
      $('.header__search .search-form').addClass('is-filled');
    }else {
      $('.header__search .search-form__button').prop('disabled', true);
      $('.header__search .search-form').removeClass('is-filled');
    }
  }).trigger('input');

  $('.header__search .search-form__clear').on('click',  function(event) {
    event.preventDefault();
    $('.header__search .search-form__field').val('');
    $('.header__search .search-form__button').prop('disabled', true);
    $('.header__search .search-form').removeClass('is-filled');
  });
}

/**
 * partners
 */
function partners() {
  $('.partners-filter__types').on('click', '.btn--map', function(event) {
    event.preventDefault();
    $('.partners-filter__types .btn--list').removeClass('is-active');
    $(this).addClass('is-active');

    $('.partners-table-wrap').removeClass('is-active');
    $('.partners-map').addClass('is-active');
  });

  $('.partners-filter__types').on('click', '.btn--list', function(event) {
    event.preventDefault();
    $('.partners-filter__types .btn--map').removeClass('is-active');
    $(this).addClass('is-active');

    $('.partners-map').removeClass('is-active');
    $('.partners-table-wrap').addClass('is-active');

  });
}

/**
 * product slider
 */
function productSlider() {
  $('.product-slider-large').slick({
    fade: true,
    dots: false,
    arrows: false,
    asNavFor: '.product-slider-small'
  });

  $('.product-slider-small').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    asNavFor: '.product-slider-large',
    swipeToSlide: true
  });

  $('.products-additional-slider').slick({
    slidesToScroll: 1,
    slidesToShow: 2,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 1
        }
      }
    ]
  });

  $('.product-tabs__tab').on('click', function(event) {
    event.preventDefault();
    $('.product-tabs__tab').parent().removeClass('active');
    $(this).tab('show');
    $(this).parent().addClass('active');
  });
}

/**
 * qa
 */
function qa() {
  $('.qa__question').on('click', function(event) {
    event.preventDefault();
    $('.qa__item').not($(this).parent()).removeClass('is-active');
    $('.qa__item').not($(this).parent()).find('.qa__answer').stop().slideUp(300);
    $(this).parent().toggleClass('is-active');
    $(this).siblings('.qa__answer').stop().slideToggle(300);
  });
}

/**
 * advantages slider
 */
function advantagesSlider() {
  $('.b-hero__advantages').slick({
    slidesToScroll: 1,
    slidesToShow: 5,
    arrows: false,
    infinite: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1265,
        settings: {
          slidesToShow: 4
        }
      },
      {
        breakpoint: 767,
        settings: {
          slidesToShow: 3
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2
        }
      }
    ]
  });
}

/**
 * course tabs
 */
function courseTabs() {
  $('.course-tabs a').on('click', function(event) {
    event.preventDefault();
    $(this).parents('.course-tabs').find('.sld').removeClass('active');
    $(this).parent().addClass('active');
  });
}

/**
 * Initialization General Scripts for all pages
 */
function initScripts() {
  maskedInput();
  fancybox();
  formValidation();
  scrollToHref();
  breakpointsHandler();
  headerDropdown();
  langDropdown();
  heroSlider();
  waves();
  masonry();
  brands();
  placehodlers();
  slider();
  videos();
  uploadPhoto();
  headerSearch();
  partners();
  productSlider();
  qa();
  headerfixed();
  advantagesSlider();
  courseTabs();
  parallax();
}
