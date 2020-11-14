

type Require<T> = {
  [P in keyof T]-?: T[P]
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
export function isEmail(email: string) {
  return regEmail.test(email);
}
// console.log(isEmail('103@gcom'))
function Proxy1() {
  let smb = Symbol("hasChange");
  let acc = { smb: false, a: false, b: 3 }
  let accP = new Proxy(acc, {
    set: (tar, p, v, r) => {
      accP.smb = true;
      return true;
    }
  })
  acc.a = true;
  console.log(acc)
  console.log(accP)
}
Proxy1()

function funA() {

  funB_();
}
function funB() {

  funA_();
}
function funA_() { /* .... */ }
function funB_() { /* .... */ }


class Input<T> {
  val?: T;
  constructor(private model: Model<T>) {

  }

  setValue(val?: T) {
    this.model.setValue_(val)
  }
  setValue_(val?: T) {
    this.val = val
  }
}

class Model<T> {
  val?: T;
  constructor(private input: Input<T>) {

  }

  setValue(val?: T) {
    this.input.setValue_(val)
  }
  setValue_(val?: T) {
    this.val = val
  }

}

class Acc {
  name = '';
  tel = '';
}

let ks = Object.keys(new Acc()) as (keyof Acc)[]

(a: Array<{ val: string }>) => {
  a.map(i => i.val === 's' ? i.val : '')
}


(arr1: Array<{ a: 1 } | { a: 1, b: 1 }>, arr2: { a: 1 }[] | { a: 1, b: 1 }[]) => {
  // arr1.map(x => x.)
  arr2.map(x => 1)
}

(f: F1 | F2) => {
  f({ a: 1, b: 1 })
}

type F1 = (a: { a: 1 }) => 0
type F2 = (a: { a: 1, b: 1 }) => 0
type Map1 =
  | (<U>(callbackfn: (value: { a: 1; }, index: number, array: { a: 1; }[]) => U, thisArg?: any) => U[])
  | (<U>(callbackfn: (value: { a: 1; b: 1; }, index: number, array: { a: 1; b: 1; }[]) => U, thisArg?: any) => U[])

// 
(map: Map1) => {
  map(1)
}
(a: HTMLInputElement) => {
  a.value
}
