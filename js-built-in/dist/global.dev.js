"use strict";

console.log(6 / 0); //Infinity

console.log(-6 / 0); //-Infinity

console.log(0 / 0); //NaN

console.log(1.7976931348623157E+10308); //Infinity

console.log(-1.7976931348623157E+10308); //-Infinity

var a = Number('100');
var b = Number('hello world');
console.log(a); //100

console.log(b); //NaN

console.log(isNaN(a)); //false

console.log(isNaN(b)); //true

var a;
var b = '';
var c = null;
console.log(a === undefined); //true

console.log(b === undefined); //false

console.log(c == undefined); //true

console.log(encodeURI('http://www.baidu.com')); //http://www.baidu.com

console.log(encodeURI('http://www.baidu.com/my mind')); //http://www.baidu.com/my%20mind

console.log(encodeURI(',/?:@&=+$#')); //,/?:@&=+$#

console.log(encodeURI('http://www.baidu.com/home/some other thing')); //编码后为：http://www.baidu.com/home/some%20other%20thing;其中，空格被编码成了%20
//但是如果你⽤了encodeURIComponent

console.log(encodeURIComponent('http://www.baidu.com/home/some other thing')); //http%3A%2F%2Fwww.baidu.com%2Fhome%2Fsome%20other%20thing连 "/" 都被编码了，整个URL已经没法⽤了

var param = "http://www.baidu.com/home/"; //param为参数

param = encodeURIComponent(param);
var url = "http://www.baidu.com?next=" + param;
console.log(url); //'http://www.baidu.com?next=http%3A%2F%2Fwww.baidu.com%2Fhome%2F'
//显然，参数中的 "/" 被编码了，⽽如果⽤encodeURI肯定要出问题，因为后⾯的/是需要编码的。

console.log(parseInt('10')); //10

console.log(parseInt('11', 9)); //10 (9+1)

console.log(parseInt('11', 2)); //3 (2+1)

console.log(parseInt('17', 8)); //15 (8+7)

console.log(parseInt('1f', 16)); //31 (16+15)

console.log(parseInt('010')); //10

console.log(parseInt('0x0011')); //17

console.log(parseFloat('10')); //10

console.log(parseFloat('10.00')); //10

console.log(parseFloat('10.33')); //10.33

console.log(parseFloat(' 60 ')); //60 ⾸尾的空格会忽略

console.log(parseFloat('23 34 45')); //23 中间的空格不会忽略，会中断

console.log(parseFloat('23 years')); //23

console.log(parseFloat('i am 23')); //NaN

console.log(isFinite(123)); //true

console.log(isFinite(-1.23)); //true

console.log(isFinite(5 - 2)); //true

console.log(isFinite(0)); //true

console.log(isFinite(0 / 0)); //false

console.log(isFinite('Hello')); //false

console.log(isNaN(123)); //false

console.log(isNaN(-1.23)); //false

console.log(isNaN(5 - 2)); //false

console.log(isNaN(0)); //false

console.log(isNaN(0 / 0)); //true

console.log(isNaN('Hello')); //true

console.log(Number(new Boolean(true))); //1

console.log(Number(new Boolean(false))); //0

console.log(Number(new Date())); //1506266494726

console.log(Number(new String('999'))); //999

console.log(Number(new String('999 888'))); //NaN

console.log(String(new Boolean(true))); //'true'

console.log(String(new Boolean(false))); //'false'

console.log(String(new Date())); //'Sun Sep 24 2017 23:25:43 GMT+0800 (CST)'

console.log(String(new String('999'))); //'999'

console.log(String(new String('999 888'))); //'999 888'

console.log(String(12345)); //'12345'