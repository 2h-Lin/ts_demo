// 类中的成员修饰符：主要是描述类中的成员（属性，构造函数，方法）的可访问性
// 类中的成员都有自己的默认的访问修饰符
// public修饰符：类中成员默认的修饰符，代表的是公共的，任何位置都可以访问类中的成员
// private修饰符：类中的成员如果使用private来修饰，外部无法访问这个成员数据,子类也无法访问该数据
// protected修饰符：类中的成员如果使用protected来修饰，那么外部是无法访问这个成员数据的，但是子类可以访问该数据
(() => {
  // 定义一个类
  class Person{
    // 定义属性
    // public name: string
    // private name: string
    protected name: string
    // 定义构造含税
    public constructor(name: string) {
      this.name = name
    }
    //定义方法
    eat() {
      console.log(`${this.name}真好吃`)
    }
  }

  class Student extends Person {
    constructor(name: string) {
      super(name)
    }
    play() {
      console.log('我喜欢玩游戏', this.name)
    }
  }
  const person = new Person('馄饨')
  person.eat()
  // console.log(person.name)
  const stu = new Student('果冻')
  stu.play()
  // console.log(stu.name)
})()