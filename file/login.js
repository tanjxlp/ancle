			var usernameCode = /^[\u4e00-\u9fa5\w]{3,16}$/;
			var passworldCode = /^[a-z0-9_-]{6,18}$/;
			$('#login_btn').click(function(){
				if($('#username_inp').val() == ""){
					username_inp_text.innerHTML = "请输入用户名"
				}else if(!usernameCode.test($('#username_inp').val())){
					username_inp_text.innerHTML = "用户名格式不正确"
				}else if($('#password_inp').val() == ""){
					password_inp_text.innerHTML = "请输入密码"
				}else{
					alert("登录成功")
					var local = window.localStorage
					local.setItem('username',$('#username_inp').val())
					location.href = "menu.html"
				}
			})
			$('#title').click(function(){
				location.href = "menu.html"
			})
