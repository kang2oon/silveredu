$(document).ready(function(){
	/* GNB Action */
	$('.gnb .program').on('click mouseenter mouseover', function(){
		$('.menu_over').slideDown();
		$(this).addClass('on');
	});
	$('.close_menuover').click(function(){
		$('.menu_over').slideUp();
		$('.gnb .program').removeClass('on');
	});
	
	/* 교재 월 선택 디자인 적용 */
	$('#ym_choice').customSelect();
	/* 주 선택 */
	$('.plan').tabslet({
		animation: true
	});
});