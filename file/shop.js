//跳入注册页面
		$('#ceil_login').click(function(){
			location.href = "register.html"
		})
//跳入注册页面
		$('#ceil_login').click(function(){
			location.href = "register.html"
		})
//跳入登录页面		
		$('#ceil_enter').click(function(){
			location.href = "login.html"
		})
//用户名		
			var local = window.localStorage
			ceil_enter.value = local.getItem("username")
//跳入购物车
		$('#ceil_shopCar').click(function(){
			location.href = "shopping trolley.html"
		})
//跳入首页
		$('#title_logo').click(function(){
			location.href = "menu.html"
		})		
	var jsonObj = null
		$.ajax({
		type:"get",
		url:"file/miaosha.json",
			async: true,
			dataType: 'json',
			data:{},
			success:function(result){
			jsonObj = result
					
		
		
		var contentImg = document.getElementById("content-img");
		var Ul = document.getElementsByClassName("content-ul")[0];
		var content = document.getElementById("content");
		var href = decodeURI(location.href);
		var hrefArr = href.split("?");
		var imgId = hrefArr[1].split("=")[1];
		
		var contentUl = document.getElementsByClassName("content-ul")[0];
		var liImg = contentUl.getElementsByTagName("li");
		var selUl = document.getElementById("content_selColor_ul");
		var Row = document.getElementById("Row");
		var RowUL = document.getElementById("Row_ul");
		var sImgBox = document.getElementsByClassName("content-imgBox")
		var bImgBox = document.getElementById("bImgBox")
		var sizeUl = document.getElementById("sizeUl");
		
		$('#nav_ul>li').hover(function(){
			$(".subnav-ul ").eq($(this).index()).slideDown(true)
		},function(){
			$('.subnav-ul ').eq($(this).index()).hide()
		})
		
		
		
			if(x = imgId){
			//liImg	
				main_title_h2.innerHTML = jsonObj[imgId]['title']
				main_nav_p.innerHTML = jsonObj[imgId]['title']
				for(var i=0;i< jsonObj[imgId]["liImg"].length;i++){
					var li = document.createElement("li")
					li.innerHTML =  jsonObj[imgId]["liImg"][i]
					Ul.appendChild(li) 
				}
			//价格	
				content_fixed_strong.innerHTML = jsonObj[imgId]['price']
			//小图片	
				for(var i=0;i<jsonObj[imgId]["selImg"].length;i++){
					var li = document.createElement("li");
					selUl.appendChild(li)
					var div = document.createElement("div");
					li.appendChild(div);
	
					var span = document.createElement("span");
					span.innerHTML =  jsonObj[x]["selImg"][i]
					div.appendChild(span)
					var p = document.createElement("p");
					p.innerHTML = jsonObj[x]["selcolor"][i]
					div.appendChild(p);	
				}
			//选择size	
				for(var i=0;i<jsonObj[imgId]["size"].length;i++){
					var li = document.createElement("li")
					sizeUl.appendChild(li)
					var div = document.createElement("div");
					li.appendChild(div)
					var p = document.createElement("p");
					p.innerHTML = jsonObj[imgId]["size"][i]
					div.appendChild(p)
				}
				
			//颜色liClick
				content_buy_selectName.innerHTML = jsonObj[imgId]['selcolor'][0]		
				$('.content-selColor>ul>li>div').on('click',$('.content-selColor>ul>li>div'),function(){
					$('.content-selColor ul li div').removeClass("selColorChange")
					$(this).addClass("selColorChange").siblings().removeClass("selColorChange")	
				})
				$('.content-selColor>ul>li').on('click',$('.content-selColor>ul>li'),function(){
					content_buy_selectName.innerHTML = jsonObj[imgId]['selcolor'][$(this).index()]
				})
				
			//sizeliClick	
				content_buy_selectSize.innerHTML = jsonObj[imgId]['size'][0]
				$('#sizeUl li ').click(function(){
					$(this).addClass('selColorChange').siblings().removeClass('selColorChange')
					content_buy_selectSize.innerHTML = jsonObj[imgId]['size'][$(this).index()]
				})	
			//数量选择	
				var count = "<option>1</option>"
				for(var i=2;i<11;i++){
					count += "<option value="+i+">"+i+"</option>"	
				}
				content_selCount.innerHTML = count

				
			//产品介绍	
				for(var i=0;i<jsonObj[imgId]["Row"].length;i++){
					var li = document.createElement("li");
					RowUL.appendChild(li)
					var img = document.createElement("img");
					img.src = jsonObj[imgId]["Row"][i]
					li.appendChild(img)
					RowUL.appendChild(li)
				}
			//放大镜
				contentImg.src = jsonObj[imgId]["path"][0]
				bImg.src = jsonObj[imgId]["path"][0]
				$(liImg).hover(function(){
					contentImg.src = jsonObj[imgId]["path"][$(this).index()]
					bImg.src = jsonObj[imgId]["path"][$(this).index()]
				})
				$('.content-imgBox').hover(function(){
					$("#moveBox").show()
					$('#bImgBox').show()
				},function(){
					$('#moveBox').hide();
					$('#bImgBox').hide()
				})	
				$('.content-imgBox').eq(0).mousemove(function(event){
					var ev = event||window.event;
					var pX = ev.pageX || ev.clientX+$(window).scrollLeft();
					var pY = ev.pageY || ev.clientY+$(window).scrollTop();
					var maxWidth = $('.content-imgBox').width()-$('#moveBox').width();
					
					var maxHight = $('.content-imgBox').height()-$('#moveBox').height();		
					var ratio = ($("#bImg").width()-$('#bImgBox').width())/($('.content-imgBox').width()-$('#moveBox').width());
					var endX = pX - $('.content-imgBox').offset().left - $('#moveBox').width()/2;
					var endY = pY - $('.content-imgBox').offset().top - $('#moveBox').height()/2;
					if(endX > maxWidth){
						endX = maxWidth;
					}else if(endX < 0){
						endX = 0;
					}
					if(endY > maxHight){
						endY = maxHight;
					}else if(endY < 0){
						endY = 0;
					}
					$('#moveBox').css({'left':endX,'top':endY});
					$('#bImg').css({'left':-endX*ratio,'top':-endY*ratio});					
				})
			//购物车	
				$('#content_button_shopCar').click(function(){
					var flag = confirm("添加该商品到购物车吗？")
					if(flag){
						var local = window.localStorage
						local.setItem("commodity",jsonObj[imgId]['title'])
						local.setItem("size",content_buy_selectSize.innerHTML)
						local.setItem("img",jsonObj[imgId]['liImg'][0])
						local.setItem('price',jsonObj[imgId]['price'])
						local.setItem('count',content_selCount.value)
					}
				})
			}	
		}		
		})





















