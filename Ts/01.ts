

type Require<T> = {
    [P in keyof T]-?: T[P];
};

let re = /[\-\.\w]+@[\-\.\w]+/;
//@(163.com|qq.com|42du.cn)
`asas.huang@zsdas.com
ss123_-@
ss123_-@12
ss123_-@qq.com
1_@qq.com
`
//(institution|course|profile)\/(\d+)
//http://127.0.0.1:8080/#/Start/course/437
//http://127.0.0.1:8080/#/Start/institution/3

// \w 中文不能匹配 
const regEmail = /^[\w.-]{1,64}@([a-z0-9-]{1,200}\.){1,5}[a-z]{1,6}$/;
export function isEmail(email:string){
  return regEmail.test(email);
}
// console.log(isEmail('103@gcom'))



http://localhost:7003/api/m/redpackevent/GetRedpackEventSummary/9











// -+.*
 
