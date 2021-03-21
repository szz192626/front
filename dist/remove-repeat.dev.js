"use strict";

/**
 * JS数组去重
 * @param arr 数组
 * @returns {Array} 结果返回数组
 */
function removeRepeat(array) {
  var arr = [];
  var json = {};

  for (var i = 0, len = array.length; i < len; i++) {
    if (!json[array[i]]) {
      arr.push(array[i]);
      json[array[i]] = 1;
    }
  }

  return arr;
}

var arr = [11, 22, 33, 46, 79, 11, 46, 97, 79, 46];
console.log(removeRepeat(arr));