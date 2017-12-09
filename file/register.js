			var btn = document.getElementById("rigester_wrapper_registText");
			var cheak = document.getElementById("rigester_wrapper_check");
			var inps = document.getElementsByTagName("input");
			var phone = document.getElementById("rigester_wrapper_phone");
			var user = document.getElementById("rigester_wrapper_code")
			var pass = document.getElementById("rigester_wrapper_pass");
			var mail = document.getElementById("rigester_wrapper_mail");
			var passAgin = document.getElementById("rigester_wrapper_passAgin");
			var p_text_1 = document.getElementById("p_text_1");
			var p_text_2 = document.getElementById("p_text_2");
			var p_text_3 = document.getElementById("p_text_3");
			var p_text_4 = document.getElementById("p_text_4");
			var p_text_5 = document.getElementById("p_text_5");
			var p_text_6 = document.getElementById("p_text_6");
			var phoneCode = /^1[3|4|5|8][0-9]\d{4,8}$/
			var usernameCode = /^[\u4e00-\u9fa5\w]{3,16}$/;
			var passworldCode = /^[a-z0-9_-]{6,18}$/;
			var mailCode = /^[a-z\d]+(\.[a-z\d]+)*@([\da-z](-[\da-z])?)+(\.{1,2}[a-z]+)+$/

			btn.onclick = function() {
				if(user.value == "") {
					p_text_1.innerHTML = "用户名不能为空";
				} else if(!usernameCode.test(user.value)) {
					p_text_1.innerHTML = "用户名不合法";
				} else if(phone.value == "") {
					p_text_2.innerHTML = "手机号不能为空";
				} else if(!phoneCode.test(phone.value)) {
					p_text_2.innerHTML = "手机号不合法";
				} else if(mail.value == "") {
					p_text_3.innerHTML = "邮箱不能为空";
				} else if(!mailCode.test(mail.value)) {
					p_text_3.innerHTML = "邮箱不合法";
				} else if(pass.value == "") {
					p_text_4.innerHTML = "密码不能为空";
				} else if(!passworldCode.test(pass.value)) {
					p_text_4.innerHTML = "密码不合法";
				} else if(passAgin.value !== pass.value) {
					p_text_5.innerHTML = "跟设置密码不同";
				} else if(cheak.checked == false) {
					p_text_6.innerHTML = "请同意服务条款";
				} else {
					$.ajax({
						type: "GET",
						url: "file/get.php",
						async: true,
						dataType: 'text',
						data: {
							'username': $(user).val()
						},
						success: function(result) {
							alert(result)
						}
					});
					var local = window.localStorage
					local.setItem('username', user.value)
					location.href = "menu.html";
				}
			}
			$('#title').click(function(){
				location.href = "menu.html"
			})