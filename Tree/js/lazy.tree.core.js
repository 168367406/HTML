/**
 * Lazy.tree.core
 * PROJECT_NAME: HTML
 * PACKAGE_NAME:
 * Created by Lazy on 2017/4/8 15:57
 * Version: 0.1
 * Info: Tree核心js工具类
 */
;(function ($, window, document, undefined) {
    var defaultSetting = {
        'color': 'red',
        'fontSize': '12px',
        'textDecoration': 'none'
    };
    //定义Beautifier的构造函数
    var LazyTree = function (ele, opt) {
        this.$element = ele,
            this.defaults = defaultSetting,
            this.options = $.extend({}, this.defaults, opt)
    }
    //定义Beautifier的方法
    LazyTree.prototype = {
        init: function () {
            return $(this.$element).css({
                'color': this.options.color,
                'fontSize': this.options.fontSize,
                'textDecoration': this.options.textDecoration
            });
        }
    }
    //在插件中使用Beautifier对象
    $.fn.lazyTree = function (options) {
        // var lazyTree = new LazyTree(this, options);
        // return lazyTree.init();
    };
    $.fn.lazyTree.init = function (options) {
        var lazyTree = new LazyTree(this, options);
        return lazyTree.init();
    };
    $.fn.lazyTree.defaultSettings = {
        color: ""
    };

})(jQuery, window, document);


(function ($) {
    // 插件的定义
    $.fn.hilight = function (options) {
        debug(this);
        // build main options before element iteration
        var opts = $.extend({}, $.fn.hilight.defaults, options);
        // iterate and reformat each matched element
        return this.each(function () {
            $this = $(this);
            // build element specific options
            var o = $.meta ? $.extend({}, opts, $this.data()) : opts;
            // update element styles
            $this.css({
                backgroundColor: o.background,
                color: o.foreground
            });
            var markup = $this.html();
            // call our format function
            markup = $.fn.hilight.format(markup);
            $this.html(markup);
        });
    };
    // 私有函数：debugging
    function debug($obj) {
        if (window.console && window.console.log)
            window.console.log('hilight selection count: ' + $obj.size());
    };
    // 定义暴露format函数
    $.fn.hilight.format = function (txt) {
        return '<strong>' + txt + '</strong>';
    };
    // 插件的defaults
    $.fn.hilight.defaults = {
        foreground: 'red',
        background: 'yellow'
    };
// 闭包结束
})(jQuery);