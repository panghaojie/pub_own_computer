define(['text!./home.html','jquery','bootstrap','carousel'],function(content){
	function home(){
		$('main').html(content);
		$.ajax({
			url:'http://duif.applinzi.com/leyuan/home_data.php',
			type:'get',
			dataType:'json',
			async:'true',
			success:function(res){
				console.log(res);
				setData(res);
			}
		});
		function setData(res){
			var arrImg = res.slider;
			var arrAreaList = res.arealist;
			var summer = res.reclist;
			for (var i = 0; i < arrImg.length; i++) {
				$('.item').eq(i).find('img').attr('src',arrImg[i].img);
			}
			for (var j = 0; j < arrAreaList.length; j++) {
				$('.areaList').find('img').eq(j).attr('src',arrAreaList[j].img);
			}
			for (var k = 0; k < summer.length; k++) {
				var liObj = $('<li><img/></li>');
				liObj.find('img').attr('src',summer[k].img);
				$('.summer').append(liObj);
			}
		}
	}
	return{
		home:home
	}
});