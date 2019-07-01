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
function Fn122(arg: string|number): string|number {
  if(typeof arg == 'string') {
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
  function stringOrNumber(foo: string|number): string|number  {
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

  function setText<T extends keyof state > (key: T, values: state[T]){
    setState({[key]:values});
  }

  setText("name", "sss");
  setText("onFocus", true);
  setText("name2", "sss");
  setText("onFocus", "true");

  
  function setState(obj: Partial<state>){

  }

  function setText2(key: "name"|"password" , text: string){
    setState({[key]:text});
  }
  
  setState({ "name":"sss", "password":"sss" });

  const updateState = <T extends string>(key: keyof state, value: T) => 
  ( prevState: state ): state => ({
    ...prevState,
    [key]: value
  })
  


  let key = '';
  let text = ''
  let obj = { state: { [key]: text } };
  
}
{
  type  apiName = "A"|"B";
  
  function apiGet(url :apiName){}
  let c: string[] = ['3','c'];
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

  (t: Extract<Day, 'Mon' | 'Sun'>)=>{}
  (t: Extract<1 | 2 | 'a' | 'b' | 'c', string>)=>{}

  type Arrayish<T> = {
      length: number;
      [x: number]: T;
  }

  type k1 = (("name" ) & "onFocus");
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
  (t: Pick2<state, "name"|"smb">) => {
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
  
  logName2({name: '33', a:2});   //
  logName2({neme: '33'});   // 对象字面量检查

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
  
  let fn1 = (a: 3|4|5|"2" )=>{
  }
  let b2: 3|4|5|"2";
  b2 = "2";
  b2.length;
  b2 = 3;
  b2.toFixed();

  let obj = { 
    x: 10, 
    y: ['hello', 2],
    z: {
      a: {  b: 'top' }
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
  function fn1(arg: Foo & Bar){
    
  }
}
{
  type T1 = [number, string]
  type T2 = T1 extends any[] ? 1 : 2;
  
  let t!: [number, string, boolean?, string?];
  let l = t.length;   // l type 2 | 3 | 4
  if (t.length === 6){

  }

  function fn1(a1: [number, string, number, ...string[]]){
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
  type k2 = Book[1|2];
  let a3: any[] = "sss";

  type FunctionPropertyNames<T> =  { [K in keyof T]: T[K] extends Function ? K : never }[keyof T];
  type fnBook = FunctionPropertyNames<Book>;
  type k3 = Book[1|2|"fn2"] | never;      // 分布式条件 ==  Book[1] | Book[2] | Book["fn2"]

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

  type F1 = (a: any, b: any ,c: any) => number;
  type F2 = (a: any, b: any) => number;
  let f1: F1 = (a, b) => 1;

  function Fn10(f: (a: number, b: number, c: number) => number){
    let b = f(3, 4, 5);
  };
  Fn10( (a, b) => a+b );
  Fn10( (a,) => 1+a );
}
{
  function foo(x: string): number;
  function foo(x: number): string;
  function foo(x: string | number): string | number { 
    if (typeof x == "string") {
      return  +x + 2;
    } else {
      return "22" + x;
    }
  };
  type T30 = ReturnType<typeof foo>;  // string | number  ?? 好像出了问题

  type T04 = NonNullable<string | number | undefined>; 

  let b1: boolean;
  let obj = b1 ? { value: 42 } : {};    // TS 2.7 之前返回的类型是两者的最佳超类 {}，对于这种类型并没有多大用处
  let obj2 = b1 ? { value: 42 } : {value: "33", a: 33};
  let p1 = obj2.a;      // 竟然没有 undefined 类型了
  let p2 = obj2.value;     
}
{
  function fn1<T extends 2|3|4, Data = 3|4>(a1: T, a2: Data){

  }
  fn1<3|4>(3, 4);
  fn1<3|4, 5|6>(3, 6);

  function fn2(arr: { name:string, age:number }[]){
    arr[1].name = "33";
  }

  let a1: ReadonlyArray<number> = [1,2,3];
  a1.push(1);
  a1[2] = 3;
  a1.length = 4;

  type T1 = { readonly bar: number };
  const foo: T1 = { bar: 123 };
  type T2 =  { bar: number };
  function iMutateFoo(foo: T2) {
    foo.bar = 456;
  }
  iMutateFoo(foo);
}
{
  type Exclude2<T, K extends T> = T extends K ? never : T; 
  type B1 = Exclude2<keyof Book, 1>;
  type Omit2<T, K extends keyof T> = { [P in Exclude2<keyof T, K> ]:T[P] } 
  type t = Omit<Book, 1|2>    // 第二个类型参数，没有约束为第一个类型
  type t2 = Omit2<Book, 1|2>
  type t3 = Omit2<Book, Extract<keyof Book, number>>
  type t4 = Omit2<Book, 1|2|3>
  type t5 = Omit2<Book, Extract<1|2|3, keyof Book>>
  
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
  const x = mergeEnums(A,B);
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
  type K1 = 1|2|3;
  type T1 = {[K in K1]: number};
  let obj1: T1 = {3: 1, "2": 2, }
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
  (a: FormState )=>{
    a["dd"] = { value: "" };
    a.isValid = false;
    
  }
  type K2 = User & Book;
  (a: K2)=>{
  }

  type ObjectDescriptor<D, M> = {
    data: D;
    methods: M & ThisType<D & M>; // Type of 'this' in methods is D & M
  };
  function fn1<D,M>(obj: ObjectDescriptor<D, M>){ }
  fn1({
    data: {x: 30, y: 40},
    methods: {
      z: 33,
      move: function() {
        return this.x + this.y + this.z   // 这个推算 this，懵逼了
      }
    }
  })
  
  //fn1.bind

  let obj2 = {
    data: {x: 30, y: 40},
    methods: {
      move: () => {
        return this.x+this.y
      }
    }
  };

  (obj: ThisType<Book> )=>{
    obj.name = 10;
  }
  interface ThisType2<T> { }    
  let obj3: ThisType2<Book> = {
    name22: "dd",
    fn11: function(){
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

  type FnNames<T> = {[P in keyof T]: T[P] extends Function ? P : never }[keyof T];
  type ObjFn<T> = {[P in FnNames<T>]: T[P]}
  type Fn1 = FnNames<Module>
  type ObjFn1 = ObjFn<Module>

  type Result1<M> = {[P in keyof ObjFn<M>]: 
      M[P] extends <T, U>(input: Promise<T>) => Promise<Action<U>>  ? <T, U>(input: T) => Action<U> : 
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

  function fn1(obj: T11){
    obj.a = 'apple';
  }
}
{
  type T11<T> = T extends any ? 1 : 2;
  type T111 = T11<never>;   // 无法推导出条件类型

  type And1<T> = (T extends any ?  (a: T) => void : never) extends (a: infer I) => void ? I : never;
  type And2<T> = (a: T) => void extends (a: infer I) => void ? I : never;
  type AB = And1<1|2>

  type UnionToTuple1<Union> = Union extends infer A | infer B ? [A, B] : never;
  type tuple = UnionToTuple1<'a' | 'b'>; // [{}, {}]

  type T21<T> = T extends infer A | infer B ? A & B : never;
  type T211<T> = T extends infer A | infer B ? Exclude<A,B> : never;
  type T22 = T21<'a'>;  // 'a' extends infer 'a' | infer 'a' ? 'a' & 'a' : never;  //  'a' & 'a' == 'a'
  type T23 = 'A' & 'B' & 'B' & never

  type T31<T> = (T extends any ? T : never) extends infer A | infer B ? [A, B] : never;
  type T322 = T31<'a' | 'b'>;

  type T41 = ((x: number) => void) & ((x: string) => void);
  type T42 = {
    (x: number): void
    (x: string): void
  }
  function f1(fn: T41, obj1: T42, ns: Book & User){
    fn(3)
    obj1 = fn;  // 这两个是相等的
    fn = obj1;
  }

  type UnionToIoF<U> = (U extends any ? (x: (a: U) => void ) => void : never) extends (x: infer A) => void  ? A : never
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