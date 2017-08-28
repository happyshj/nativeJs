function getObjectLength(obj) {
    let length = 0;
    for(let i in obj){
        if(obj.hasOwnProperty(i)){
            length ++;
        }
    }
    return length;
}
let obj = {
    a: 1,
    b: 2,
    c: {
        c1: 3,
        c2: 4
    }
};
console.log(getObjectLength(obj)); // 3

