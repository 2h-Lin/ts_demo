// readonly修饰符： 首先是一个关键字，对类中的属性成员进行修饰，修饰后，该属性成员就不能再外部被随意修改
// 构造函数中，可以对只读的属性成员的数据进行修改
// 如果构造函数中，没有任何的参数，类中的属性成员此时已经使用readonly进行修饰了，那么外部也是不能对这个属性值进行更改的
// 构造函数中的参数可以使用readonly进行修饰，一旦修饰了，那么该类中就有了这个只读的成员属性了，外部可以访问，但是不能修改
// 构造函数中的参数可以使用public及private和protected进行修饰，无论是哪个进行修饰，该类中都会自动的添加这么一个属性成员
(() => {
  // 定义一个类
  // class Person {
  //   // readonly name: string = 'owenLin' // 给初始值
  //   readonly name: string

  //   constructor(name: string) {
  //     this.name = name
  //   }
  //   sayHi() {
  //     console.log(this.name,'hahah')
  //     // 类中的普通方法中，也不能修改readonly修饰的成员属性值
  //     // this.name = 'lin'
  //   }
  // }

  // const person = new Person('owen')
  // person.sayHi()
  // // 类中属性添加了readonly, 外部属性无法修改
  // // person.name = 'owenLin'
  // console.log(person.name)


   // 定义一个类
   class Person {
     // 构造函数中的name参数，一旦使用readonly进行修饰后，那么该name参数可以叫参数属性（即class 里面可以不定义name）
     // 构造函数中的name参数，一旦使用readonly进行修饰后，那么类中就有了一个name属性
     // 构造函数中的name参数，一旦使用readonly进行修饰后，外部也是无法修改类中的name属性成员值的
    constructor(readonly name: string) {
      this.name = name
    }
  }
  const person = new Person('owen')
  // 类中属性添加了readonly, 外部属性无法修改
  // person.name = 'owenLin'
  console.log(person.name)
})()