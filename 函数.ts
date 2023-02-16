//function
// let fun:Function=(a:number,b:number):void=>{
//     a+b
// }
let fun: Function = (a: number, b: number, c?: string): void => {
    let ab = a + b
    console.log(`我是函数fun:${ab},${c}`);
}
fun(1, 2, "我是可选参数，我要在所有必选参数的后面！")
//剩余参数
let getnum: Function = (num1: number, num2: number, ...nums: number[]): number => {
    let count = num1 +num2
    console.log(`count:${nums}`)
    nums.forEach(ele=>{
        count=getnum(count,ele)
    })
    return count
}
console.log(`getnum:${getnum(1,2,3,4,5,6)}`);