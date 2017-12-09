<?php
header('content-type:text/html;charset=utf-8');

$username = $_POST["username"];

$users = array('张仁翔','余洪','谢启津');

echo  $username;
if( in_array( $username , $users ) ){
	
	echo '已被注册！！！';

}else{

	echo '注册成功！！！！';

}

?>