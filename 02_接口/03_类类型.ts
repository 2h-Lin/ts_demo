// 类类型： 类的类型，类的类型可以通过接口来实现
(() => {
interface IFly {
  // 该方法没有任何的实现（方法中什么都没有）
  fly()
}

// 定义一个类，这个类的类型就是上面定义的接口
class Person implements IFly{
  fly() {
    console.log('i can fly')
  }
}

// 实例化对象
const person = new Person()
person.fly()

console.log('========================')

interface ISwim {
  swim()
}
//定义一个类，这个类的类型就素IFly和ISwim
class Person2 implements IFly,ISwim {
  fly() {
    console.log('this is fly methods')
  }
  swim() {
    console.log('this is swim methods')
  }
}

const person2 = new Person2()
person2.fly()
person2.swim()

console.log('========================')

//定义一个接口，继承其他多个接口
interface IFlyAndSwim extends IFly,ISwim{}

// 定义一个类，直接实现IFlyAndSwim这个接口
class Person3 implements IFlyAndSwim {
  fly() {
    console.log('this is fly methods3')
  }
  swim() {
    console.log('this is swim methods3')
  }
}
const person3 = new Person3()
person3.fly()
person3.swim()
})()