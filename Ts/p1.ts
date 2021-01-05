type Data = { [k: string]: unknown }
interface A<T> {
    a(): T
}
type ObjA<P = Data> = {
    [K in keyof P]: A<P[K]>
}

declare function getObjA< T extends ObjA>(a: T): T

const a1 = getObjA({
    a1: { a: () => "sds" },
    a2: { a: () => 3 }
})

export { }
