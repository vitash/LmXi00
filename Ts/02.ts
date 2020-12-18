class Book {
  name: string = "";
  price: number = 0;
}
class User {
  name: string = ""
  UgRi: Date = new Date;
}

(obj: Book | User) => {
  obj.name;
  if (obj.price) {

  }
}

console.time("for")
console.timeEnd("for")

type YouTube = { YouTubeUrl: '', YouTubeTitle: '1' | 2 | 3 | "f", YouTubedescription: '' };
(obj: YouTube) => {
  obj.YouTubeTitle = 2;
}

() => {
  let MyObject = {
    'a': 'Hello' as const,
  };
  for (let i of MyObject) {

  }

}
() => {
  let matches = document.querySelectorAll(".sub-col");
  matches.values()
  for (let p of matches) {

  }
}

enum Weekday {
  Monday,
  Tuseday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}

namespace Weekday {
  export function Fn11() {
    return 10;
  }
}

class CA {
  AA: number = 1;
}
interface CA {
  BB: number;
  Fn11: () => string;
}
interface CB {
  BB: number;
}
(obj: CA, obj2: CB) => {
  obj.AA = obj.BB;
  obj.Fn11();
  obj.Fn11 = () => 33 + "dd";
  obj.toString();
  obj2.toString();    // 不管是 interface 还是 class，都支持 Object 原型链的方法
}

() => {
  let d = new Date();
  let d2 = Date();
  "".big()
  String.prototype.endsWith = function (this: string, suffix: string): boolean {
    const str: string = this;
    return !!str && str.indexOf(suffix, str.length - suffix.length) !== -1;
  };


}


export { };
declare global {
  interface String {
    endsWith2(suffix: string): boolean;
  }
}
"".endsWith2

function padding(all: number): any;
function padding(topAndBottom: number, leftAndRight: number): any;
function padding(top: number, right: number, bottom: number, left?: number): any;
// Actual implementation that is a true representation of all the cases the function body needs to handle
function padding(a: number, b?: number, c?: number, d?: number) {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }
  return {
    top: a,
    right: b,
    bottom: c,
    left: d
  };
}

function padding2(all: number): { top: number };
function padding2(a: number, b?: number, c?: number, d?: number): { top: number } {
  if (b === undefined && c === undefined && d === undefined) {
    b = c = d = a;
  } else if (c === undefined && d === undefined) {
    c = a;
    d = b;
  }
  return { top: a };
}

let b = padding(2, 1, 2);

function Fn122(str: string): number;
function Fn122(num: number): string;
function Fn122(arg: string | number): string | number {
  if (typeof arg == 'string') {
    return 1;
  } else {
    return "22"
  }
}

{
  interface Overloaded {
    (foo: string): string;
    (foo: number): number;
  }
  // type TMap<T extends [], R extends []> = [K in (keyof T)]: R[] // 妈蛋，没解出来
  function stringOrNumber(foo: string | number): string | number {
    if (typeof foo === 'number') {
      return foo * foo;
    } else {
      return `hello ${foo}`;
    }
  }
  let fn: Overloaded = stringOrNumber;
  fn(33);
}

