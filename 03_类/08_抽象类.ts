// 抽象类：包含抽象方法（抽象方法一般没有任何具体的内容实现），也可以包含实例方法，抽象类是不能被实例化，为了让子类进行实例化及实现内部的抽象方法
// 抽象类的目的或者是作用最终都是为子类服务的
(() => {
  // 定义抽象类
  abstract class Animal{
    // 抽象方法
    abstract eat()

    // 实例方法
    sayHi() {
      console.log('hello')
    }
  }

  class Dog extends Animal {
    // 重新实现抽象类中的方法，此时这个方法就是当前dog类的实例方法
    eat() {
      console.log('狗狗吃')
    }
  }
  const dog: Dog = new Dog()
  dog.eat()

  // 不能实例化抽象类
  // const ani: Animal = new Animal()
})()