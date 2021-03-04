// 多个泛型参数的函数：函数中有多个泛型的参数
(() => {
  function getMsg<T, U>(value1: T, value2: U): [T, U] {
    return [value1, value2]
  }
  const arr = getMsg<string, number>('啊哈哈哈', 123213)
  console.log(arr[0].split(''), arr[1].toFixed(2))
  console.log(arr)
})()