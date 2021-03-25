"use strict";

var jsonString = '{"name":"ryan"}'; //JSON字符串（⽐如从AJAX获取字符串信息）

var obj = JSON.parse(jsonString); //将字符串反序列化成对象

console.log(obj); //{ name: 'ryan' }

console.log(obj.name == 'ryan'); //true

var obj = {
  name: 'ryan',
  age: 23
};
var jsonString = JSON.stringify(obj);
console.log(jsonString); //'{"name":"ryan","age":23}