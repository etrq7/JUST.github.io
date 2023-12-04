$(".mm > li").mouseenter(function () {
    $(".sm").stop().slideDown();
})

$(".mm > li").mouseleave(function () {
    $(".sm").stop().slideUp();
})