{
  interface state {
    name: string,
    password: string,
    onFocus: boolean,
  }

  function setText<T extends keyof state>(key: T, values: state[T]) {
    setState({ [key]: values });
  }

  setText("name", "sss");
  setText("onFocus", true);
  setText("name2", "sss");
  setText("onFocus", "true");


  function setState(obj: Partial<state>) {

  }

  function setText2(key: "name" | "password", text: string) {
    setState({ [key]: text });
  }

  setState({ "name": "sss", "password": "sss" });

  const updateState = <T extends string>(key: keyof state, value: T) =>
    (prevState: state): state => ({
      ...prevState,
      [key]: value
    })



  let key = '';
  let text = ''
  let obj = { state: { [key]: text } };

}
{
  type apiName = "A" | "B";

  function apiGet(url: apiName) { }
  let c: string[] = ['3', 'c'];
  let d: [string, number] = ['33', 4];


}
{
  interface state {
    name: string,
    password: string,
    onFocus: boolean,
    smb: Symbol;
  }
  type Weekday = 'Mon' | 'Tue' | 'Wed' | 'Thu' | 'Fri';
  type Day = Weekday | 'Sat' | 'Sun';
  let nextDay: Record<state, Weekday> = {
    Mon: { name: '', password: '', onFocus: false },
    Tue: { name: '', password: '', onFocus: false },
  };

  (t: Extract<Day, 'Mon' | 'Sun'>) => { }
  (t: Extract<1 | 2 | 'a' | 'b' | 'c', string>) => { }

  type Arrayish<T> = {
    length: number;
    [x: number]: T;
  }

  type k1 = (("name") & "onFocus");
  type s1 = (keyof state) & ("name" | "onFocus");
  type p1 = state[s1];

  ((k1: k1) => {
    // k1 推到出来的类型和string 一样，但是却不能赋值
    // 可能是类型没有算对？或者目前没有支持
    let a = k1.length;
  })("ss")

  type Pick2<T, K extends keyof T> = {
    [P in K]: T[K]     // 每个 K 类型的 T[K] 类型的所有可能类型，看下面的例子
  }
  (t: Pick2<state, "name" | "smb">) => {
    let b = t.name;    // b: string | Symbol
  }

}
{
  function logName(something: { name: string }) {
    console.log(something.name);
  }

  logName({ name: 'matt' }); // ok
  logName({ name: 'matt', job: 'being awesome' });
  let b = { name: 'matt', job: 'being awesome' };
  logName(b);


  function logName2(something: { name?: string }) {
    console.log(something.name);
  }

  logName2({ name: '33', a: 2 });   //
  logName2({ neme: '33' });   // 对象字面量检查

  let x: { foo: number, [x: string]: string | number };
  x = { foo: 1, baz: 2 }; // ok, 'baz' 属性匹配于索引签名
}
{
  function test<T extends {}>(params: T) {
    return params.toString(); // ok 
  }
  test(3);
  3..toString()

  interface Test { pos: 'left' | 'right' | 'top' | 'bottom' }
  function func() {
    return { pos: 'left' as 'left' }
  }
  let b: Test = func();

  let fn1 = (a: 3 | 4 | 5 | "2") => {
  }
  let b2: 3 | 4 | 5 | "2";
  b2 = "2";
  b2.length;
  b2 = 3;
  b2.toFixed();

  let obj = {
    x: 10,
    y: ['hello', 2],
    z: {
      a: { b: 'top' }
    }
  } as const;
  obj.x = 3;
  obj.z.a.b = "ss";
}

{
  // 仅仅是一个 interface
  interface Foo {
    foo: number;
    common: string;
  }

  interface Bar {
    bar: number;
    common: string;
  }

  // 用户自己定义的类型保护！
  function isFoo(arg: Foo | Bar): arg is Foo {

    return (arg as Foo).foo !== undefined;
    return false;   // 这个函数返回值居然没有检查
  }

  // 用户自己定义的类型保护使用用例：
  function doStuff(arg: Foo | Bar) {
    if (isFoo(arg)) {
      console.log(arg.foo); // ok
      console.log(arg.bar); // Error
    } else {
      console.log(arg.foo); // Error
      console.log(arg.bar); // ok
    }
  }
  function fn1(arg: Foo & Bar) {

  }
}
{
  type T1 = [number, string]
  type T2 = T1 extends any[] ? 1 : 2;

  let t!: [number, string, boolean?, string?];
  let l = t.length;   // l type 2 | 3 | 4
  if (t.length === 6) {

  }

  function fn1(a1: [number, string, number, ...string[]]) {
    a1[0] = 3;
    a1[1] = 3;
    a1[2] = 3;
    a1[3] = '3';
  }

}
{
  const enum Enum { A, B, C }

  const enumToStringMap = {
    [Enum.A]: "Name A",
    [Enum.B]: "Name B",
    [Enum.C]: "Name C",
    [3]: "33"
  }

  const sym1 = Symbol("2");
  const sym2 = Symbol("23");
  const sym3 = Symbol("2");

  const symbolToNumberMap = {
    [sym1]: 1,
    [sym2]: 2,
    [sym3]: 3
  };

  type KE = keyof typeof enumToStringMap;     // Enum (i.e. Enum.A | Enum.B | Enum.C)
  type KS = keyof typeof symbolToNumberMap;   // typeof sym1 | typeof sym2 | typeof sym3

  function getValue<T, K extends keyof T>(obj: T, key: K): T[K] {
    return obj[key];
  }

  let x1 = getValue(enumToStringMap, Enum.C);  // Returns "Name C"
  let x2 = getValue(symbolToNumberMap, sym3);  // Returns 3


}

const sym22 = Symbol("22")
interface Book {
  name: string;
  price: number;
  isOk: boolean;

  1: number;
  2: string;
  [sym22]: number;

  updatePart(newName: string): void;
  fn2(newName: string): void;
}
interface User {
  name: string;
  age: number;
}


