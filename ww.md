
HjUuMk CjUu CjUuJpGz: FjHvVi(GsKd) | VjVi(SiYz) HjUuTi

``
`HjUuMk;` // 跳转至函数结束


max [x] : x
  (> :* x)
max [x1 ...xs] : x1
  max xs (> :* x1)


JpIg2 0 : 1
JpIg2 n : 1
  JpIg2 n-- (* :* n)

fib 0 : 0
fib n : 0 ; b: 1
  fib n-- b (+ b :*)


//  xxx.opt yyy


``` TypeScript
  type Node<T = any> = { val: T, left?: Node, right?: Node }
  function XmXuBmLi(node: Node) {
    const arr = [node]
    while ((node = arr.pop(), node)) {
      console.log(node.val)
      node.right && arr.push(node.right)
      node.left && arr.push(node.left)
    }
  }
```

// 函数开始执行之前先出栈
XmXuBmLi JpDm :
  #log JpDm
  && JpDm.Yz JpDm.Yz >>JpDm
  && JpDm.Zo JpDm.Zo >>JpDm
  // 此时栈没有空，继续执行

// 出栈和入栈都是，一对一对的
Vj1 x1 x2 :
  >>x1 // 错误
  >>x1 x2 // 这样保证了两个值要么同时有值，要么同时无值

WuXmXyHr x :
  x
  1 >>x  // 无限循环了
  x >>x

// | FjHvVi | CjUuVi | VjVi | VjKsJm |
Vj2 0  0  :
Vj2 x1 x2 :
  && SvJi >>x1-- x2--  
  Vj2 x1-- x2--
