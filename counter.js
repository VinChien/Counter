$(document).ready(function () {

    $(window).scroll(function () {

        $("*").each(function (index, element) {
            // element == this
            var offset = $(this).offset();
            var top = offset.top;
            var windowTop = $(window).scrollTop();

            // 取得屬性裡的值
            var number = $(this).attr("data-counter-number");
            var time = $(this).attr("data-counter-time");
            var offset = $(this).attr("data-counter-offset");

            if (windowTop > top - offset) {

                $(this).animate({
                    num: number,
                }, {
                    duration: parseInt(time),
                    step: (now) => {
                        $(this).text(Math.floor(now));
                    }
                })
            }

        });


    });


});