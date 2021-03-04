(()=> {
 // 函数类型： 通过接口的方式作为函数的类型来使用

 // 定义一个接口，用来作为某个函数的类型使用
 interface ISeachFunc{
   (source:string,subString:string):boolean
 }
 // 定义一个函数，该函数就素上面定义的接口
 const searchString:ISeachFunc = function (source: string, subString: string): boolean {
  // 在source字符串中查找subString这个字符串 
  return source.search(subString) > -1
 }
 // 也可以这样写
//  const searchString: (source: string, subString: string) => boolean = function (source: string, subString: string): boolean {
//     return source.search(subString) > -1
//  }
 console.log(searchString('这是',''))
})()