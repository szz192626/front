// toString方法
[1, '2', true].toString(); //"1,2,true"
(new Date()).toString(); //"Sun Sep 24 2017 14:52:20 GMT+0800 (CST)"
({ name: 'ryan' }).toString(); //"[object Object]"
// toLocaleString方法
(1234567).toLocaleString(); //"1,234,567"
(6.37588).toLocaleString(); //"6.376"
(new Date()).toLocaleString(); //"2017/9/24 下午2:58:21"

// 静态方法
// Object.assign(target, ...sources)
var target = {
    a: 1
};
var source1 = {
    b: 2
};
var source2 = {
    c: function () {
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
}
// Object.create(proto [,propertiesObject])
function Person(name) {
    this.name = name;
}
Person.prototype.say = function () { console.log('my name is ' + this.name + ',my age is ' + this.age); }
var person = new Person('ryan');
var p = Object.create(person, {
    age: {
        value: 23,
        writable: true,
        configurable: true
    },
    sex: {
        configurable: true,
        get: function () { return sex + '⼠'; },
        set: function (value) { sex = value; }
    }
});

p.sex = '男';
p.say(); //'my name is ryan,my age is 23'
console.log(p.sex); //'男⼠'
p.sex = '⼥';
console.log(p.sex); //'⼥⼠'
// Object.defineProperty(obj, prop, descriptor)
var obj = {};
Object.defineProperty(obj, 'name', {
    writable: true,
    configurable: true,
    enumerable: false,
    value: '张三'
});
console.log(obj.name); //'张三'
for (var key in obj) {
    console.log(obj[key]); //⽆结果
}
// Object.defineProperties(obj, props)
var obj = {};
Object.defineProperties(obj, {
    name: {
        writable: true,
        configurable: true,
        enumerable: false,
        value: '张三'
    },
    age: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: 23
    }
});
console.log(obj.name); //'张三'
console.log(obj.age); //23
for (var key in obj) {
    console.log(obj[key]); //23
}
// Object.seal(obj) / Object.isSealed(obj)
var obj = { name: '张三' };
Object.seal(obj);
console.log(Object.isSealed(obj)); //true
obj.name = '李四'; //修改值成功
console.log(obj.name); //'李四'
obj.age = 23; //⽆法添加新属性
console.log(obj.age); //undefined
Object.defineProperty(obj, 'name', {
    writable: true,
    configurable: true,
    enumerable: true
}); //报错：Cannot redefine property: name
// Object.freeze(obj) / Object.isFrozen(obj)
var obj = { name: '张三' };
Object.freeze(obj);
console.log(Object.isFrozen(obj)); //true
obj.name = '李四'; //修改值失败
console.log(obj.name); //'张三'
obj.age = 23; //⽆法添加新属性
console.log(obj.age); //undefined
Object.defineProperty(obj, 'name', {
    writable: true,
    configurable: true,
    enumerable: true
}); //报错：Cannot redefine property: name
// getOwnPropertyDescriptor(obj, prop)
var obj = {};
Object.defineProperty(obj, 'name', {
    writable: true,
    configurable: false,
    enumerable: true,
    value: '张三'
});
var prop = Object.getOwnPropertyDescriptor(obj, 'name');
console.log(prop); //{value: "张三", writable: true, enumerable: true, configurable: false}
// Object.getOwnPropertyNames(obj)
var obj = {};
obj.say = function () { };
Object.defineProperties(obj, {
    name: {
        writable: true,
        configurable: true,
        enumerable: true,
        value: '张三'
    },
    age: {
        writable: true,
        configurable: true,
        enumerable: false,
        value: 23
    }
});
var arr = Object.getOwnPropertyNames(obj);
console.log(arr); //["say", "name", "age"]
// Object.getPrototypeOf(obj)
function Person(name) {
    this.name = name;
}
var person = new Person('张三');
var p = Object.create(person); //对象p的原型为person
console.log(p); //Person {}
var __ptoto__ = Object.getPrototypeOf(p);
console.log(__ptoto__); //Person {name: "张三"}
// Object.setPrototypeOf(obj, proto)
var obj = { a: 1 };
var proto = {};
Object.setPrototypeOf(obj, proto); //设置obj对象的原型
proto.b = 2; //为该原型对象添加属性
proto.c = 3;
console.log(obj.a); //1
console.log(obj.b); //2
console.log(obj.c); //3
// Object.keys(obj)
var person = {
    type: 'person',
    say: function () { }
};
//以person对象为原型，创建obj对象
var obj = Object.create(person, {
    sex: {
        writable: true,
        configurable: true,
        enumerable: false, //设置sex属性为不可枚举
        value: 'male'
    },
    age: {
        writable: true,
        configurable: true,
        enumerable: true, //设置age属性为可枚举
        value: 23
    }
});
obj.name = '张三'; //⾃定义属性name默认为可枚举
console.log(obj.propertyIsEnumerable('name')); //true，成
功验证name属性为可枚举
//⽤for-in可获取obj上全部可枚举的属性（包括⾃有和原型链上的）
var arr = [];
for (var key in obj) {
    arr.push(key);
}
console.log(arr); //["age", "name", "type", "say"]
//⽤Object.keys()可获取obj上全部可枚举的⾃有属性
console.log(Object.keys(obj)); // ["age", "name"]
// Object.preventExtensions(obj) / Object.isExtensible(obj)
var obj = {
    name: '张三'
};
Object.preventExtensions(obj); //阻⽌obj的可扩展性
console.log(Object.isExtensible(obj)); //false，表明obj对象为不可扩展，即阻⽌成功
obj.age = 23; //默认添加失败
console.log(obj.age); //undefined