--  单行注释
{-  多行注释
    加载脚本 a.hs
    ghci> :l a
    重新加载脚本
    ghci> :r
-}

{-
    编译输出可执行文件
    ghc -o helloworld helloworld.hs
    ./helloworld
-}

main :: IO ()
main = do
  putStrLn "hello"

a = min 3.3 2

b = min 3

doubleX x = x * 2

ls1 = [1, 2, 3] ++ [4, 5]

s1 = "sdc" -- list 语法糖
