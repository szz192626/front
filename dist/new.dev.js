"use strict";

/**
 * randomWord 产⽣任意⻓度随机字⺟数字组合
 * @param randomFlag 是否任意⻓度 min-任意⻓度最⼩位[固定位数]
max-任意⻓度最⼤位
 * @param min
 * @param max
 * @returns {string}
 */
function randomWord(randomFlag, min, max) {
  var str = "",
      range = min,
      arr = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']; // 随机产⽣

  if (randomFlag) {
    range = Math.round(Math.random() * (max - min)) + min;
  }

  for (var i = 0; i < range; i++) {
    pos = Math.round(Math.random() * (arr.length - 1));
    str += arr[pos];
  }

  return str;
} // ⽣成 3 - 32 位随即字符串


console.log(randomWord(true, 3, 32)); // ⽣成 32 位随机字符串

console.log(randomWord(false, 32));