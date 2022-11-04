$(document).ready(function(){

	$('a').click(function(){
		$(this).siblings('a').removeClass('a')
		$(this).siblings('a').find('.fa-solid').removeClass('fa-caret-up').addClass('fa-caret-down')


		$(this).toggleClass('a')
		$(this).find('.fa-solid').toggleClass('fa-caret-down fa-caret-up')

		$(this).next().slideToggle()
		$(this).siblings('a').next('.item').slideUp()

	})

})