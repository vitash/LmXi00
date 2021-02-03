repeat1 x = x : repeat1 x

zip1 [] _ = []
zip1 _ [] = []
zip1 (a : ls1) (b : ls2) = (a, b) : zip1 ls1 ls2

errorEmptyList = error "empty list"

head1 [] = errorEmptyList
head1 (x : _) = x

tail1 [] = []
tail1 (_ : xs) = xs

last1 [] = errorEmptyList
last1 [x] = x
last1 (_ : xs) = last1 xs

init1 [] = errorEmptyList
init1 [_] = []
init1 (x : xs) = x : init1 xs

length1 [] = 0
length1 (_ : xs) = 1 + length1 xs

null [] = True
null _ = False

reverse1 [] = []
reverse1 (x : xs) = reverse1 xs ++ [x]

take1 n _
  | n <= 0 = []
take1 _ [] = []
take1 n (x : xs) = x : take1 (n - 1) xs

drop1 n _
  | n < 0 = error "dorp negative number"
drop1 0 xs = xs
drop1 _ [] = []
drop1 n (_ : xs) = drop1 (n - 1) xs

maximum1 [] = errorEmptyList
maximum1 [x] = x
maximum1 (x : xs)
  | x > tailMax = x
  | otherwise = tailMax
  where
    tailMax = maximum1 xs

sum1 [] = 0
sum1 (x : xs) = x + sum xs

elem1 _ [] = False
elem1 e (x : xs)
  | e == x = True
  | otherwise = elem1 e xs

replicate1 n x
  | n <= 0 = []
  | otherwise = x : replicate1 (n -1) x

minimum3 :: (Ord a) => [a] -> a
minimum3 = foldl1 (\acc x -> if x > acc then x else acc)

-- elem3 = foldl

transpose'' :: [[a]] -> [[a]]
transpose'' [] = []
transpose'' ([] : xss) = transpose'' xss
transpose'' ((x : xs) : xss) = (x : [h | (h : _) <- xss]) : transpose'' (xs : [t | (_ : t) <- xss])

foldr1'' :: (t -> t -> t) -> [t] -> t
foldr1'' _ [x] = x
foldr1'' f (x : xs) = f x $ foldr1'' f xs

foldl'' f acc [] = acc
foldl'' f acc (x : xs) = foldl'' f (f acc x) xs

reverse'' [] = []
reverse'' (x : xs) = reverse'' xs ++ [x]
