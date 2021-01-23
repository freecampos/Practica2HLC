//$(document).ready(function(){
	//var altura = $('.menu').offset().top; /*Altura que hay entre la aprte superior y el menu*/
	
	//alert(altura);
	/*Si hace scroll y pasamos de la altura de donde se encuentra el menu fijo, nos acompaña durante el scroll*/
	$(window).on("scroll", funtion(){
		if($(window).scrollTop() > altura){
			$('nav').addClass('menu-fixed');
		} else{
			$('nav').removeClass('menu-fixed');
		}
	});
//});