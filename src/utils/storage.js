export default {
  /**
   * 获取本地存储
   * @param {*} key
   */
  get(key) {
    if (!key || typeof (key) !== 'string') {
      return null
    }
    const result = localStorage.getItem(key) || '{}'
    const oResult = JSON.parse(result)
    if (oResult.expire > 0 && Date.now() > oResult.expire) {
      return null
    }
    return oResult.value
  },
  /**
   * 设置本地存储
   * @param {存储key} key
   * @param {存储值} value
   * @param {过期时间} expire
   */
  set(key, value = '', expire = 0) {
    if (!key || typeof (key) !== 'string') {
      return false
    }
    expire = expire > 0 ? (Date.now() + expire) : 0
    const data = {
      value: value,
      expire: expire
    }
    localStorage.setItem(key, JSON.stringify(data))
  },
  /**
   * 移除本地存储
   * @param {*} key
   */
  remove(key) {
    if (!key) {
      return false
    }
    localStorage.removeItem(key)
  }
}
