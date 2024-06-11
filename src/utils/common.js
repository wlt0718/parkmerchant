const getParameterByName = () => {
  let obj = {},
    idx = location.hash.indexOf('?'),
    search = location.hash.slice(idx + 1)
  if(idx !== -1){
    const searchList = search.split('&')
    for(let i of searchList){
      let arr = i.split('=')
      obj[arr[0]] = arr[1]
    }
  }
  return obj
}
export {
  getParameterByName
}