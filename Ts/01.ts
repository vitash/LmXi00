const msg = '2';

interface C{    
    err:string;
    code?:number;
}
let a:C={err:''};

function fn1<T>(str:{err:string}){
   str.err= '111';
}
fn1(a)

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

// text-shadow: 2px 2px 5px white;
// axios.post('/api/forgotPassword',{email: 'vista.huang@selmit.com'})
// const VueCarousel = require('vue-carousel');
// \w 中文不能匹配 
const regEmail = /^[\w.-]{1,64}@([a-z0-9-]{1,200}\.){1,5}[a-z]{1,6}$/;
export function isEmail(email:string){
  return regEmail.test(email);
}
// console.log(isEmail('103@gcom'))

//clientWidth
//layerX
class Animal {
  protected feet: number = 3;
}














// -+.*
 
