$(function(){


	var masHeight = $('.myAbility').offset().top;

	var myAbilityHeight = $('.myAbility').height();

	var distance = masHeight - myAbilityHeight;

	var boxHeight = $('.first-box').height();



	var arr = ['80%','80%','70%','70%','60%','60%'];

	$(window).scroll(function(){

		console.log($(window).scrollTop());

		if($(window).scrollTop() > distance){

			$('.search').find('span').each(function(i){
				$(this).css('width',arr[i]);
				// this.style.width = arr[i];
			})	
		}

		if($('body').width() > 1200){
		
			if($(window).scrollTop() >= masHeight - boxHeight/2){	
				$('.first-box').slideDown(1000,function(){
					$('.second-box').fadeIn(1500,function(){
						$('.third-box').show(1500,function(){
							$('.fourth-box').slideDown(1500)
						})
					})
				});
			}
		}
	})

	var ua = navigator.userAgent.toLocaleLowerCase();
	// console.log(ua);
	var isMobile = /iPhone|iPod|android|Windows Phone/ig.test(ua);
	if (isMobile) {
		$('.edu-l-content').css('padding-left',0);
		$('.exp-r-content').css('padding-left',0);

	}
})