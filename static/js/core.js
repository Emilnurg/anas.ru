function initMap() {
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

$(document).ready(function() {
  var body = $('body');
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
  }
});

window.Share = {
  getImage: function() {
    var sel = $('meta[property="og:image"]');
    if (sel.size() > 0) {
      return sel.attr('content');
    }
    return '';
  },

  getSummary: function() {
    var sel = $('meta[property="og:description"]');
    if (sel.size() > 0) {
      return sel.attr('content');
    }
    return '';
  },

  getTitle: function() {
    var sel = $('meta[property="og:title"]');
    if (sel.size() > 0) {
      return sel.attr('content');
    }
    return $('title').text();
  },

  getUrl: function() {
    return window.location.href;
  },

  facebook: function() {
		var url = 'https://www.facebook.com/sharer.php?s=100';
		url += '&p[title]=' + encodeURIComponent(Share.getTitle());
		url += '&p[summary]='   + encodeURIComponent(Share.getSummary());
		url += '&p[url]=' + encodeURIComponent(Share.getUrl());
		var img = Share.getImage();
		if (img) {
		  url += '&p[images][0]=' + encodeURIComponent(img);
    }

		Share.popup(url);
	},

  instagram: function() {
		var url = 'https://www.instagram.com/sharer.php?s=100';
		url += '&p[title]=' + encodeURIComponent(Share.getTitle());
		url += '&p[url]=' + encodeURIComponent(Share.getUrl());
		var img = Share.getImage();
		if (img) {
		  url += '&p[images][0]=' + encodeURIComponent(img);
    }
		Share.popup(url);
	},

	vk: function() {
		var url = 'https://vk.com/share.php?';
		url += 'url=' + encodeURIComponent(Share.getUrl());
		url += '&title=' + encodeURIComponent(Share.getTitle());
		url += '&image=' + encodeURIComponent(Share.getImage());
		url += '&noparse=true';
		Share.popup(url);
	},

  youtube: function() {
		var url = 'https://youtube.com/share/?';
		url += 'url=' + encodeURIComponent(Share.getUrl());
		url += '&title=' + encodeURIComponent(Share.getTitle());
		url += '&image=' + encodeURIComponent(Share.getImage());
		Share.popup(url);
	},

	popup: function(url) {
		window.open(url, '', 'toolbar=0,status=0,width=626,height=436');
	}
};
