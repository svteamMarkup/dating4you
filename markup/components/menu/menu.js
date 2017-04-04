$(document).on('click','.js-menu',function() {
	$(this).toggleClass('_active');
	$('.menu__list').slideToggle(300);
	$('.overlay').addClass('_active');
});

$(document).on('click','.overlay._active',function() {
	$('.menu__list').hide();
	$('.overlay').removeClass('_active');
	$('.js-menu').removeClass('_active');
});