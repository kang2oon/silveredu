$(document).ready(function(){
	var cur_path = window.location.pathname;
	if (cur_path == '/') {
		$('body').addClass('mvb_show');
	}else{
		$('body').removeClass('mvb_show');
		$('.gnb li').removeClass('on');
	}
	
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
	sel_lst();
	
	$('.modal').iziModal({
		headerColor: '#f15a21',
		overlayColor: 'rgba(0, 0, 0, 0.7)',
		radius: 8,
		borderBottom: false,
		zindex: 5000,
		onOpened: function(event){ // 이 달의 생활습관표 탭 재구동
			var lstw = $('.lifestyle_table');
			lstw.on('mouseenter mouseover', function(){
				sel_lst();
			});
		}
	});
});
/* 이 달의 생활습관표 */
function sel_lst(){
	$('.lifestyle_table').tabslet();
}