		var enter = document.getElementById("ceil_enter")
		var imgs = imgContant.getElementsByTagName("img")
		for(var i=0;i<imgs.length;i++){
			imgs[i].onclick = function(){
				location.href = "shop.html?id="+this.id;
			}
		}
//跳入注册页面
		$('#ceil_login').click(function(){
			location.href = "register.html"
		})
//跳入登录页面		
		$('#ceil_enter').click(function(){
			location.href = "login.html"
		})
//跳入首页
		$('#ceil_a_main').click(function(){
			location.href = "menu.html"
		})
//用户名		
			var local = window.localStorage
			enter.value = local.getItem("username")
//跳入购物车
		$('#ceil_shopCar').click(function(){
			location.href = "shopping trolley.html"
		})
//倒计时				
		function secKill (){	
			var countdown = document.getElementsByClassName("miaoSha_countdown")[0]
			var nowtime = new Date();
			var getNowTime = nowtime.getTime();
			var nowYear = nowtime.getFullYear()
			var nowMonths = nowtime.getMonth()
			var nowDay = nowtime.getDate()
			var endTime = new Date(nowYear,nowMonths,nowDay+1);
			var getEndTime = endTime.getTime();
			var leftSeconds = (getEndTime - getNowTime)/1000
			var hours = Math.floor(((leftSeconds/60)/60)%24)
			var minutes = Math.floor((leftSeconds/60)%60)
			var seconds = Math.floor(leftSeconds%60)
			hours = (hours<10) ? ("0"+hours) : hours
			minutes = (minutes<10) ? ("0"+minutes) : minutes
			seconds = (seconds<10) ? ("0"+seconds) : seconds
			if(nowtime.getHours() < 10){
				countdown.innerHTML = "距秒杀开始还有"
				miaoSha_hours.innerHTML = (hours-14)
				miaoSha_minutes.innerHTML = minutes
				miaoSha_seconds.innerHTML = seconds
				
			}else{
				countdown.innerHTML = "距秒杀结束还有"
				miaoSha_hours.innerHTML = hours
				miaoSha_minutes.innerHTML = minutes
				miaoSha_seconds.innerHTML = seconds
			}
		}
		var timer = setInterval(secKill,1000)
		
		

		$('#nav_ul>li').hover(function(){
			$(".subnav-ul ").eq($(this).index()).slideDown(true)
		},function(){
			$('.subnav-ul ').eq($(this).index()).hide()
		})


		
		
//轮播图
		var num = 0;	
		var timer = null;	
		
		$('#foucs_Tab ul li').click(function(){
			$(this).addClass('active').siblings().removeClass("active");
			$('#foucs_Tab img').eq($(this).index()).fadeIn(300).siblings().fadeOut(100);
		})
		$('#foucs_Tab img').hover(function(){
			clearInterval(timer)
		},function(){
			clearInterval(timer)
			timer = setInterval(remove,3000)
		})
		
		function remove(){
			num++;
			if(num > $('#foucs_Tab img').length-3){
				num = 0;
			}
			$('#foucs_Tab img').eq(num).fadeIn(300).siblings().fadeOut(100)
			$('#foucs_Tab ul li').eq(num).addClass('active').siblings().removeClass('active')
		}
		
		
		$('#greenLeft').click(function(){
			num--;
			if(num<0){
				num = ($('#foucs_Tab img').length-3);
			}
			$('#foucs_Tab img').eq(num).fadeIn(300).siblings().fadeOut(100)
			$('#foucs_Tab ul li').eq(num).addClass('active').siblings().removeClass('active')
		})
		
		$('#greenRight').click(function(){
			num++;
			if(num > ($('#foucs_Tab div img').length-1)){
				num = 0;
			}
			$('#foucs_Tab img').eq(num).fadeIn(300).siblings().fadeOut(100)
			$('#foucs_Tab ul li').eq(num).addClass('active').siblings().removeClass('active')
		})
//回到顶部
		var scrollY = 0;
		var timer = null;
		window.onscroll = function(){
			scrollY = document.body.scrollTop||document.documentElement.scrollTop
			if(scrollY > 100){
				$('#backTop').show()
			}else{
				$('#backTop').hide()
			}
			$('#backTop').click(function(){
					window.scrollBy(0,-100)
					scrollY = document.body.scrollTop||document.documentElement.scrollTop
						$('#backTop').hide()
		})
		}

