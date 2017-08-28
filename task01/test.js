// 为element增加一个样式名为newClassName的新样式
function addClass(element, newClassName) {
    element.classList.add(newClassName);
    return element;
}

// 移除element中的样式oldClassName
function removeClass(element, oldClassName) {
    element.classList.remove(oldClassName);
    return element;
}

// 判断siblingNode和element是否为同一个父元素下的同一级的元素，返回bool值
function isSiblingNode(element, siblingNode) {
    let parentElement = element.parentNode;
    let childrenElement = parentElement.children;
    [].prototype.some.call(childrenElement, function (item, index, array) {
        return item === siblingNode;
    });
}

// 实现一个简单的Query
function $(selector) {
    let temp = selector.charAt(0);
    if (temp == '#'){

    }
}
