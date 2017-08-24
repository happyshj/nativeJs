// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    // your implement
    //return arr instanceof Array;
    // return Array.isArray(arr);
    return Object.prototype.toString.call(arr) === '[Object Array]';
}

// 判断fn是否为一个函数，返回一个bool值
function isFunction(fn) {
    // your implement
    return typeof fn === "function";
}


// 使用递归来实现一个深度克隆，可以复制一个目标对象，返回一个完整拷贝
// 被复制的对象类型会被限制为数字、字符串、布尔、日期、数组、Object对象。不会包含函数、正则对象等
function cloneObject(src) {
    if (typeof src == "object"){
        if (Object.prototype.toString.call(src) === '[object Array]'){
            var temp = [];
            src.forEach(function (item, index,array) {
                temp.push(cloneObject(item));
            });
            return temp;
        }else if (Object.prototype.toString.call(src) === '[object Object]'){
            // 对象
            var temp1 = {};
            for(var item in src){
                if (src.hasOwnProperty(item)){
                    temp1[item] = cloneObject(src[item]);
                }
            }
            return temp1;
        }else if(Object.prototype.toString.call(src) === '[object Date]'){
            return src;
        }else {
            // 其他情况
            return src;
        }
    }else {
        return src;
    }
}

// 测试用例：
var srcObj = {
    a: 1,
    b: {
        b1: ["hello", "hi"],
        b2: "JavaScript"
    }
};
var abObj = srcObj;
var tarObj = cloneObject(srcObj);

srcObj.a = 2;
srcObj.b.b1[0] = "Hello";

console.log(abObj.a);
console.log(abObj.b.b1[0]);

console.log(tarObj.a);      // 1
console.log(tarObj.b.b1[0]);    // "hello"