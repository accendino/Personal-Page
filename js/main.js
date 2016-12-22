$(document).ready(function() {

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

	})

	navLink.on('click',function() {

		if (navBlock.hasClass(navBlockOpen)){

		if (navToggle.hasClass("active")) {
        navToggle.removeClass("active");

        } else {
        navToggle.addClass("active");
        }
    }		
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

	//jQuery validate JS

	$('#contact-form').validate({
		rules:{
			name: {required: true},
			email: {required: true, email: true},
			//skype: {required: true},
			//phone: {required: true},
			message: {required: true},
		},

		messages:{
			name: "Пожалуйста, представьтесь :)",  //что выдавать при незаполненном поле
			email: {
				required: "Пожалуйста, укажите свой email",
				email: "Email адрес должен быть в формате name@domain.com - возможно Вы ввели email с ошибкой",
			},
			//skype: "",
			//phone: "",
			message: "Пожалуйста, введите текст сообщения",
		}
	})

}); 