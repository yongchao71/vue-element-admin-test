/* 小写字母*/
export function isLowerCase(str) {
  const reg = /^[a-z]+$/
  return reg.test(str)
}
/* 大写字母*/
export function isUpperCase(str) {
  const reg = /^[A-Z]+$/
  return reg.test(str)
}
/* 验证邮箱*/
export function isEmail(text) {
  const regex = /^\w+([-+.]\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/
  return regex.test(text)
}
/* 手机号码验证*/
export function isMobile(text) {
  const regex = /^1(3|4|5|6|7|8|9)\d{9}$/
  return regex.test(text)
}
/* 固定号码*/
export function isTel(text) {
  const regex = /^(((0\d{2,3})|(\(0\d{2,3}\)))(\-|)\d{8})|(\d{3,4}\-\d{3,4}\-\d{3,4})$/
  return regex.test(text)
}
/* 验证数字*/
export function isNum(text) {
  const regex = /^\d+$/
  return regex.test(text)
}
/** 验证整数 */
export function isIntNum(text) {
  const regex = /^[-\+]?\d+$/
  return regex.test(text)
}
export function isEnglish(text) { // 匹配英文字母
  const regex = /^[A-Za-z]+$/
  return regex.test(text)
}
/* 是否double类型*/
export function isDouble(text) {
  const regex = /^[-\+]?\d+(\.\d+)?$/
  return regex.test(text)
}
/** 是否是url*/
export function isUrl(text) {
  const regex = /^(http|https):\/\/[A-Za-z0-9]+\.[A-Za-z0-9]+[\/=\?%\-&_~`@[\]\':+!]*([^<>\"])*$/
  return regex.test(text)
}
/** 外部url*/
export function isExternal(path) {
  return /^(https?:|mailto:|tel:)/.test(path)
}
/** 字母数字下划线合法字符 */
export function isRightfulString(text) {
  const regex = /^[A-Za-z0-9_-]+$/
  return regex.test(text)
}
/** 邮政编码 */
export function isZipCode(text) {
  const regex = /^[0-9]{6}$/
  return regex.test(text)
}
/** 匹配汉字*/
export function isChinese(text) {
  const regex = /^[\u4e00-\u9fa5]+$/
  return regex.test(text)
}
