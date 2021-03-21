/**
 * 根据〖中华⼈⺠共和国国家标准 GB 11643-1999〗中有关公⺠身份号码的
规定，公⺠身份号码是特征组合码，由⼗七位数字本体码和⼀位数字校验码组
成。排列顺序从左⾄右依次为：六位数字地址码，⼋位数字出⽣⽇期码，三位数
字顺序码和⼀位数字校验码。
 * 地址码表示编码对象常住户⼝所在县(市、旗、区)的⾏政区划代码。
 * 出⽣⽇期码表示编码对象出⽣的年、⽉、⽇，其中年份⽤四位数字表示，
年、⽉、⽇之间不⽤分隔符。 * 顺序码表示同⼀地址码所标识的区域范围内，对同年、⽉、⽇出⽣的⼈员编
定的顺序号。顺序码的奇数分给男性，偶数分给⼥性。
 * 校验码是根据前⾯⼗七位数字码，按照ISO 7064:1983.MOD 11-2校验码
计算出来的检验码。
 * 出⽣⽇期计算⽅法。
 * 15位的身份证编码⾸先把出⽣年扩展为4位，简单的就是增加⼀个19或18,
这样就包含了所有1800-1999年出⽣的⼈;
 * 2000年后出⽣的肯定都是18位的了没有这个烦恼，⾄于1800年前出⽣的,
那啥那时应该还没身份证号这个东东，⊙﹏⊙b汗...
 * 下⾯是正则表达式:
 * 出⽣⽇期1800-2099 (18|19|20)?\d{2}(0[1-9]|1[12])(0[1-9]|
[12]\d|3[01])
 * 身份证正则表达式 /^\d{6}(18|19|20)?\d{2}(0[1-9]|1[12])
(0[1-9]|[12]\d|3[01])\d{3}(\d|X)$/i
 * 15位校验规则 6位地址编码+6位出⽣⽇期+3位顺序号
 * 18位校验规则 6位地址编码+8位出⽣⽇期+3位顺序号+1位校验位
 * 校验位规则 公式:∑(ai×Wi)(mod 11)……………………………………(1)
 * 公式(1)中：
 * i----表示号码字符从由⾄左包括校验码在内的位置序号；
 * ai----表示第i位置上的号码字符值；
 * Wi----示第i位置上的加权因⼦，其数值依据公式Wi=2^(n-1）(mod 11)
计算得出。
 * i 18 17 16 15 14 13 12 11 10 9 8 7 6 5 4 3 2 1
 * Wi 7 9 10 5 8 4 2 1 6 3 7 9 10 5 8 4 2 1
 *
==========================================================
==================================
 * 身份证号合法性验证
 * ⽀持15位和18位身份证号
 * ⽀持地址编码、出⽣⽇期、校验位验证
 * @param code
 * @returns {*[]} 该函数返回⼀个数组 [true,''] 或 [false,"身份
证号格式错误"]
 * @constructor
 */
function identityCodeValid (code) { let city = { 11: "北京", 12: "天津", 13: "河北", 14: "⼭⻄", 15: "内蒙古", 21: "辽宁", 22: "吉林", 23: "⿊⻰江 ", 31:
"上海", 32: "江苏", 33: "浙江", 34: "安徽", 35: "福建", 36:
"江⻄", 37: "⼭东", 41: "河南", 42: "湖北 ", 43: "湖南", 44:
"⼴东", 45: "⼴⻄", 46: "海南", 50: "重庆", 51: "四川", 52:
"贵州", 53: "云南", 54: "⻄藏 ", 61: "陕⻄", 62: "⽢肃", 63:
"⻘海", 64: "宁夏", 65: "新疆", 71: "台湾", 81: "⾹港", 82:
"澳⻔", 91: "国外 " }
 let tip = ""
 let pass = true
 if (!code || !/^\d{6}(18|19|20)?\d{2}(0[1-9]|1[012])(0[1-9]|[12]\d|3[01])\d{3}(\d|[xX])$/i.test(code)) {
 tip = "身份证号格式错误"
 pass = false
 }
 else if (!city[code.substr(0, 2)]) {
 tip = "地址编码错误"
 pass = false
 }
 else {
 //18位身份证需要验证最后⼀位校验位
 if (code.length == 18) {
 code = code.split('')
 //∑(ai×Wi)(mod 11)
 //加权因⼦
 let factor = [7, 9, 10, 5, 8, 4, 2, 1, 6, 3, 7, 9,
10, 5, 8, 4, 2]
/校验位
let parity = [1, 0, 'X', 9, 8, 7, 6, 5, 4, 3, 2]
let sum = 0
let ai = 0
let wi = 0
for (let i = 0; i < 17; i++) {
ai = code[i]
wi = factor[i]
sum += ai * wi
}
let last = parity[sum % 11]
  if (parity[sum % 11] != code[17]) {
tip = "校验位错误,结尾是字⺟请注意⼤⼩写"
pass = false
}
}
}
return [pass, tip]
}

console.log(identityCodeValid("321322200111220441"))