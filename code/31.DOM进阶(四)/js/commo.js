// 公共函数库
/***
* 实现bindEvent方法
* @dom 元素对象
* @type  事件类型
* @fn 事件回调函数
**/
function bindEvent(dom, type, fn) { 
    // 判断是否为火狐浏览器,通过ua来判断
    if (type == "mousewheel" && /firefox/i.test(navigator.userAgent)){
        // 针对浏览器修改事件名称
        type = "DOMMouseScroll"
    }

    // 判断是否为ie浏览器
    if (dom.addEventListener) {
        // 都在冒泡阶段触发
        dom.addEventListener(type, fn);
    } else if (dom.attachEvent) {
        dom.attachEvent("on" + type, function (e) {
            // 兼容性
            e.target = e.srcElement;
            e.currentTarget = this;
            // 改变this执向
            fn.call(dom, e);
        });
    } else {
        // 缓存
        var oldFn = dom["on" + type];
        // dom0级别
        dom["on" + type] = function (e) {
            // 如果已经绑定过先执行之前的
            oldFn && oldFn(e||window.event);
            // 再执行后面的
            fn(e||window.event);
        }
    }
}