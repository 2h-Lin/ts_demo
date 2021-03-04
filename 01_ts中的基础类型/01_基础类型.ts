(() => {
  // 基础类型
  
  // 布尔类型
  let flag: boolean = true
  console.log(flag)

  // 数字类型
  let num1: number = 10
  console.log(num1)

  // 字符串类型
  let str: string = '哈哈哈这是字符串'
  console.log(str)

  console.log('===========================')
  
  // null 和 undefined 
  let und: undefined = undefined
  let nll: null = null
  console.log(und)
  console.log(nll)
   
  //undefined 和 null是所有类型的子类型。也就是说undefined类型的变量，可以赋值给 number 类型的变量：
  // let num2: number = undefined
  // console.log(num2)

  console.log('===========================')

  // 数组类型
  // 数组定义方式1： let 变量名 ：数据类型[] = [值1，值2，值3]
  let arr1: number[] = [10, 20, 30, 40, 50]
  console.log(arr1)
  // 数组定义方式2(泛型)：let 变量名：Array<数据类型> = [值1，值2，值3]
  let arr2: Array<number> = [100, 200, 300]
  console.log(arr2)

  // 元祖类型
  let arr3: [string, number, boolean] = ['owen', 23, true]
  console.log(arr3)
  console.log(arr3[0].split(''))
  console.log(arr3[1].toFixed(2))

  console.log('===========================')

  // 枚举类型
  enum Color {
    red,
    green = 200,
    yellow
  }
  let color: Color = Color.red
  console.log(color)
  console.log(Color.green, Color.yellow )

  console.log('===========================')

  //any 类型
  let str2: any = 100
  str = 'any类型'
  console.log(str2)

  let arr: any[] = [100, 'any类型数组', true]
  console.log(arr)

  console.log('===========================')

  // void类型
  function showMsg():void{
    console.log('this is void type!')
  }
  console.log(showMsg())

  console.log('===========================')

  // object类型
  // 定义一个函数，参数是Object类型，返回值也是object类型
  function getObj(obj: object): object {
     console.log(obj)
     return {
       name: 'owen',
       age: 24
     }
  }
  console.log(getObj({name: 'linzehui',sex:'男'}))

  console.log('===========================')

  // 联合类型，表示取值可以为多种类型中的一种
  function getString(str: string|number): string {
    return str.toString()
  }
  console.log(getString('哈哈'))

  // 类型断言：告诉编译器我自己知道是什么类型
  // 语法1：<类型>变量名
  // 语法2：值 as 类型
  function getNumOrStrLength(str: number | string):number {
    if((str as string).length) {
      return (<string>str).length
    }else {
      return str.toString().length
    }
  }
  console.log(getNumOrStrLength('2334'))

  // 类型推断：没有明确指定类型，ts会自己推断类型
  let txt // any类型
  txt = '2323'
  txt= 199
  console.log(txt)

})()