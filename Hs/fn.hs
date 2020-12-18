bmiTell _ 0 = "0"
bmiTell weight height
  | bmi <= skinny = "You're underweight, you emo, you!"
  | bmi <= normal = "You're supposedly normal. Pffft, I bet you're ugly!"
  | bmi <= fat = "You're fat! Lose some weight, fatty!"
  | otherwise = "You're a whale, congratulations!"
  where
    bmi = weight / height ^ 2
    (skinny, normal, fat) = (18.5, 25.0, 30.0)

myCompare a b
  | a > b = GT
  | a == b = EQ
  | otherwise = LT

cylinder r h =
  let sideArea = 2 * pi * r * h
      topArea = pi * r ^ 2
   in sideArea + 2 * topArea * h

calcBmis xs = [bmi | (w, h) <- xs, let bmi1 = h ^ 2; bmi = w / bmi1, bmi >= 25.0]

describeList xs =
  "The list is " ++ case xs of
    [] -> "empty."
    [_] -> "a singleton list."
    _ -> "a longer list."

describeList2 xs = "The list is " ++ what xs
  where
    what [] = "empty."
    what [_] = "a singleton list."
    what _ = "a longer list."

quicksort1 [] = []
quicksort1 (x:xs) = quicksort1 [a| a <- xs, a <= x] ++ [x] ++ quicksort1 [a| a <- xs, a > x]

applyTwice f x = f (f x)

f1 x = x + 1

f2 x1 x2 = f1 x1 + x2

f3 x = f2 (x + 1)

zipWith' _ [] _ = []
zipWith' _ _ [] = []
zipWith' f (a:as) (b:bs) = f a b :zipWith' f as bs

flip' f = g
  where g a b = f b a

flip2 f a b = f b a

map1 _ [] = []
map1 f (x:xs) = f x : map1 f xs

filter1 _ [] = []
filter1 f (x:xs)
  | f x = x : filter f xs
  | otherwise = filter f xs

takeWhile1 _ [] = []
takeWhile1 f (x:xs)
  | f x = x : takeWhile1 f xs
  | otherwise = []

collatz 1 = [1]
collatz n 
  | n `mod` 2 == 1 = n : collatz (n * 3 + 1)
  | otherwise = n : collatz (n / 2)

foldl2 _ acc [] = acc
foldl2 f acc (x:xs) = foldl2 f (f acc x) xs

sum2 = foldl2 (+) 0

-- flip3 f = (\x y -> f y x)

reverse2 = foldl2 (flip (:)) []
-- reverse2 = foldl2 (\acc x -> x:acc) []

--