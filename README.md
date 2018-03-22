# data-util
一个简单的工具类</br>
## Install
```
npm i js-data-util --save
```
## Example
```
import util from 'js-data-util';
```
### scale
```
const data = [1, 2, 3, 4, 5];
const scale = util.scale(data);
console.log(scale);//[ 6.67, 13.33, 20, 26.67, 33.33 ]
```
```
const data = ['new Date()', '2', {}, 4, 5];
const scale = util.scale(data);
console.log(scale);//[ 0, 0, 0, 44.44, 55.56 ]
```
```
const data = { a: 1, b: 2, c: 3 };
const scale = util.scale(data);
console.log(scale);//[ 0, 0, 0, 44.44, 55.56 ]
```
```
const data = { a: {}, b: 'b', c: 3, d: 4, e: true };
const scale = util.scale(data);
console.log(scale);//{ a: 0, b: 0, c: 42.86, d: 57.14, e: 0 }
```
### mergeRecursive
```
const data = {
    a: 'a',
    b: 1,
    c: false,
    d: undefined,
    e: {
        e1: 'e1'
    },
    f: function () { }
}, data2 = {
    a: 'a',
    e: {
        e2: 'e2'
    },
    f: function () { console.log('---'); }
}
const mergeRecursive = util.mergeRecursive(data, data2);
console.log(mergeRecursive);//{a:'a',b:1,c:false,d:undefined,e:{e1:'e1',e2:'e2'},f:[Function:f]}
```
### sort
```
const data = {
    a: 20,
    b: 15,
    c: 30,
    d: 12,
    e: 89
}
const sort = util.sort(data);
console.log(sort);//Map { 'd' => 12, 'b' => 15, 'a' => 20, 'c' => 30, 'e' => 89 }
```
```
const data = {
    a: 20,
    b: 15,
    c: 30,
    d: 12,
    e: 89
}
const sort = util.sort(data, 'desc');
console.log(sort);//Map { 'e' => 89, 'c' => 30, 'a' => 20, 'b' => 15, 'd' => 12 }
```
```
const data = {
    1: 20,
    a: 15,
    '-9': 3,
    b: 2,
    c: 31
};
const sort = util.sort(data);
console.log(sort);//Map { 'b' => 2, '-9' => 3, 'a' => 15, '1' => 20, 'c' => 31 }
```
```
const data = {
    1: 20,
    a: 15,
    '-9': 3,
    b: 2,
    c: 31
};
const sort = util.sort(data, 'desc');
console.log(sort);//Map { 'c' => 31, '1' => 20, 'a' => 15, '-9' => 3, 'b' => 2 }
```