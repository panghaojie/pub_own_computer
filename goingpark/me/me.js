define(['text!./me.html'],function(content){
	function me(){
		$('main').html(content);
	}
	return{
		me:me
	}
});