{
  ((key: keyof Book) => { })("isOk");
  function useKey<T, K extends keyof T>(o: T, k: K) {
    var name: string = k;  // 错误：keyof T不能赋值给字符串
  }
  function useKey2<T, K extends Extract<keyof T, string>>(o: T, k: K) {
    var name: string = k;
  }
  type bookKey = keyof Book;
  type strKey = Extract<keyof Book, string>;
  type k1 = "s" | "s" | "a" | never | void;

  let a!: string["length"];
  let a2: string[number];     // "sss"[0]   还是字符串
  let b = a[1];
  type k2 = Book[1 | 2];
  let a3: any[] = "sss";

  type FunctionPropertyNames<T> = { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
  type fnBook = FunctionPropertyNames<Book>;
  type k3 = Book[1 | 2 | "fn2"] | never;      // 分布式条件 ==  Book[1] | Book[2] | Book["fn2"]

  type fnPropNames<T> = keyof T extends (T[infer K] extends Function ? K : never) ? K : never;
  type s = fnPropNames<Book>
}
{
  // 协变
  type Foo<T> = T extends { a: infer U, b: infer U } ? U : never;
  type Foo2<T> = T extends { a: infer U1, b: infer U } ? U1 | U : never;
  type T10 = Foo<{ a: string, b: string }>;  // string
  type T11 = Foo<{ a: string, b: number }>;  // string | number

  // 逆变
  type Bar<T> = T extends { a: (x: infer U) => void, b: (x: infer U) => void } ? U : never;
  type T20 = Bar<{ a: (x: string) => void, b: (x: string) => void }>;  // string
  type T21 = Bar<{ a: (x: string) => void, b: (x: number) => void }>;  // string & number

  type Bar2<T> = T extends { a: (x: infer U) => infer R, b: (x: infer U) => infer R } ? R : never;
  type T22 = Bar2<{ a: (x: string) => string, b: (x: number) => number }>;

  type F1 = (a: any, b: any, c: any) => number;
  type F2 = (a: any, b: any) => number;
  let f1: F1 = (a, b) => 1;

  function Fn10(f: (a: number, b: number, c: number) => number) {
    let b = f(3, 4, 5);
  };
  Fn10((a, b) => a + b);
  Fn10((a,) => 1 + a);
}
{
  function foo(x: string): number;
  function foo(x: number): string;
  function foo(x: string | number): string | number {
    if (typeof x == "string") {
      return +x + 2;
    } else {
      return "22" + x;
    }
  };
  type T30 = ReturnType<typeof foo>;  // string | number  ?? 好像出了问题

  type T04 = NonNullable<string | number | undefined>;

  let b1: boolean;
  let obj = b1 ? { value: 42 } : {};    // TS 2.7 之前返回的类型是两者的最佳超类 {}，对于这种类型并没有多大用处
  let obj2 = b1 ? { value: 42 } : { value: "33", a: 33 };
  let p1 = obj2.a;      // 竟然没有 undefined 类型了
  let p2 = obj2.value;
}
{
  function fn1<T extends 2 | 3 | 4, Data = 3 | 4>(a1: T, a2: Data) {

  }
  fn1<3 | 4>(3, 4);
  fn1<3 | 4, 5 | 6>(3, 6);

  function fn2(arr: { name: string, age: number }[]) {
    arr[1].name = "33";
  }

  let a1: ReadonlyArray<number> = [1, 2, 3];
  a1.push(1);
  a1[2] = 3;
  a1.length = 4;

  type T1 = { readonly bar: number };
  const foo: T1 = { bar: 123 };
  type T2 = { bar: number };
  function iMutateFoo(foo: T2) {
    foo.bar = 456;
  }
  iMutateFoo(foo);
}
{
  type Exclude2<T, K extends T> = T extends K ? never : T;
  type B1 = Exclude2<keyof Book, 1>;
  type Omit2<T, K extends keyof T> = { [P in Exclude2<keyof T, K>]: T[P] }
  type t = Omit<Book, 1 | 2>    // 第二个类型参数，没有约束为第一个类型
  type t2 = Omit2<Book, 1 | 2>
  type t3 = Omit2<Book, Extract<keyof Book, number>>
  type t4 = Omit2<Book, 1 | 2 | 3>
  type t5 = Omit2<Book, Extract<1 | 2 | 3, keyof Book>>

  type K1<T> = keyof T;
  type BK1 = K1<3>;
  type numK = keyof 3;

  //type ReturnType2<T extends (...arg:any[]) => any> = 
}

type UnionToIntersection<U> = (U extends any ? (a: U) => any : never) extends (a: infer A) => any ? A : never;
declare function mergeEnums<T extends any[]>(...arg: T): UnionToIntersection<T[number]>; // 未理解
{
  // 枚举类型 合并
  enum A { a1, a2 }
  enum B { b }
  const x = mergeEnums(A, B);
  const xa = x.a1;   // 暂时不明白，UnionToIntersection<T[number]> 添加了 T[number] 就可以访问到 a 和 b，如果缺失，会有 [0],[1],[symbol]
  const xb = x.b;
  const xb2 = B.b;

  type T1 = keyof typeof A | keyof typeof B;
  type T2 = keyof typeof A;
  type T21 = typeof A;
  type T3 = typeof A[keyof typeof A];
  type T4 = A | B;
  let c: T4 = B.b;
  let c2: T4 = A.a1;
  let c3: T4 = 0;

}
{
  type K1 = 1 | 2 | 3;
  type T1 = { [K in K1]: number };
  let obj1: T1 = { 3: 1, "2": 2, }
  let s1: Array<string>;

  // string 类型的索引签名比 number 类型的索引签名更严格。这是故意设计，它允许你有如下类型：
  interface ArrStr {
    [key: string]: string | number; // 必须包括所用成员类型
    [index: number]: string; // 字符串索引类型的子级

    // example
    length: number;
  }

  type FieldState = {
    value: string;
  };
  type FormState = { isValid: boolean } & { [fieldName: string]: FieldState };
  (a: FormState) => {
    a["dd"] = { value: "" };
    a.isValid = false;

  }
  type K2 = User & Book;
  (a: K2) => {
  }

  type ObjectDescriptor<D, M> = {
    data: D;
    methods: M & ThisType<D & M>; // Type of 'this' in methods is D & M
  };
  function fn1<D, M>(obj: ObjectDescriptor<D, M>) { }
  fn1({
    data: { x: 30, y: 40 },
    methods: {
      z: 33,
      move: function () {
        return this.x + this.y + this.z   // 这个推算 this，懵逼了
      }
    }
  })

  //fn1.bind

  let obj2 = {
    data: { x: 30, y: 40 },
    methods: {
      move: () => {
        return this.x + this.y
      }
    }
  };

  (obj: ThisType<Book>) => {
    obj.name = 10;
  }
  interface ThisType2<T> { }
  let obj3: ThisType2<Book> = {
    name22: "dd",
    fn11: function () {
      this.name = "";           // 这特么的，是不是TS 增强支持 ThisType<T> 的
      this.price = 20;
    }
  }

}
{
  interface Module {
    count: number;
    message: string;
    asyncMethod<T, U>(input: Promise<T>): Promise<Action<U>>;
    syncMethod<T, U>(action: Action<T>): Action<U>;
  }
  interface Action<T> {
    payload?: T;
    type: string;
  }
  type Result = {
    asyncMethod<T, U>(input: T): Action<U>;
    syncMethod<T, U>(action: T): Action<U>;
  }

  type FnNames<T> = { [P in keyof T]: T[P] extends Function ? P : never }[keyof T];
  type ObjFn<T> = { [P in FnNames<T>]: T[P] }
  type Fn1 = FnNames<Module>
  type ObjFn1 = ObjFn<Module>

  type Result1<M> = { [P in keyof ObjFn<M>]:
    M[P] extends <T, U>(input: Promise<T>) => Promise<Action<U>> ? <T, U>(input: T) => Action<U> :
    M[P] extends <T, U>(action: Action<T>) => Action<U> ? <T, U>(action: T) => Action<U> :
    M[P] }

  type Module1 = Result1<Module>

}
{

  function createArray<T extends string>(length: number, str: T): Array<T> {
    let result = [];
    for (let i = 0; i < length; i++) {
      result[i] = str;
    }
    return result;
  }
  createArray(3, "dddd");
}
{
  type Value = string | MultiValue;
  interface MultiValue extends Array<Value> { };

  type Example<T extends string> = ({
    'a': 'apple',
    'b': 'banana',
    'c': 'cat',
    'd': 'dog'
  } & Record<string, string>)[T];

  type ToString<T> = T extends string ? T : string;

  type MakeExample<T extends Value> = T extends string ? Example<T> :
    Example<ToString<T[number]>>[];

  let x: MakeExample<'a'>;    // "apple"
  let y: MakeExample<['b']>;  // "banana"[]

  x = 'banana';   // error
  x = 'apple';    // right

  y = 'banana';   // error
  y = ['banana']; // right


  type T11 = {
    'a': 'apple',
    'b': 'banana',
    'c': 'cat',
    'd': 'dog'
  } & Record<string, string>

  function fn1(obj: T11) {
    obj.a = 'apple';
  }
}
{
  type T11<T> = T extends any ? 1 : 2;
  type T111 = T11<never>;   // 无法推导出条件类型

  type And1<T> = (T extends any ? (a: T) => void : never) extends (a: infer I) => void ? I : never;
  type And2<T> = (a: T) => void extends (a: infer I) => void ? I : never;
  type AB = And1<1 | 2>

  type UnionToTuple1<Union> = Union extends infer A | infer B ? [A, B] : never;
  type tuple = UnionToTuple1<'a' | 'b'>; // [{}, {}]

  type T21<T> = T extends infer A | infer B ? A & B : never;
  type T211<T> = T extends infer A | infer B ? Exclude<A, B> : never;
  type T22 = T21<'a'>;  // 'a' extends infer 'a' | infer 'a' ? 'a' & 'a' : never;  //  'a' & 'a' == 'a'
  type T23 = 'A' & 'B' & 'B' & never

  type T31<T> = (T extends any ? T : never) extends infer A | infer B ? [A, B] : never;
  type T322 = T31<'a' | 'b'>;

  type T41 = ((x: number) => void) & ((x: string) => void);
  type T42 = {
    (x: number): void
    (x: string): void
  }
  function f1(fn: T41, obj1: T42, ns: Book & User) {
    fn(3)
    obj1 = fn;  // 这两个是相等的
    fn = obj1;
  }

  type UnionToIoF<U> = (U extends any ? (x: (a: U) => void) => void : never) extends (x: infer A) => void ? A : never
  type intersection = UnionToIoF<'a' | 'b'>; // ((x: "a") => void) & ((x: "b") => void)


}
{
  // union to intersection of functions
  type UnionToIoF<U> =
    (U extends any ? (k: (x: U) => void) => void : never) extends
    ((k: infer I) => void) ? I : never

  // return last element from Union
  type UnionPop<U> = UnionToIoF<U> extends { (a: infer A): void; } ? A : never;

  // prepend an element to a tuple.
  type Prepend<U, T extends any[]> =
    ((a: U, ...r: T) => void) extends (...r: infer R) => void ? R : never;

  type UnionToTupleRecursively<Union, Result extends any[]> = {
    1: Result;
    0: UnionToTupleRecursively_<Union, UnionPop<Union>, Result>;
    // 0: UnionToTupleRecursively<Exclude<Union, UnionPop<Union>>, Prepend<UnionPop<Union>, Result>>
  }[[Union] extends [never] ? 1 : 0];

  type UnionToTupleRecursively_<Union, Element, Result extends any[]> =
    UnionToTupleRecursively<Exclude<Union, Element>, Prepend<Element, Result>>;

  type UnionToTuple<U> = UnionToTupleRecursively<U, []>;

  // support union size of 43 at most
  type Union43 = 0 | 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 |
    10 | 11 | 12 | 13 | 14 | 15 | 16 | 17 | 18 | 19
  type Tuple = UnionToTuple<Union43>;
}
{
  type FnNames<T> = { [P in keyof T]: T[P] extends Function ? P : never }[keyof T];

  type obj = {
    p: string,
    k1: (s: string) => string,
    k2: (n: number) => number,
    k3: (n: number, s: string) => number,
  };

  function fn2<K extends FnNames<obj>>(key: K) {
    const o: obj = 1 as any;
    return o[key]
  }
  fn2("k2")(3)
  fn2("k3")(3, "s")

  type T4 = FnNames<obj>
  type T5 = obj[T4]
  type T6 = Parameters<T5>
  function fn1<K extends FnNames<obj>, F extends obj[K]>(key: K, ...values: Parameters<F>) {
    const o: obj = 1 as any;
    o[key](...values)
  }
  fn1("k1", "va");
  fn1("k2", 3);
  fn1("k3", 3, "s");

}
{
  type t2 = string[number]
  class C1 {
    K1?: number;
  }
  type K1Type = C1["K1"];
  var s = "111"
  function fn1(str: string & string[]) {
    str.push("ss");
  }
  fn1(s);

  const a: (str: string) => void = fn1;

  function fn2(d: Date | string) {
    var d2 = Date("ss")
  }

}
{
  type Age = 0 | 100 | 200
  const a: Age = 200;

  interface U {
    A?: string
    B: number
    C: symbol
  }

  // type T1<T> = {[K in keys<keyof T>]: T[K]};
  type keys<T> = { [K in keyof T]: T[K] extends undefined ? 's' : K; }
  // let a1: undefined;
  // let a2: undefined|3; 
  // a1 = a2;
  type t2 = keys<U>;
  type t3 = { [key in string]: number };
  type t4 = U['A'] extends infer P | undefined ? never : 's';
  // (obj: T1<U>) => {

  // }




}
{
  type T12 = T11<ReturnType<typeof fn1>>
  //type T1 = ReturnType<typeof fn1> extends Promise<infer R> ? R : ReturnType<typeof fn1>
  type T11<T> = T extends Promise<infer R> ? R : T

  type PromiseReturnType<T extends (...arg: any) => Promise<any>> =
    T extends (...arg: any) => Promise<infer R> ? R : any;
  type T13 = PromiseReturnType<typeof fn2>
  type T14 = PromiseReturnType<typeof fn3>
  type T15 = PromiseReturnType<typeof fn1>
  async function fn1(a: string) {
    return { test: 123 };
  }
  async function fn2(a: string) { }
  function fn3(a: string) { }

  let fnNull: (r: number) => void = () => { };
  let fnVoid: (r: void) => void = (r) => { };

  function getPromise<T>(fn: () => Promise<T>, ok: (val: T) => void) {

  }
  getPromise(async () => {
    return null;
  }, (a) => {

  })

  interface AttDes {
    configurable?: boolean;
    enumerable?: boolean;
  }
  interface FieldDes extends AttDes {
    value?: any;
    writable?: boolean;
  }
  interface PropDes extends AttDes {
    get?(): any;
    set?(v: any): void;
  }

  function defineProp(des: PropDes | FieldDes) {
    defineProp({ value: 33, set: (v) => v })
  }
}
{
  const arr = [1, 2, 3] as const;
  // const arrC = arr as const;

  type arrT = (typeof arr)[number];
  "".localeCompare
}
{
  interface IAA {
    [key: string]: any
    A: string;
    B: number;
  }
  let obj: IAA = { A: "33", B: 33 }
  for (let k in (obj as Object)) {
    if (typeof obj[k] == "string") {
      let s = obj[k]
    }
  }

  function selectData<T extends Object>(obj: T) {
    for (let key in obj) {
      let val = obj[key]
      if (typeof val != "string") { continue }
      let data = val.split(';')
    }
  }


}
{
  interface A1 {
    A1: string
  }
  interface A2 {
    A2: string
  }

  (a: (A1 | A2)[], b: A1[] | A2[]) => {
    a.filter((v) => console.log(v))
    b.filter((v: A1 & A2) => console.log(v))
    b.filter
  }

  type UnionF = ((a: A1) => void) | ((a: A2) => void)




  type arg1 = A1 & A2

  (f: UnionF, f2: (a: A1 & A2) => void) => {


    let f22: UnionF = f2
  }
  document.body.style.backgroundColor = '#CCC'

}
{
  function copyF<T extends U, U>(t: T, u: U) {
    for (let i in u) {
      t[i] = u[i] as any
    }
  }

  function test1(t: number, u: number | string) {
    copyF(t, u)
  }
  test1(0, "s")

}
{
  type T22<T extends any[]> = T extends Array<infer P> ? P : never

}
{

  type Head<T extends any[]> = T[0]

  type Tail<T extends any[]> = ((...args: T) => any) extends (a1: any, ...tail: infer U) => any ? U : never
  type Last<T extends any[]> = T[Tail<T>['length']]
  // type Resver<T extends any[]> = [Tail<T>, Head<T>]

  type t22 = Tail<[1, 3, 'ss']>
  type t23 = Last<[1, 2, '4', '3']>
  let tup1 = [1, 2, '4', '3'] as const
  type Tup1 = typeof tup1

  type ContainName<T> = T extends { name: string } ? T : never;

  type ContainAge<T> = T extends { age: number } ? T : never;

  type a = { name: 'yj' } | { age: 20 }

  type res = ContainAge<ContainName<a>> // 结果为 {name: 'yj', age: 20}

}
{
  // https://zhuanlan.zhihu.com/p/96046788
  // distributive conditional types实际上有三个前提条件
  // 必须是checked type
  // 必须是naked type
  // T实例化为union type
  type Boxed<T> = T extends any ? { value: T } : never;
  type Boxed2<T> = { value: T }
  type Boxed3<T> = any extends T ? { value: T } : never;    // 这里会不会直接被分析简化了，简化成 Boxed2 那样，条件表达式永远为真？
  type Boxed4<T> = [T] extends any ? { value: T } : never;  // 这里会不会直接被分析简化了，简化成 Boxed2 那样
  type t11 = Boxed<1 | "vi">
  type t12 = Boxed2<1 | "vi">
  type t13 = Boxed3<1 | "vi">
  type t14 = Boxed4<1 | "vi">
  // <Test> extends <Conditional> ? X : Y  // 如果 Test 不是裸类型，不会对联合类型进行拆分分析

  type tNever = never extends any ? 1 : 0   // 永远为真
  type tUnknown = unknown extends any ? 1 : 0   // 永远为真

  type Check<T> = T extends true ? 'true' : 'false'

  type cBool = Check<boolean> // 'true' | 'false'   // 这里有两个拆分 Check<ture> | Check<false>
  type cAny = Check<any> // 'true' | 'false'        // 这里怎么拆分的不知道？ 
  // any和boolean都被视为了union type，这在我们类型编程中经常会造成影响，
  // 如何避免 any 被 resolve 为trueType和falseType呢？很简单，破坏前面两个条件即可。
  // 这里还有一个坑就是，虽然unknown和any都贵为 top type，unknown却没被视为union，
  // 而且这是故意为之的（因为any的union特性经常导致一些意外的行为，所以可能提供一个不union的替代吧）。

}
{
  // type A_Kv<K extends keyof A> = KV<A, K>
  type KV<T, K extends keyof T = keyof T> = [K, T[K]]
  type A = { a: number, b: string }
  const a: KV<A> = ["a", "s"]
  type A_Kv<K extends keyof A> = KV<A, K>
  function fnA_Kv<K extends keyof A>(tup: [K, A[K]]) { }
  type a2 = Parameters<typeof fnA_Kv>[0]
  // fnA_Kv(["a", "s"])

}
{
  function F1<T>(o: any): o is T {
    return o
  }
}
{
  type VirtualNode =
    | string
    | [string, { [key: string]: any }, ...VirtualNode[]];

  const myNode: VirtualNode =
    ["div", { id: "节点1" },
      ["div", { id: "first-child" }, "节点1.1", ["p", {}, "节点1.1.1", "节点1.1.2", "节点1.1.3"]],
      ["div", { id: "second-child" },
        "节点1.2", ["img", {},
          "节点1.2.1",
          "节点1.2.2",
          ["又是一个子节点", {}, "再加点什么节点"]
        ]
      ]
    ];
}
{
  <T, K extends keyof any>(arr: Array<{ [key in K]: T[] }>, key: K): T[] => {
    return ([] as T[]).concat(...arr.map(o => o[key]))
  }

  type PropArr<T> = { [K in keyof T]: T[K] extends any[] ? K : never }[keyof T]
  type PickKey<T, TProp> = { [K in keyof T]: T[K] extends TProp ? K : never }[keyof T]

  type TArr = (typeof arr1)[0]
  type TArr1 = PropArr<TArr>
  type TPropArr = Pick<TArr, PickKey<TArr, any[]>>

  type TArg1<K extends keyof any, Arr> = {
    [key in K]: Arr[]
  }
  const fn1 = <T, K extends PropArr<T>>(arr: Array<T>, key: K): T[K] => {
    return arr.reduce((acc, a) => acc.concat(a[key]), [] as T[K])
  }
  const fn2 = <T, TPropArr extends Pick<T, PickKey<T, any[]>>, K extends keyof TPropArr>(arr: Array<T>, key: K): TPropArr[K] => {
    return arr.reduce((acc, a) => acc.concat(a[key]), [] as any as TPropArr[K])
  }
  const fn3 = <K extends keyof any, R, T extends TArg1<K, R>>(arr: T[], key: K): R[] => {
    return arr.reduce((acc, a) => acc.concat(a[key]), [] as R[])
  }
  const fn4 = <K extends PropArr<T>, R, T extends { [key in K]: R[] }>(arr: T[], key: K): R[] => {
    return arr.reduce((acc, a) => acc.concat(...a[key]), [] as R[])
  }

  const arr1: Array<{
    abcd: number[]
    bddd: string[]
    cccc: string
  }> = [
      {
        "abcd": [1, 2, 3],
        "bddd": ["s", "c", "d"],
        "cccc": "ssssss"
      },
      {
        "abcd": [11, 12, 13],
        "bddd": ["ss", "cc", "dd"],
        "cccc": "ssssssss"
      }
    ]
  fn1(arr1, 'abcd')
  fn4(arr1, 'abcd')
}
{

  type Foo<A> = {
    //note duplicated Type Parameter 'A' line above and line bellow
    map: <A1, B>(f: (_: A1) => B) => Foo<B>
  }

  const Foo = <A>(a: A): Foo<A> => ({
    map: f => Foo(f(a)) //error at variable 'a': 'A' could be instantiated with a different subtype of constraint '{}' 
  })
}
{
  const func = <A extends {}>(a: A) => `hello!`
  const func1 = <A extends Object>(a: A) => `hello!`
  func(0)
  func1(null)
  func1("ss")
}
{
  function fn1<T extends new (...arg: any[]) => T>(constructor: T): T {
    return new constructor()
  }
} {
  function Fn1(a: (a: 1) => any): 1
  function Fn1(a: (a: 2) => any): 2;
  function Fn1(a: (a: 1 & 2) => any): 1 | 2 {
    (a as (a: 1) => any)(1)
    return 1
  }

  type t1 = ((a: 1) => 1) | ((a: 2) => 2)
  type t2 = (a: 1 & 2) => 1 | 2

  type test1 = t2 extends t1 ? true : false
  function fn2(a: 2 & 1) {
    (a as (a: 1) => any)(1)
  }

  type r1<K extends string | number> = Record<K, number>
} {
  interface A<T> {
    new(a: string, b: number): T
  }
  class B implements A<B> {
    constructor(a: string, b: number) {
      return this
    }
  }
} {
  interface A { a: 1 }
  interface B { b: 2 }
  interface C extends A, B {
    c: 3
  }
  function fn1(c: C) {
    c
  }
} {
  class A { a = 3 }
  class B { b = 4 }
  type MExtends<T1, T2> = T1 & T2 & { new(): T1 & T2 }
  const MEx: MExtends<A, B> = 0 as any
  class C extends MEx {
    // 因为需要构造函数，然而 MExtends 不是一个构造函数，只是一个在运行时不存在的类型
    c = 44
  }
  function fn1(c: C) {
    c
  }

} {
  const f1 = (arr: { k: 1, v: 2 }[]) => {
    return (arr.find(x => x.k) || {}).v
  }
  function fn1(obj?: { k: 1, v: 2 }) {
    return (obj || {}).v
  }

  type A = { k: 1, v: 2 } | undefined | {}
  type A2 = A["k"]
  type B = [1, ...2[]]
} {
  class A {
    static B = class B { }
  }
} {
  type Arr<T> = [T, ...T[]]
  function fn1(a: Arr<number>, b: number[]) {
    a = b;
  }
}
{
  type Exe = (a: number, b: number) => number
  let exeAdd: Exe = (a, b) => a + b
  let exeDiv: Exe = (a, b) => a / b
} {
  class A {
    get a() {
      return 3
    }
    set a(x) {

    }
  }
} {
  type Exclude<T, U> = T extends U ? never : T
  type T1 = Exclude<1 | 2 | 3, 3>
  type Pick2<T, K extends keyof T> = { [P in K]: T[P] }
  type T2 = Pick<{ a: 1, c: 2, d: 3 }, "a" | "d">
} {
  const a = new Promise<number>(res => {
    res()
  })
} {

  const f1 = (a: 1 | 2 | 3) => {
    return 1 as 1 | 2
  }
  const f2: F1 = f1

  type F1 = (a: 1 | 2, b: 3 | 4) => 1 | 2 | 3 | 4
} {
  type Fn = ((a: 1) => 1) & ((a: 2) => 2)

  function fn2(a: 1): 1
  function fn2(a: 2): 2
  function fn2(a: 1 | 2): 1 | 2 {
    return 1
  }
  function test1(f1: Fn) {
    return f1;
  }

  test1(((a: 1 | 2) => {
    return 1 as 1 | 2
  }) as Fn)

} {
  type Node<T = any> = { val: T, left?: Node, right?: Node }
  function XmXuBmLi2(node?: Node) {
    if (!node) return
    XmXuBmLi2(node.left)
    console.log(node)
    XmXuBmLi2(node.right)
  }
  function XmXuBmLi(node: Node) {
    const arr = [node]
    let node1: Node | undefined
    while ((node1 = arr.pop(), node)) {
      console.log(node.val)
      node.right && arr.push(node.right)
      node.left && arr.push(node.left)
    }
  }
  const root: Node = {
    val: "A",
    left: {
      val: "B",
      left: { val: "D" },
      right: { val: "E" }
    },
    right: {
      val: "C",
      right: { val: "F" }
    }
  }
} {
  type NotReadonly<T> = {
    - readonly [P in keyof T]: T[P]
  }
  type NotPartial<T> = {
    [P in keyof T]-?: T[P]
  }

  type T1 = NotPartial<{ a?: 1, b?: 2 | undefined }>
} {
  type E<T, U> = T extends any ? T extends U ? never : T : never;
  type E1 = E<1 | 2 | 3, 1>

  const chace = {
    a: [] as number[],
    b: [] as string[]
  } as const
} {
  const obj = { a: 3, b: 4 }
  for (const k in obj) {
    obj[k] = 3;
  }
} {
  const g = function* () {
    let a: Date = yield 3
    return "ds"
  }
  let a = g();
  a.return
} {
}







