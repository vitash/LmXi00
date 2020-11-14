const cd1: ClassDecorator = (f) => {

}

function cd2<F extends Function>(opt: { c1(this: F, a: number): boolean }) {
    return (f: F) => {

    }
}

@cd2({
    c1(a) {
        
        return !!a
    }
})
class C2 {

}

function f() {
    console.log("f(): evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("f(): called");
    }
}

function g() {
    console.log("g(): evaluated");
    return function (target: any, propertyKey: string, descriptor: PropertyDescriptor) {
        console.log("g(): called");
    }
}

class C {
    constructor(public name: string) {

    }
    @f()
    @g()
    method() {
        console.log("method")
    }
}

console.log("c1.name")
let c1 = new C("ss");
console.log(c1.name)
c1.method()
c1.method()