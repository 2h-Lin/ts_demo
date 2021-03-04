// 接口: 描述对象的类型
(() => {
  // 需求: 创建人的对象, 需要对人的属性进行一定的约束
  // id是number类型, 必须有, 只读的
  // name是string类型, 必须有
  // age是number类型, 必须有
  // sex是string类型, 可以没有

  interface Person {
    readonly id: number,
    name: string,
    age: number,
    sex?: string
  }
  const owenInfo: Person = {
    id: 1,
    name: 'owen',
    age: 24,
    // sex: '男'
  }
  console.log(owenInfo)
  owenInfo.sex = '男'
  console.log(owenInfo)
})()