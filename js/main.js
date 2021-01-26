                                                                        //滚轮事件//
var scrollFunc = function (e) {
    e = e || window.event;
    if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件             
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
            $(".wp-a").css("top","-100%")
            $(".wp-b").css("top","-100%")
            }
            else {
                $(".wp-a").css("top","0px")
                $(".wp-b").css("top","0px")
            }
             if (e.wheelDelta > 0) { //当滑轮向上滚动时
            $(".wp-c").css("top","0%")
        }
    }
}
//给页面绑定滑轮滚动事件
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//滚动滑轮触发scrollFunc方法
window.onmousewheel = document.onmousewheel = scrollFunc;


window.onload = function () {
    //第一屏侧边导航半出
    $(".nav-nr").css("left", "0");
    $(".nav").css("left", "-130px")
}

//鼠标点击事件

$(".nav").click(function () {
    $(".nav").css("left", "0px");
    $(".jt").css("left", "150px")
    $("#z").css("right", "0")
    $("#x").css("right", "0")
    $("#v").css("right", "0")
});
//鼠标双点击事件

$(".nav").dblclick(function () {
    $(".nav").css("left", "-130px");
    $(".jt").css("left", "135px")
})

//鼠标移入
$(".txk").mouseover(function () {
    $(".tx").css("left", "0")
})

//鼠标移出
$(".txk").mouseout(function () {
    $(".tx").css("left", "-200px")
})

                                                                    //点击按钮弹出第三屏//
$("#btn").click(function(){
    $(".wp-c").css("top","-200%")
})
$(".wp-c").dblclick(function () {
$(".wp-c").css("top","0%")
})