/*jshint esversion: 6*/
if (!String.prototype.trim) {
  (function() {
    // Вырезаем BOM и неразрывный пробел
    String.prototype.trim = function() {
      return this.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, '');
    };
  })();
}

/**
 * maskedinput
 */
function maskedInput(container) {
  $('[name=telephone]', container).inputmask({
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

		[].slice.call( document.querySelectorAll( 'input.form__field,textarea.form__field' ) ).forEach( function( inputEl ) {
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

      // $('.product-tabs__links').slick({
      //   slidesToShow: 1,
      //   arrows: false,
      //   infinite: false,
      //   swipeToSlide: true,
      //   variableWidth: true
      // });

      // $('.catalog-filter__categories').slick({
      //   slidesToShow: 1,
      //   arrows: false,
      //   infinite: false,
      //   swipeToSlide: true,
      //   variableWidth: true
      // });
      //
      // $('.select-brand').slick({
      //   slidesToShow: 1,
      //   arrows: false,
      //   infinite: false,
      //   swipeToSlide: true,
      //   variableWidth: true
      // });

      // $('.course-tabs').slick({
      //   slidesToShow: 1,
      //   arrows: false,
      //   infinite: false,
      //   swipeToSlide: true,
      //   variableWidth: true
      // });
      //
      // $('.articles-categories').slick({
      //   slidesToShow: 1,
      //   arrows: false,
      //   infinite: false,
      //   swipeToSlide: true,
      //   variableWidth: true
      // });
    },
    leave: function () {
      $('.footer__contacts').appendTo('.footer__right');

      // $('.product-tabs__links').slick('unslick');
      // $('.catalog-filter__categories').slick('unslick');
      // $('.select-brand').slick('unslick');
      // $('.course-tabs').slick('unslick');
      // $('.articles-categories').slick('unslick');
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
    itemSelector: '.catalog__col',
    transitionDuration: 0
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
    adaptiveHeight: true,
    autoplay: true,
    autoplaySpeed: 6000,
    pauseOnDotsHover: true,
    dots: true,
    arrows: true
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

function initPhotoswipe(el) {
  if ($('.pswp').size() === 0) {
    return false;
  }

  var pswpElement = document.querySelectorAll('.pswp')[0],
    rel = $(el).attr('rel'),
    href = $(el).attr('href');
  var items = [], index = 0, i = 0;
  $('[rel="' + rel + '"]').each(function() {
    var size = ($(this).data('size') || '0x0').split('x'),
      src = $(this).attr('href');

    if (!index && href === src) {
      index = i;
    }

    items.push({
      src: src,
      w: size[0],
      h: size[1],
      title: ($(this).attr('title') || '')
    });

    i ++;
  });
  var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, {
    index: index,
    bgOpacity: .9,
    history: false,
    captionEl: true,
    shareEl: true
  });
  gallery.init();
  return false;
}

/**
 * Initialization General Scripts for all pages
 */
function initScripts() {
  maskedInput($('body'));
  fancybox();
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

function initContactsMap() {
  var mapEl = document.getElementById('map'),
      $map = $(mapEl);

  if ($map.size() > 0) {
    var lon = parseFloat($map.data('coord-lon')),
      lat = parseFloat($map.data('coord-lat'));

    var map = new google.maps.Map(mapEl, {
      center: {
        lat: lat,
        lng: lon
      },
      scrollwheel: false,
      zoom: 17
    });
    new google.maps.Marker({
      map: map,
      position: {
        lat: lat,
        lng: lon
      },
      icon: '/static/images/map_pin_logo.svg'
    });
  }
}

function loadPartnersMap() {
  window.markerCluster.clearMarkers();
  var bounds = new google.maps.LatLngBounds();

  var city = $('#partners_city').val(),
    prof = $('#partners_prof').val(),
    allPartners, partners;
    allPartners = partners = $('.partners-table tbody tr');

  if (city) {
    partners = partners.filter('[data-city="' + city + '"]');
  }

  if (prof) {
    partners = partners.filter('[data-profs*="|' + prof + '|"]');
  }

  allPartners.addClass('hide');
  partners.removeClass('hide');

  partners = partners.filter('[data-lat]').filter('[data-lon]');

  var infoWin = new google.maps.InfoWindow();
  partners.each(function() {
    var partner = $(this),
      info = '<div class="map-info">',
      city = partner.find('.cty').text().trim(),
      address = partner.find('.adr').text().trim(),
      phones = partner.find('.phn').text().trim(),
      site = partner.find('.sit').text().trim();

    if (city) {
      info += '<div class="map-info__city">' + city + '</div>'
    }

    info += '<div class="map-info__company">' + partner.find('.ttl').text() + '</div>';

    if (address) {
      info += '<div class="map-info__address">' + address + '</div>'
    }

    if (phones) {
      info += '<div class="map-info__phones">' + phones + '</div>'
    }

    if (site) {
      info += '<div class="map-info__site">' + site + '</div>'
    }

    info += '</div>';
    var location = {
      lat: parseFloat(partner.data('lat')),
      lng: parseFloat(partner.data('lon')),
      info: info
    };
    var marker = new google.maps.Marker({
      position: location,
      icon: {
        url: '/static/images/marker_small.png',
        size: new google.maps.Size(24, 34)
      }
    });
    google.maps.event.addListener(marker, 'click', function() {
      infoWin.setContent(location.info);
      infoWin.open(window.partnersMap, marker);
    });
    window.markerCluster.addMarker(marker);
    bounds.extend(marker.getPosition());
  });

  if (window.markerCluster.getMarkers().length > 0) {
    window.partnersMap.fitBounds(bounds);
    if (window.partnersMap.getZoom() > 16) {
      window.partnersMap.setZoom(16);
    }
  } else {
    window.partnersMap.setZoom(3);
    window.partnersMap.setCenter({
      lat: 62.5763605,
      lng: 93.33995625
    });
  }

}

function initPartnerMap() {
  $(document).ready(function() {
    window.partnersMap = new google.maps.Map(document.getElementById('map'), {
      zoom: 3,
      scrollwheel: false,
      center: {
        lat: 62.5763605,
        lng: 93.33995625
      }
    });

    // Add a marker clusterer to manage the markers.
    window.markerCluster = new MarkerClusterer(window.partnersMap, [], {
      gridSize: 36,
      styles: [{
        textColor: 'white',
        url: '/static/images/marker.svg',
        textSize: 18,
        height: 51,
        width: 36,
        iconAnchor: [17, 51]
      }],
      maxZoom: 15
    });

    loadPartnersMap();
  });
}

window.Share = {
  getImage: function() {
    var sel = $('meta[property="og:image"]');
    if (sel.size() > 0) {
      return encodeURIComponent(sel.attr('content'));
    }
    return '';
  },

  getSummary: function() {
    var sel = $('meta[property="og:description"]');
    if (sel.size() > 0) {
      return encodeURIComponent(sel.attr('content'));
    }
    return '';
  },

  getTitle: function() {
    var sel = $('meta[property="og:title"]');
    var title = '';
    if (sel.size() > 0) {
      title = sel.attr('content');
    } else {
      title = $('title').text();
    }
    return encodeURIComponent(title);
  },

  getUrl: function() {
    return encodeURIComponent(window.location.href);
  },

  facebook: function() {
		var url = 'https://www.facebook.com/sharer.php?s=100';
		url += '&p[title]=' + Share.getTitle();
		url += '&p[summary]=' + Share.getSummary();
		url += '&p[url]=' + Share.getUrl();
		var img = Share.getImage();
		if (img) {
		  url += '&p[images][0]=' + img;
    }

		Share.popup(url);
	},

  googleplus: function() {
		Share.popup('https://plus.google.com/share?url=' + Share.getUrl());
	},

  ok: function() {
    Share.popup('https://connect.ok.ru/offer?url=' + Share.getUrl());
  },

  twitter: function() {
		var url = 'https://twitter.com/share?';
		url += 'text='+ Share.getTitle();
		url += '&url=' + Share.getUrl();
		url += '&counturl=' + Share.getUrl();
		Share.popup(url);
	},

	vk: function() {
		var url = 'https://vk.com/share.php?';
		url += 'url=' + Share.getUrl();
		url += '&title=' + Share.getTitle();
		url += '&image=' + Share.getImage();
		url += '&noparse=true';
		Share.popup(url);
	},

	popup: function(url) {
		window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
	}
};

function Form() {
	var T = this;
	this.button = '.submit,input[type="submit"]';
	this.message = '.messages';
	this.error = '.form__err';
	this.inputs = 'input, select, textarea';
	this.hasErrorClass = '.has-error';
	this.hasSuccessClass = '.has-success';
	this.excludes = 'input[type=radio],input[type=hidden],input[type=submit],input[type=image],input[type=button]';

	this.populateDataAjaxForm = function(form) {
		var data = {};
		$(T.inputs, form).each(function(){
			if($(this).is('input') && $(this).attr('type') === 'checkbox') {
				data[$(this).attr('name')] = $(this).is(':checked') ? '1' : '0';
			} else if(typeof($(this).attr('name')) !== 'undefined' && $(this).attr('name') === 'distance') {
				data[$(this).attr('name')] = parseInt($(this).val());
			} else {
				data[$(this).attr('name')] = $(this).val();
			}
		});
		return data;
	};

	this.clearFormErrors = function(form){
		$(T.error, form).html('');
		$(T.hasErrorClass, form).removeClass(this.hasErrorClass.substr(1));
	};

	this.setFormSuccess = function(form, message) {
		T.clearFormErrors(form);
		if(typeof(message) === 'string') {
			$(T.message, form).addClass('success').removeClass('failure').html(message).fadeIn(200);
		}
	};

	this.setFormErrors = function(form, errors) {
		T.clearFormErrors(form);
		$(T.inputs, form).each(function() {
			var name = $(this).attr('name'),
        line = $(this).parent();

			if (name && name in errors) {
			  if (errors.hasOwnProperty(name)) {
			    var error = errors[name].join(';');
          delete errors[name];

          if (line) {
            line.addClass(T.hasErrorClass.substr(1))
              .find(T.error).html(error);
          }
        }
			} else {
			  line = $(this).parent();
			  line.addClass(T.hasSuccessClass.substr(1))
          .find(T.error).html('');
      }
		});

		if(errors) {
			var error = [];
			for (var i in errors) {
			  if (errors.hasOwnProperty(i)) {
			    error.push(errors[i].join(';'));
        }
			}
			error = error.join('<br/>');
			$(T.message, form).removeClass('success').addClass('failure').html(error).fadeIn(200);
		}
	};

	this.clearFormValues = function(form) {
		$(T.inputs, form).not(T.excludes).val('');
		$('.checkbox input', form).val('0');
		$('input[type=radio]', form).removeAttr('checked');
		$('.form__group', form).removeClass('input--filled has-error has-success');
	};

	this.validate = function (formCont, callback) {
	  var form = $(formCont);
	  var data = T.populateDataAjaxForm(form);
	  if ('g-recaptcha-response' in data) {
	    delete data['g-recaptcha-response'];
    }

	  var onSuccess = function(data) {
      $(T.button, form).data('inactive', false).removeClass('inactive');

	    if (data['status'] === 'ok') {
        callback(data);
      } else {
        if (data['detail'] && typeof(data['detail']['errors']) !== 'undefined') {
          T.setFormErrors(form, data['detail']['errors']);
        } else {
          alert(data['detail']);
        }
      }
    };

	  data['only_validate'] = 1;

    $.ajax({
      url: form.attr('action'),
      data: data,
      dataType: 'json',
      type: 'POST',
      timeout: 60000,  // 1 min
      success: onSuccess,
      error: function(jqXHR, textStatus) {
        if (jqXHR.status > 400) {
          console.log(textStatus + ' ' + jqXHR.status + ': ' + jqXHR.statusText);

          if(jqXHR.statusText) {
            T.setFormErrors(form, {'Server error': [jqXHR.statusText]});
          }
          $(T.button, form).data('inactive', false).removeClass('inactive');
        } else if (jqXHR.status === 400) {
          onSuccess(jqXHR.responseJSON);
        }
      }
    });
  };

	this.manageForm = function(formCont, callback, clearOnSuccess) {
		formCont = $(formCont);

		$(formCont).submit(function(e) {
			e.preventDefault();

			if (typeof (grecaptcha) !== 'undefined') {
			  T.validate(formCont, function () {
			    var widgetID = formCont.data('recaptcha');
			    grecaptcha.execute(widgetID);
        });

			} else {
			  T.submit(formCont, callback, clearOnSuccess)
      }
			return false;
		});

		$(T.button, formCont).click(function(e) {
			e.preventDefault();
			var inactive = $(this).hasClass('inactive');
			if(typeof(inactive) === 'undefined' || !inactive) {
				$(this).parents('form').submit();
			}
			return false;
		});
	};

	this.submit = function (formCont, callback, clearOnSuccess) {
	  callback = typeof(callback) === 'undefined' ? function() {} : callback;
		clearOnSuccess = typeof(clearOnSuccess) === 'undefined' ? true : clearOnSuccess;

	  var form = $(formCont);
    $(T.button, form).data('inactive', true).addClass('inactive');
    $(T.message, form).fadeOut(160);
    T.clearFormErrors(form);
    var data = T.populateDataAjaxForm(form);

    var onSuccess = function(data) {
      if(data['status'] === 'ok') {
        if (clearOnSuccess) {
          T.clearFormValues(form);
        }
        T.setFormSuccess(form, data['detail']);
        callback(data);
      } else {
        T.setFormErrors(form, data['detail']['errors']);
      }
      $(T.button, form).data('inactive', false).removeClass('inactive');
    };

    $.ajax({
      url: form.attr('action'),
      data: data,
      dataType: 'json',
      type: 'POST',
      timeout: 60000,  // 1 min
      success: onSuccess,
      error: function(jqXHR, textStatus) {
        if (jqXHR.status > 400) {
          console.log(textStatus + ' ' + jqXHR.status + ': ' + jqXHR.statusText);

          if(jqXHR.statusText) {
            T.setFormErrors(form, {'Server error': [jqXHR.statusText]});
          }
          $(T.button, form).data('inactive', false).removeClass('inactive');
        } else if (jqXHR.status === 400) {
          onSuccess(jqXHR.responseJSON);
        }
      }
    });
  }
}

function openThanksCallback() {
  $('.thanks_callback').click();
}

function openThanksRequest() {
  $('.thanks_request').click();
}

window.F = new Form();

$(document).ready(function() {
  var body = $('body');
  var feedbackForm = $('.b-feedback__form,.contacts__form');
  if (feedbackForm.size() > 0) {
    window.F.manageForm(
      feedbackForm,
      feedbackForm.hasClass('callback-form') ? openThanksCallback : openThanksRequest
    );
  }

  if (body.hasClass('body-support-category')) {
    var qa = $('.b-qa'),
        sections = $('.support-sections', qa),
        questionForm = $('.b-feedback__form', qa),
        questionsBlock = $('.qa', qa),
        questions = $('.qa__item', questionsBlock);
    $('a', sections).click(function(e) {
       e.preventDefault();
       $(this).toggleClass('active');

       if ($(this).hasClass('active')) {
         questionForm.hide();
         questionsBlock.show();
       } else {
         questionForm.show();
         questionsBlock.hide();
       }

       $(this).parent().siblings().find('a').removeClass('active');

       var sectionID = $(this).data('section');
       questions.hide().filter('[data-sections*="|' + sectionID + '|"]').show();

       return false;
     });

    $('.support-btn').click(function() {
      questionForm.show();
      questionsBlock.hide();
      $('a', sections).removeClass('active');
    });

  } else if (body.hasClass('body-partners')) {
    var dropdowns = $('main .dropdown');
    $('input', dropdowns).change(loadPartnersMap);

    $('.dropdown-menu a', dropdowns).click(function() {
      var parent = $(this).parents('.dropdown');
      parent.find('input[type=hidden]').val($(this).data('rel'));
      parent.find('.dropdown__button').text($(this).text());
      loadPartnersMap();
    });
  }

  var psPhoto = $('a[rel^="photoswipe"]');
  if (psPhoto.size() > 0) {
    psPhoto.click(function (e) {
      e.preventDefault();
      return initPhotoswipe(this);
    });
  }

  // cookie bar
  var cookieBarCookieKey = 'cbc',
    cookieBar = $('.cookie-bar');
  $('.cookie-close').click(function () {
    cookieBar.hide();
    setCookie(cookieBarCookieKey, '1', {expires: 365 * 24 * 3600, path: '/'});
  });

  if (! getCookie(cookieBarCookieKey)) {
    cookieBar.show();
  }
});

/**
 * First Load Page
 */
$(window).on('load', function(){
  initScripts();

  var body = $('body');

  var cont, tabs;
  if (body.hasClass('body-product')) {
    cont = $('.product-tabs__links');
    tabs = $('.sld', cont);

    if (tabs.length === 1) {
      cont.hide();
    }

    tabs.first().find('a').click();

  } else if (body.hasClass('body-training-course')) {
    cont = $('.course-tabs');
    tabs = $('.sld', cont);
    tabs.first().find('a').click();
    if (tabs.length <= 1) {
      cont.hide();
    }
  }
});


function onProductPurchaseFormSubmit () {
  var formID = 'product_purchase',
    f = $('#' + formID);

  if (f.length > 0) {
    window.F.submit(
      f,
      f.hasClass('callback-form') ? openThanksCallback : openThanksRequest
    );
  }
}

function onProductPurchaseFormReady () {
  var formID = 'product_purchase',
    f = $('#' + formID);

  if (f.length > 0) {
    f.data('recaptcha', grecaptcha.render('recaptcha_' + formID))
  }
}

function onRecaptchaLoadCallback () {
  onProductPurchaseFormReady();
}
