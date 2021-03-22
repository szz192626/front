"use strict";

/**
 * JS将⼿机号格式化，中间部分以 * 号代替
 * @param phone
 * @returns {string | * | void}
 */
function phoneToStar(phone) {
  return phone.replace(/(\d{3})\d{4}(\d{4})/, "$1****$2");
}

console.log(phoneToStar("17327711875")); // 173****1875