class Person{
    name:string
    age:number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
}
class Man extends Person{
    nice:boolean
    constructor(name:string,age:number,nice:boolean){
        super(name,age)
        this.nice=nice
        console.log(`子类中的---name:${name},age:${age},nice:${nice}`)
    }
}
let manp=new Man("狗子",16,true)