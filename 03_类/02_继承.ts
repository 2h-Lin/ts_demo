// 继承：类与类之间的关系
// 继承后类与类的叫法：
// A类继承了B这个类，那么此时A类叫子类，B类叫基类
// 子类 ---> 衍生类
//  基类 ---> 超类（父类）
(() => {
  // 定义类
  class Person {
    name: string
    age: number
    gender: string
    constructor(name: string, age: number, gender: string) {
      this.name = name      
      this.age = age      
      this.gender = gender      
    }
    sayHi(str: string) {
      console.log(`我是${this.name}`,str)
    }
  }

  // Student 类继承 Person类
  class Student extends Person {
    constructor(name: string, age: number, gender: string) {
      // 调用父类中的构造函数，使用super
      super(name, age, gender)
    }

    sayHi() {
      console.log('我是学生类中的sayHi方法')
      // 调用父类的sayHi方法
      super.sayHi('哈哈')
    }
  }

  // 实例化Person
  const person = new Person('大明明', 80,'男')
  person.sayHi('哈哈哈哈2323')

  // 实例化Student
  const stu = new Student('小明明', 23, '女')
  stu.sayHi()
})()