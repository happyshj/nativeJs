function simpleTrim(str) {
    // 9,32
    let left = 0;
    let right = str.length - 1;
    for(let i = 0; i < str.length; i++){
        // 从前向后遍历，查找前面非空格位置
        if(str.charCodeAt(i) !== 9 && str.charCodeAt(i) !== 32){
            left = i;
            break;
        }
    }
    for(let i = str.length - 1; i > left; i--){
        if(str.charCodeAt(i) !== 9 && str.charCodeAt(i) !== 32){
            if(i !== str.length - 1){
                right = i+1;
            }
            break;
        }
    }
    return str.slice(left, right);
}

let str = '   hi!  ';
str = simpleTrim(str);
console.log(str); // 'hi!'
