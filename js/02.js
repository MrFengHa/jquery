//通过js的方式来获取名称叫div的所有html元素对象
var divs1 = document.getElementsByTagName("div");
alert(divs1.length)
//通过jquery方式来获取名称叫div的所有html元素对象
var $divs = $("div");
alert($divs.length)
var div1 = $("#div1")
div1.html("bbbb")
