/**
 * Lazy.tree.core
 * PROJECT_NAME: HTML
 * PACKAGE_NAME:
 * Created by Lazy on 2017/4/8 15:57
 * Version: 0.1
 * Info: Tree核心js工具类
 */
(function ($, window, document, undefined) {
    "use strict";
    var setting = {}, obj = null,
        _consts = {},
        tools = {},
        view = {},
        event = {},
        data = {};


    var methods = {};
    $.fn.lazyTree = {
        consts: _consts,
        _z: {
            tools: tools,
            view: view,
            event: event,
            data: data
        },
        init: function (options, data) {
            if (data == null)
                console.log(data);
            var _html = "";
            _html += "<ul>";
            _html += "<li>";
            _html += "<i class='fa fa-chevron-down'></i>";
            _html += "<a href='javascript:;'><i class='fa fa-folder-open'></i>我的邮箱</a>";

            _html += "</li>";
            _html += "</ul>";
            return this.append(_html);
        },
        show: function () {
            alert("test");
        },
        hide: function () {
            // good
        },
        update: function (content) {
            // !!!
        }
    };

    // $.fn.lazyTree = function (method) {
    //     // 方法调用
    //     if (methods[method]) {
    //         return methods[method].apply(this, Array.prototype.slice.call(arguments, 1));
    //     } else if (typeof method === 'object' || !method) {
    //         return methods.init.apply(this, arguments);
    //     } else {
    //         $.error('Method ' + method + ' does not exist on jQuery.lazyTree');
    //     }
    // };
    // $.fn.lazyTree.init = function (obj) {
    //     obj.lazyTree();
    // };

})(jQuery, window, document);