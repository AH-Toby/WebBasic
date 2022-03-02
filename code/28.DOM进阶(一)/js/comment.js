function getNodes(dom) {
    // 返回包含所有节点的数组
    var arr = [];
    // 定义一个正则来判断换行符
    var reg = /^\s*$/

    // 遍历所有系欸按，过滤换行符节点
    for (var i = 0; i < dom.childNodes.length; i++) {
        nodeObj = dom.childNodes[i]

        // 如果是文本节点，要过滤换行符
        if (nodeObj.nodeType === 3) {

            if (!reg.test(nodeObj.data)) {
                arr.push(nodeObj);
            }
        } else {
            // 其他类型节点
            arr.push(nodeObj);
        }
    }
    return arr;
}


// 在元素后面插入节点
function insertAfter(father, newChild, oldChild) {
    // 获取它下一个节点
    var nextNode = oldChild.nextSibling;

    // 在它兄弟节点前插入节点
    father.insertBefore(newChild, nextNode);
    return newChild;
}

// 在元素最前面插入节点
function preappendChild(father, child) {
    // 获取第一个节点
    var firstNode = father.firstChild;
    
    // 插入到它前面
    father.insertBefore(child, firstNode);
    return child;
}