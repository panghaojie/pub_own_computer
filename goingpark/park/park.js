define(['text!./park.html','jquery'],function(content){
	function park(){
		$('main').html(content);
		$.ajax({
			url:'http://duif.applinzi.com/leyuan/leyuan_data.php?address=全城',
			type:'get',
			dataType:'json',
			async:true,
			success:function(res){
				console.log(res);
				setData(res);
			}
		});
		function setData(res){
			var arr = res.data;
			$('.parkWrap').empty();
			for (var i = 0; i < arr.length; i++) {
				var liObj = $('<li><div><p></p><p></p></div><div><p></p><p></p></div></li>');
				liObj.addClass('liOne');
				liObj.css({
					'backgroundImage':'url('+arr[i].img+')'
				});
				liObj.find('div').eq(0).addClass('col-xs-12');
				liObj.find('div').eq(1).addClass('col-xs-12');
				liObj.find('p').eq(0).addClass('col-xs-10');
				liObj.find('p').eq(0).text(arr[i].name);
				liObj.find('p').eq(1).addClass('col-xs-2 glyphicon glyphicon-map-marker');
				liObj.find('p').eq(2).addClass('col-xs-6');
				liObj.find('p').eq(2).text(arr[i].address);
				liObj.find('p').eq(3).addClass('col-xs-6');
				liObj.find('p').eq(3).text(arr[i].dist + '公里');
				$('.parkWrap').append(liObj);
			}
			$('.parkHeader').on('click',function(e){
				$('.parkWrap').empty();
				$('.parkHeader p').css('border','none')
				$('.parkHeader').find('p').eq($(e.target).index()).css({
					'borderBottomWidth':'2px',
					'borderBottomStyle':'solid',
					'borderBottomColor':'#ef6d6b'
				});
				if($(e.target).index() == 0){
					$('.parkWrap').empty();
					for (var i = 0; i < arr.length; i++) {
						var liObj = $('<li><div><p></p><p></p></div><div><p></p><p></p></div></li>');
						liObj.addClass('liOne');
						liObj.css({
							'backgroundImage':'url('+arr[i].img+')'
						});
						liObj.find('div').eq(0).addClass('col-xs-12');
						liObj.find('div').eq(1).addClass('col-xs-12');
						liObj.find('p').eq(0).addClass('col-xs-10');
						liObj.find('p').eq(0).text(arr[i].name);
						liObj.find('p').eq(1).addClass('col-xs-2 glyphicon glyphicon-map-marker');
						liObj.find('p').eq(2).addClass('col-xs-6');
						liObj.find('p').eq(2).text(arr[i].address);
						liObj.find('p').eq(3).addClass('col-xs-6');
						liObj.find('p').eq(3).text(arr[i].dist + '公里');
						$('.parkWrap').append(liObj);
					}
				}
				if($(e.target).index() == 1){
					$('.parkWrap').empty();
					for (var i = 0; i < arr.length; i++) {
						var liObj = $('<li></li>');
						liObj.text(arr[i].address);
						liObj.addClass('col-xs-4 liTwo');
						$('.parkWrap').append(liObj);
					}
				}
				if($(e.target).index() == 2){
					var arr1 = arr;
					var arr3 = [5,43,2,5,6];
					// for (var i = 0; i < arr.length; i++) {
					// 	arr3.push(parseInt(arr[i].dist));
					// }
					
					arr1.sort(function(a,b){
						return 	parseInt(a.dist-0) > parseInt(b.dist-0);
					});
					arr3.sort(function(a,b){
						 return a>b;
					});
					console.log(arr3);
					for (var i = 0; i < arr1.length; i++) {
						console.log(arr1[i].dist);
					}
					$('.parkWrap').empty();
					for (var i = 0; i < arr1.length; i++) {
						var liObj = $('<li><div><p></p><p></p></div><div><p></p><p></p></div></li>');
						liObj.addClass('liOne');
						liObj.css({
							'backgroundImage':'url('+arr1[i].img+')'
						});
						liObj.find('div').eq(0).addClass('col-xs-12');
						liObj.find('div').eq(1).addClass('col-xs-12');
						liObj.find('p').eq(0).addClass('col-xs-10').text(arr1[i].name);
						// liObj.find('p').eq(0);
						liObj.find('p').eq(1).addClass('col-xs-2 glyphicon glyphicon-map-marker');
						liObj.find('p').eq(2).addClass('col-xs-6');
						liObj.find('p').eq(2).text(arr1[i].address);
						liObj.find('p').eq(3).addClass('col-xs-6');
						liObj.find('p').eq(3).text(arr1[i].dist + '公里');
						$('.parkWrap').append(liObj);
					}
				}
			})
			
		}
	}
	return{
		park:park
	}
});