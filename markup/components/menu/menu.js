$(document).on('click','.js-menu',function() {
	$(this).toggleClass('_active');
	$('.menu__list').slideToggle(300);
})