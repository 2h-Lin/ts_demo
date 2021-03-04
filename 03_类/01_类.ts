// 类：可以理解为模板，通过模板可以实例化对象
(()=> {
 class Person {
   name: string
   age: number
   gender: string
   // 定义构造函数：为了将来实例化对象的时候，可以直接对属性的值进行初始化
   constructor(name: string = 'owen', age: number = 24, gender: string = '男') {
     this.name = name
     this.age = age
     this.gender = gender
   }
   // 定义实例方法
   sayHi(str: string) {
     console.log(str, `大家好，我叫${this.name},今年${this.age}岁，是个${this.gender}孩子!` )
   }
 }
 const person = new Person('owenLin', 25, '男')
 person.sayHi('你叫啥')
})()