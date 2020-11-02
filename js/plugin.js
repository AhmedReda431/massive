$(document).ready(function(){
    $(window).on("scroll",function(){
        var sc = $(window).scrollTop(),
                df = $(".down-button").offset().top;
        if(sc+200 >=df){
            $("header").css({opacity:0})
            $(".massivelyButton").css({opacity:1})
        }else{
            $("header").css({opacity:1});
            $(".massivelyButton").css({opacity:0})
        }

    });
    $(window).on("scroll",function(){
        var sc = $(window).scrollTop()
        if(sc > 700){
            $(".scrollButton").fadeIn(1000)
        }else{
            $(".scrollButton").fadeOut(1000)
        }
    })
    $(".scrollButton").click(function(){
        $("html,body").animate({scrollTop:0},1000,function(){
            $(".scrollButton").fadeOut(1000)
        })
    })
});

$(document).ready(function(){
    $("#downLink").click(function(){
        $.scrollSmoothTo($("#down"));
    });
  });
