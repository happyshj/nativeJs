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

// 02，filter筛选
function uniqArray2(arr) {
    return arr.filter(function (item, index, array) {
        return array.indexOf(item, index+1) === -1;
    })
}

// 03，ES6的方法
function uniqArray3(arr) {
    return Array.from(new Set(arr));
}

// 04，基本的方法
function uniqArray4(arr){
    let res = [arr[0]];
    for(let i = 0; i< arr.length; i++){
        let repeat = false;
        for(let j = 0; j < res.length; j++){
            if(arr[i] === res[j]){
                repeat = true;
                break;
            }
        }
        if(!repeat){
            res.push(arr[i]);
        }
    }
    return res;
}

// 05, 先排序再去重（改变了数组的顺序）
function uniqArray5(arr) {
    let arr1 = arr.sort();
    let res = [arr1[0]];
    for(let i = 0; i< arr1.length; i++){
        if(arr1[i] !== res[res.length - 1]){
            res.push(arr1[i]);
        }
    }
    return res;
}

// 06, 利用对象去重
function uniqArray(arr) {
    let res = [];
    let temp = {};
    for(let i = 0; i< arr.length; i++){
        if(!temp[arr[i]]){
            res.push(arr[i]);
            temp[arr[i]] = 1;
        }
    }
    return res;
}

// 使用示例
let a = [1, 3, 5, 7, 5, 2];
let b = uniqArray(a);
console.log(b); // [1, 3, 5, 7]



