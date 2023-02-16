"use strict";
//泛型函数
function fxFun(num1) {
    return num1[0];
}
let fx = fxFun([1, 2]);
//let userInfo:CongifInit=<T>(userName:T):T=>userName
//let userInfo:CongifInit=(userName)=>userName
let userInfo = (userName) => userName; //泛型接口标准写法
userInfo("狗子");
//泛型类
class UserInfo {
    constructor(userName, id) {
        this.userName = userName;
        this.id = id;
    }
}
let fxc = new UserInfo("x", "1");
fxc.userName = "1";
fxc.id = "123";
function getn(req) {
    console.log(`req.length:`, req.length);
    return req;
}
getn("123");
getn([1]);
getn({ a: 1, length: 3 });
