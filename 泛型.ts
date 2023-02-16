//泛型函数
function fxFun<T>(num1:T[]):T{
 
    return num1[0]
}
let fx=fxFun([1,2])

//泛型接口
// interface CongifInit{
//     <T>(userName:T):T
// }
interface CongifInit<T>{
    (userName:T):T
}//泛型接口标准写法
//let userInfo:CongifInit=<T>(userName:T):T=>userName
//let userInfo:CongifInit=(userName)=>userName
let userInfo:CongifInit<string>=(userName)=>userName//泛型接口标准写法
userInfo("狗子")

//泛型类
class UserInfo<T>{
    userName:T
    id:T
    constructor(userName:T,id:T){
        this.userName=userName
        this.id=id
    }
}
let fxc=new UserInfo<string>("x","1")
fxc.userName="1"
fxc.id="123"

//泛型继承
interface LengthInit{
    length:number
}
function getn<T extends LengthInit>(req:T):T{
    console.log(`req.length:`, req.length);
    return req
}
getn("123")
getn([1])
getn({a:1,length:3})