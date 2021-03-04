// 剩余参数（rest参数）
// 剩余参数是放在函数声明的时候所有的参数的最后
(() => {
  function showMsg(str: string, str2?: string, ...args: string[]) {
    console.log(str)
    // console.log(str2)
    console.log(args)
  }
  showMsg('a', 'b', 'c', 'd', 'e')
})()