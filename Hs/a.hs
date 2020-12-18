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

ls1 = 0 : [1, 2, 3] ++ [4, 5]

s1 = "sdc" -- list 语法糖

index3 = "abcd" !! 3 -- c

c = [1, 2] > [3, 3] -- False

lsX1 = [x * 2 | x <- [1 .. 10], x * 2 >= 12]

-- head [1, 2] -- 1
-- tail [1, 2, 3] -- [2, 3]
-- last [1, 2, 3] -- 3
-- init [1, 2, 3] -- [1, 2]
-- length [1, 1] -- 2
-- null []  -- True
-- reverse [1, 2, 3] -- [3, 2, 1]
-- take 2 [1, 2, 3] -- [1, 2]
-- drop 3 [8,4,2,1,5,6]  -- [1,5,6]
-- drop 100 [1,2,3,4]  -- []
-- maximum [1, 2, 3] -- 3
-- minimum [1, 2, 3] -- 1
-- sum [1, 2, 3] -- 6
-- product [6,2,1,2] -- 24
-- elem 3 [1, 2, 3] -- True
-- [1, 3..10] -- [1,3,5,7,9]
-- [1..] -- [1, 2, 3, ..]
-- [1, 3..] -- [1, 3, 5, ..]
-- take 10 (cycle [1, 2, 3]) -- [1,2,3,1,2,3,1,2,3,1]
-- take 3 (repeat 5) -- [5,5,5]
-- replicate 3 10 -- [10, 10, 10]
-- [x*2 | x <- [1..10], x*2 >= 12] -- [12,14,16,18,20]
-- [ x*y | x <- [2,5,10], y <- [8,10,11]] -- [16,20,22,40,50,55,80,100,110]
-- length' xs = sum [1 | _ <- xs]
-- fst (1, 2) -- 1
-- snd (1, 2) -- 2
-- zip [1..3] ['A'..] -- [(1,'A'),(2,'B'),(3,'C')]

-- addThree :: Int -> Int -> Int -> Int
addThree x y z = x + y + z

-- Int, Usually on 32-bit machines the maximum possible Int is 2147483647

r2 = read "4" :: Float

-- [LT ..] -- [LT,EQ,GT]
-- succ GT -- Exception: Prelude.Enum.Ordering.succ: bad argument
-- pred GT -- EQ
-- LT < EQ -- True
-- minBound :: Ordering -- LT
-- maxBound :: (Bool, Ordering) -- (True, GT)

-- Num 包含整数、小数
-- Integral : Num
-- Integer : Integral 无上界
-- Int : Integer -- 32位或64位
-- Floating : Num
-- Float : Floating
-- Double : Float

lucky 7 = "LUCKY NUMBER SEVEN!"
lucky _ = "Sorry, you're out of luck, pal!"

addVectors (x1, y1) (x2, y2) = (x1 + x2, y1 + y2)

addV1 = addVectors (3, 4.4) (2, 3.3)

listP1 [] = error "err"
listP1 all@[x1, _] = [x1, x1] ++ all -- 只匹配两个元素，多了或少了都匹配不上
listP1 (x1 : _ : xs) = x1 : xs -- 匹配至少两个元素以上的列表，[x1,x2] 是 x1:x2:[] 的语法糖


head1 (x : _) = x

head11 = head1 []

length' [] = 0
length' (_ : xs) = 1 + length' xs

sum1 [] = 0
sum1 (x : xs) = x + sum xs
