// 泛型：在定义函数、接口、类的时候不能预先确定要使用的数据的类型，而是在使用函数、接口、类的时候才能确定数据的类型
(() => {
  function getArr<T>(value: T, count: number): T[] {
    // 根据数据和数量产生一个数组
    const arr: T[] = []
    for(let i = 0; i < count; i++) {
      arr.push(value)
    }
    return arr
  }
  const arr1 = getArr<number>(100.123, 3)
  const arr2 = getArr<string>('asdasd', 3)
  console.log(arr1)
  console.log(arr2)
  console.log(arr1[0].toFixed(2))
  console.log(arr2[1].split(''))
})()