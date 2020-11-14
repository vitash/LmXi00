export default {}

interface A {
    a1: string
    a2: number
    bb: B
    fn1(): number
}
interface B {
    b1: number
    b2: Date
    cc: C
    fn2(): number
}
interface C {
    c1: A
}

// type Last<T extends readonly any[]> = ((...a: T) => 0) extends (...a1: )
type First<T extends readonly any[]> = T extends [infer A, ...infer R] ? A : never
type Tf1 = First<[]>

type TupleKeys_<T, Keys extends any[] = [keyof T]> = {
    0: Res,
    1: [K] | TupleKeys_<T[K], keyof T[K], [K, ...Res]>
}[]
type TupleKeys<T, Keys extends any[] = [keyof T]> = TupleKeys_<T, Keys>

type T1 = | [keyof A] | [keyof A, keyof B] | []
function fn1(...a: T1) {
    fn1("a1", "cc")
    fn1()
}

type T2 = [a: "1" | "2", b?: "22" | "322" | "422"]
function fn2(a: T2) {
    fn2(["1", undefined])
}

// type TupleKeys2<T, K extends keyof T, Res extends any[]> = {
//     (...args: [K]): void
//     (...args: [K, Parameters<TupleKeys2<T[K], keyof T[K], [K, ...Res]>>]): void
// }
// type TK2<T> = 


function fnTupleKeys<T extends any[]>(...keys: T) {

}

interface Fn1 {
    StaticAA: number
    (a: number): void
    (a: string): string
}
type Fn2 = 
    & ((a: number) => void) 
    & ((a: string) => string)


function test22(fn1: Fn1, fn2: Fn2) {


    
    fn2()
}
