const storage = {
  storageSet(key, value) {
    localStorage.setItem(key, JSON.stringify(value))
  },

  // 获取 localStorage
  storageGet(key) {
    const value = localStorage.getItem(key)
    return value ? JSON.parse(value) : null
  },

  // 移除 localStorage
  storageRemove(key) {
    localStorage.removeItem(key)
  },
}
export default storage