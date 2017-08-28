let ulDiv = document.getElementsByTagName('li');
console.log(ulDiv); // HTMLCollection对象HTMLCollection[3]0: li1: li2: lilength: 3__proto__: HTMLCollection
console.log(ulDiv.length);
console.log(ulDiv.item(0)); // <li>a</li>

 console.log(ulDiv[0]); // NodeList,<li>a</li>
// console.log(ulDiv[0].childNodes); // NodeList 类数组对象
// console.log(ulDiv[0].children); // HTMLCollection
// console.log(ulDiv[0].firstChild);

let aaa = document.querySelectorAll('li');
console.log(aaa); // NodeList对象
console.log(aaa.length);
console.log(aaa.item(0)); // <li>a</li>

 console.log(aaa[0]); // NodeList,<li>a</li>
// console.log(aaa[0].childNodes); // NodeList
// console.log(aaa[0].children); // HTMLCollection
// console.log(aaa[0].firstChild);

console.log(ulDiv === aaa); // false
console.log(ulDiv[0] === aaa[0]); // true

let ulDivId = document.getElementById('div-ul');
console.log(ulDivId);

let aaaId = document.querySelector('#div-ul');
console.log(aaaId);

console.log(ulDivId === aaaId); // true
