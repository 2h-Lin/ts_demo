// 静态成员：在类中通过static修饰的属性或者方法，那么就是静态的属性及静态的方法，也称之为：静态成员
// 静态成员在使用的时候是通过类名.的这种语法来调用的
(() => {
  // 定义类
  class Person {
    // static修饰，即静态属性
    // 类中默认有一个内置的name属性，
    static name1: string = 'owen'
    // 构造函数不能通过static来进行修饰的
    constructor(name: string) {
      // 此时this是实例对象，name1是静态属性，不能通过实例对象直接条约静态属性来使用
      // this.name1 = name
      Person.name1 = name
    }
    // 静态方法
    static sayHi() {
      console.log('23哈哈')
    }
  }
  // const person: Person = new Person('owen')
  // console.log(person.name1)
  // person.sayHi()

  // 通过类名.静态属性来访问该成员数据
  console.log(Person.name1)
  // 通过类名.静态属性来设置该成员数据
  Person.name1 = 'linzehui'
  console.log(Person.name1)
  Person.sayHi()
})()