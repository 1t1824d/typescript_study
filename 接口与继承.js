"use strict";
let ob = {
    username: "狗子",
    usercode: 123456,
    id: "x11x2",
    sayHi: () => { console.log(`我是saiHi函数`); },
    isvip: true,
    viptype: 123
};
ob.username = "二狗子";
ob.usercode = 654321;
ob.vip = true;
ob.newreq = 1;
ob.sayHi();
console.log("ob:", ob);
