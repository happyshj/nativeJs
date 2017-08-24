// 判断arr是否为一个数组，返回一个bool值
function isArray(arr) {
    // your implement
    //return arr instanceof Array;
    // return Array.isArray(arr);
    return Object.prototype.toString.call(arr) === '[Object Array]';
}
