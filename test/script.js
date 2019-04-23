$( document ).ready(function() {
	mobileMenu();

  $('.js-popup').magnificPopup({
    type: 'inline',
    preloader: false,
    focus: '#name',

    // When elemened is focused, some mobile browsers in some cases zoom in
    // It looks not nice, so we disable it:
    callbacks: {
      beforeOpen: function() {
        if($(window).width() < 700) {
          this.st.focus = false;
        } else {
          this.st.focus = '#name';
        }
      }
    }
  });

});

$(window).resize(function(){

});


$(window).scroll(function(){

});

function mobileMenu() {
	var $mobileButton = $(".mobile-menu-btn");
	var $menuBlock = $("menu ul");
	var $body = $("body");
	var menuContextFunc = menu.bind($mobileButton);
	adaptationCheck();

	$( window ).resize(function() {
		adaptationCheck();
	});

	$mobileButton.click(function () {
		menuContextFunc();
	});

	$mobileButton.focus(function() {
		$(document).keypress(function (e) {
			if (e.which == 13) {
				menuContextFunc();
			}
		});
	});


	function menu() {
		$(this).toggleClass("mobile-menu-btn_active");

		if($(this).hasClass("mobile-menu-btn_active")) {
			$body.css({"overflow":"hidden"});
			showMenu();
		} else {
			$body.css({"overflow":"auto"});
			hideMenu();
		}
	}

	function adaptationCheck() {
		if ($mobileButton.is(':visible') && !($mobileButton.hasClass("mobile-menu-btn_active"))) {
			hideMenu();
		} else if (!$mobileButton.is(':visible')) {
      $body.css({"overflow":"auto"});
      showMenu();
		} else {
			showMenu();
		}
	}


	function showMenu() {
		$menuBlock.slideDown().css("display","flex");
	}

	function hideMenu() {
		$menuBlock.slideUp();
	}


}





