$('#shop_goMenu').click(function(){
	location.href = "menu.html"
})
$('#foot_nextBtn').click(function(){
	location.href = "menu.html"
})

//购物车
var num = 0
var sum = 0
var shopNum = 0
var priceCount = 0
//总数量和总价钱初始为0
foot_number.innerHTML = 0
foot_count_span.innerHTML = 0
//购买连接
$('#foot_buyBtn').click(function(){
	location.href = "https://excashier.alipay.com/standard/auth.htm?payOrderId=ea1832c805454981a4b0387247b9b25d.80"
})
window.onstorage = function(){
	var local = window.localStorage
	var divWrapper = document.createElement("div")
	$('#shop_trillryList').append(divWrapper)
	var divContantent = document.createElement("div")
	divWrapper.appendChild(divContantent)
	divContantent.innerHTML = "<input type='checkbox' class='shop-box' style='position:absolute;top:35px;left:30px;'>"
	var size = document.createElement("p")
	$(size).css({'position':'absolute','top':40,'left':645,'font-size':14})
	size.innerHTML = local.getItem("size")
	divWrapper.appendChild(size)
	var commodity = document.createElement("p")
	$(commodity).css({'position':'absolute','top':40,'left':295,'font-size':14})
	commodity.innerHTML = local.getItem("commodity")
	divWrapper.appendChild(commodity)
	var price = document.createElement("p")
	$(price).css({'position':'absolute','top':40,'left':700,'font-size':14})
	price.innerHTML = local.getItem("price")
	divWrapper.appendChild(price)
	var img = document.createElement("span")
	img.innerHTML = local.getItem("img")
	$(img).css({'position':'absolute','top':17,'left':150,'font-size':14})
	divWrapper.appendChild(img)
	var count = document.createElement("p")
	count.innerHTML = local.getItem("count")
	$(count).css({'position':'absolute','top':40,'left':830,'font-size':14})
	divWrapper.append(count)
	var priceAll = document.createElement("p")
	priceAll.innerHTML = ((price.innerHTML).split("￥")[1]) * count.innerHTML
	$(priceAll).css({'position':'absolute','top':40,'left':920,'font-size':14})
	divWrapper.append(priceAll)
divContantent.innerHTML += "<input class='deleInp' type='button' value='删除' style='position:absolute;top:28px;right:35px;border:none;outline:none;background:gainsboro;'>"

//总金额
	num++
	for(var i=0;i<num;i++){
		sum += Number(priceAll.innerHTML)
	}
		foot_number.innerHTML = sum
//总数量	
	for(var i=0;i<num;i++){
		priceCount += Number(count.innerHTML)
	}
		foot_count_span.innerHTML = priceCount
		
//删除自身div和删除小计		
	$('.deleInp').click(function(){
		$(this).parent().parent().remove();
		foot_number.innerHTML -= $(this).parent().parent().children().eq(6).html()
		foot_count_span.innerHTML -= $(this).parent().parent().children().eq(5).html()
	})
//全选	\
$('#shop_cheak').click(function(){
	if($(this).prop('checked')){
		$('.shop-box').prop("checked",true);
	}else{
		$('.shop-box').attr('checked',false)
	}
})
$('.shop-box').click(function(){
	shopNum = 0	
	for(var i=0;i<$('.shop-box').length;i++){
		if($('.shop-box').eq(i).prop('checked')){
			shopNum++
		}
	}
	if(shopNum == $('.shop-box').length){
		$('#shop_cheak').prop("checked",true)
		$('#foot_cheak').prop("checked",true)
	}else{
		$('#shop_cheak').prop("checked",false)
		$('#foot_cheak').prop("checked",false)
	}
	
})





	
}


	

