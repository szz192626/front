var s = 'hello21 world21';
console.log(s.match(/\d{2}/)); //[ '21', index: 5, input: 'hello21 world21' ]
var s = 'hello21 world21';
console.log(s.match(/\d{2}/g)); //[ '21', '21' ]

var s = 'hello world hello';
console.log(s.replace('hello', 'hi')); //hi world hello
console.log(s.replace(/hello/, 'hi')); //hi world hello
console.log(s.replace(/hello/g, 'hi')); //hi world hi

var s = 'hello world hello';
console.log(s.search('hello')); //0
console.log(s.search(/hello/g)); //0
console.log(s.search(/hello2/)); //-1

var s = 'Hello World';
console.log(s.toLowerCase()); //hello world
console.log(s.toUpperCase()); //HELLO WORLD

var s1 = 'hello ';
var s2 = 'world ';
var s3 = '233';
console.log(s1.concat(s2, s3)); //hello world 233

var s1 = 'hello ';
var s2 = 'world ';
var s3 = '233';
console.log(s1.concat(s2, s3)); //hello world 233

var s = 'hi baby';
console.log(s.slice(3)); //baby
console.log(s.slice(1, 5)); //i ba
console.log(s.slice(-4)); //baby
console.log(s.slice(-4, -2)); //ba

var s = 'hi baby';
console.log(s.substr(3)); //baby
console.log(s.substr(3, 2)); //ba
console.log(s.substr(-3, 2)); //ab

var s = 'hi baby';
console.log(s.substring(3)); //baby
console.log(s.substring(3, 5)); //ba
console.log(s.substring(5, 3)); //ba
console.log(s.substring(3, 3)); //''
