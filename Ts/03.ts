

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
    constructor (public name: string) {

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