define(['text!./card.html','jquery'],function(content){
	function card(){
		$('main').html(content);
	}
	return{
		card:card
	}
});