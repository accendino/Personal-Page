$(document).ready(function() {

	//var toggle = $("#navigation__button")

    //toggle.on("click", function(e){
    //e.preventDefault();
    //if (toggle.hasClass("active")) {
    // toggle.removeClass("active")
    //} else {
    //  toggle.addClass("active")
    //}
    //})

    /*переменные*/
	var navToggle = $('#navigation__button');
	var navIcon = $('.navigation__toggle .fa');
	var navBlock = $('.navigation__list');
	var navBlockOpen = 'navigation__list--open';
	var navLink = $('.navigation__list a');
	//var iconOpen = 'fa-bars';
	//var iconClose = 'fa-times';

	/*menu mobile*/
	navToggle.on('click',function(e) {
		e.preventDefault();
		navBlock.toggleClass(navBlockOpen);

		if (navToggle.hasClass("active")) {
        navToggle.removeClass("active");

        } else {
        navToggle.addClass("active");
        }

		//if (navIcon.hasClass(iconOpen)) {
		//	navIcon.removeClass(iconOpen);
		//    navIcon.addClass(iconClose);
		//} 
		//else {
		//	navIcon.removeClass(iconClose);
		//    navIcon.addClass(iconOpen);
		//}		

	})

	navLink.on('click',function() {

		if (navBlock.hasClass(navBlockOpen)){

		if (navToggle.hasClass("active")) {
        navToggle.removeClass("active");

        } else {
        navToggle.addClass("active");
        }
    }

		//if ( navBlock.hasClass(navBlockOpen) ) {
		//	if ( navIcon.hasClass(iconOpen) ){
		//		navIcon.removeClass(iconOpen);
		//		navIcon.addClass(iconClose);
		//	} else {
		//		navIcon.removeClass(iconClose);
		//		navIcon.addClass(iconOpen);
		//	}
		//}
//
		navBlock.removeClass(navBlockOpen);
		
	})

//slide2id - плавная прокрутка по ссылкам внутри страницы
	$("nav a,a[href='#top'],a[rel='m_PageScroll2id'],a.PageScroll2id").mPageScroll2id({
	    highlightSelector:"nav a"
	});

    // MixItUp - фильтрация работ в портфолио
	$('#portfolio-projects').mixItUp();	

	// FancyBox - galery
	$(".fancybox").fancybox({
			// Default - with fix from scroll to top
            helpers: {
                overlay: {
                    locked: false
                }
            }
    });
	// End of FancyBox - galery

}); 