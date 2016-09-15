
define(['jquery','touch'],function(){
	(function(){
		$('footer a').on('click',function(){
			$('footer a').css('color','black');
			$(this).css('color','#f56e6a');
		});
	})();
});




	
// require(['touch'],function(){
// 	touch.on('footer a','tap',function(){
// 		console.log('aa');
// 	});
// })
	