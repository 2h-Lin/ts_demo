// 可选参数：函数在声明的时候，内部使用使用了？进行修饰，那么久标识该参数可以参入也可以不传入
// 默认参数：函数在声明的时候，内部的参数有自己的默认值，此时的这个参数就可以叫默认参数
(() => {
  const getFullName = function(firstName: string = 'owen', lastName?: string): string {
    if(lastName) {
      return firstName + '_' + lastName
    }else {
      return firstName
    }
  }
})()