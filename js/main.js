$(document).ready(function() {

    /*перем. доделать*/
	var navToggle = $('.navigation__toggle');
	var navIcon = $('.navigation__toggle .fa');
	var navBlock = $('.navigation__list');
	var navBlockOpen = 'navigation__list--open';
	var navLink = $('.navigation__list a');
	var iconNav = 'fa-bars';
	var iconClose = 'fa-times';

	/*menu mobile*/
	$('.navigation__toggle').on('click',function(e) {
		e.preventDefault();
		$('.navigation__list').toggleClass('navigation__list--open');

		if ($('.navigation__toggle .fa').hasClass('fa-bars')) {
			$('.navigation__toggle .fa').removeClass('fa-bars');
		    $('.navigation__toggle .fa').addClass('fa-times');
		} 
		else {
			$('.navigation__toggle .fa').removeClass('fa-times');
		    $('.navigation__toggle .fa').addClass('fa-bars');
		}		

	})

	navLink.on('click',function() {

		if ( navBlock.hasClass(navBlockOpen) ) {
			if ( navIcon.hasClass(iconNav) ){
				navIcon.removeClass(iconNav);
				navIcon.addClass(iconClose);
			} else {
				navIcon.removeClass(iconClose);
				navIcon.addClass(iconNav);
			}
		}

		navBlock.removeClass(navBlockOpen);
		
	})

//slide2id - плавная прокрутка по ссылкам внутри страницы
	//$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	//    highlightSelector:"nav a"
	//});

	$('#portfolio-projects').mixItUp();	

}); 