<?php
	header('content-type:text/html;charset=utf-8');
	$username = $_GET['username'];
	$arr = array("铁拐李","余洪","谢启津","大明");
	echo $username;
	if(in_array($username,$arr)){
		echo "已存在";
	}else{
		echo "注册成功";
	}
?>