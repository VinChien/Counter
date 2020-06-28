$(document).ready(function () {

    $(window).scroll(function () {

        var offset = $(".counter").offset();
        var top = offset.top;
        var left = offset.left;
        // var counterHeight = $(".counter").outerHeight();
        // console.log("counterHeight="+counterHeight);
        // console.log("divtop="+top);

        var windowTop = $(window).scrollTop();
        // console.log("windowTop="+windowTop);

        if (windowTop > top ) {
            
            $(".counter").animate({
                num:777
            },{
                duration:2000,
                step:(now)=>{
                    $(".counter").text(Math.floor(now));
                }
            })
        }


    });


});