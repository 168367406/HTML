/**
 * Coding......
 * Created by D.SR on 2017/3/4.
 */
(function ($) {
    $.test={
        myShow:function () {
            alert("test1");
            var test3=aa();
            alert(test3);
            jQuery.postTest("test5");
        }
    };
    $(function () {
        $.test.myShow();
    })
})(jQuery);