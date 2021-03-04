(() => {

  // //js 函数写法：
  // // 函数声明，命名函数
  // function add(x, y) {
  //   return x + y
  // }

  // // 函数表达式，匿名函数
  // const add2 = function(x, y) {
  //   return x + y
  // }

  // ts 函数写法：
  // 函数声明，命名函数
  function add(x: string, y: string): string {
    return x + y
  }

  const result:string = add('23', '45')
  console.log(result)

  // 函数表达式，匿名函数
  const add2 = function(x: number, y: number): number {
    return x + y
  }
  console.log(add2(10, 20))

  // 函数完整写法
  const add3: (x: number, y: number) => number = function(x: number, y: number): number {
    return x + y
  }
  console.log(add3(100, 20))
})()