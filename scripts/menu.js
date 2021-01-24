$(document).ready(function () {
	var altura = $('#header-framework nav').offset().top;

	$(window).on('scroll', function () {
		if($(window).scrollTop() > altura){
			$('#header-framework nav').addClass('menu-fixed');
		}
		else{
			$('#header-framework nav').removeClass('menu-fixed');
		}
	})
});