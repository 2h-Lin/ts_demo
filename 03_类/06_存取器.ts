// 存取器：让我们可以有效的控制对对象中的成员的访问，通过getters和setters来进行操作
(() => {
  class Person{
    firstName: string
    lastName: string
    constructor(firstName: string, lastName: string) {
      this.firstName = firstName
      this.lastName = lastName
    }
    // 读取器
    get fullName() {
      return this.firstName + '_' + this.lastName
    }
    // 设置器
    set fullName(val) {
      let names = val.split('_')
      this.firstName = names[0]
      this.lastName = names[1]
    }
  }
  const person = new Person('owen','lin')
  console.log(person)
  person.fullName  = 'lin_zehui'
  console.log(person)
})()