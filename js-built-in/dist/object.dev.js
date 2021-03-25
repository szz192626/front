"use strict";

// toString方法
[1, '2', true].toString(); //"1,2,true"

new Date().toString(); //"Sun Sep 24 2017 14:52:20 GMT+0800 (CST)"

({
  name: 'ryan'
}).toString(); //"[object Object]"
// toLocaleString方法

1234567 .toLocaleString(); //"1,234,567"

6.37588.toLocaleString(); //"6.376"

new Date().toLocaleString(); //"2017/9/24 下午2:58:21"
// 静态方法
// Object.assign(target, ...sources)

var target = {
  a: 1
};
var source1 = {
  b: 2
};
var source2 = {
  c: function c() {
    console.log('c');
  }
};
Object.assign(target, source1, source2);
console.log(target); //{a: 1, b: 2, c: ƒ}
//⾃定义⼀个assign⽅法

function copy(target) {
  if (target == null) {
    throwError('出错：Cannot convert undefined or null to object');
  }

  var target = new Object(target);

  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (source.hasOwnProperty(key)) {
        //若当前属性为源对象⾃有属性，则拷⻉⾄⽬标对象
        target[key] = source[key];
      }
    }
  }

  return target;
} // Object.create(proto [,propertiesObject])


function Person(name) {
  this.name = name;
}

Person.prototype.say = function () {
  console.log('my name is ' + this.name + ',my age is ' + this.age);
};

var person = new Person('ryan');
var p = Object.create(person, {
  age: {
    value: 23,
    writable: true,
    configurable: true
  },
  sex: {
    configurable: true,
    get: function get() {
      return sex + '⼠';
    },
    set: function set(value) {
      sex = value;
    }
  }
});
p.sex = '男';
p.say(); //'my name is ryan,my age is 23'

console.log(p.sex); //'男⼠'

p.sex = '⼥';
console.log(p.sex); //'⼥⼠'