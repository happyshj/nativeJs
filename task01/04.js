// 对数组进行去重操作，只考虑数组中元素为数字或字符串，返回一个去重后的数组

// 01
function uniqArray1(arr) {
    // your implement
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1; j < arr.length; j++){
            if(arr[i] === arr[j]){
                arr.splice(j,1);
            }
        }
    }
    return arr;
}

// 02
function uniqArray2(arr) {
    return arr.filter(function (item, index, array) {
        return array.indexOf(item, index+1) === -1;
    })
}

// 03
function uniqArray(arr) {
    return Array.from(new Set(arr));
}

// 使用示例
let a = [1, 3, 5, 7, 5, 2];
let b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]



