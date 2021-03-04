// 函数重载：函数名字相同，函数的参数及个数不同
(() => {
  // 需求: 我们有一个add函数，它可以接收2个string类型的参数进行拼接，也可以接收2个number类型的参数进行相加

  function add(x: string, y: string): string
  function add(x: number, y: number): number

  // 函数声明
  function add(x: string | number, y: string | number): string | number {
    if(typeof x === 'string' && typeof y === 'string') {
      return x + y // 字符串拼接
    }else if(typeof x === 'number' && typeof y === 'number'){
      return x + y // 数字相加
    }
  }

  console.log(add('owen','lin'))
  console.log(add(100,20))
  
  // 此时如果传入非法数据，ts应该给我们错误提示，所以使用函数重载声明，校验传入的数据是否合法
  // console.log(add('owen',20))
  // console.log(add(200,'lin'))

})