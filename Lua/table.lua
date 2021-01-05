-- 示例来源于，https://learnxinyminutes.com/docs/zh-cn/lua-cn/，边学习边做思考记录
--[[
    t 中查找属性 k 的方式
    t 表中查找 k, 找到返回
    t 是否有元表，元表是否有属性 __index, 从 __index 指向的表中查找 k
    __index 指向的表没有找到，继续递归查找
    (__index 是 function 的话，我还没看这部分内容)

--]]
Base = { a = 3 }
setmetatable(Base, { d2 = 332 })
print(Base.d2) -- 没有找到


Dog = { d1 = "Dog.d1" }

-- 这里也为 Dog 添加了一个 new 属性
-- function Dog:new()
--   local newObj = {sound = 'woof', __index = "dss"}
--   self.__index = self
--   return setmetatable(newObj, self)
-- end

Dog.new = function(s)
  local newObj = {sound = 'woof', __index = "dss"}
  s.__index = s
  return setmetatable(newObj, s)
end

Dog.selfFn = function(s)
    print(s.d1 .. ' -- selfFn')
end
Dog:selfFn() -- 这都可以

function Dog:makeSound()
  print('I say ' .. self.sound)
end

mrDog = Dog:new()  -- 原型链 newObj -> Dog
mrDog:makeSound()  -- 'I say woof' 

mrDog.m1 = 3
b = mrDog:new()  
-- mrDog 看作一个实例，则一个实例调用了 new 方法，那么 new 方法从哪来，是谁的方法
-- mrDog 表中没有 new 属性，上面的写法也可写成 mrDog.new(mrDog)，原型继承找到 Dog.new 
-- 方法内的 self.__index = self，此时 self == mrDog，原型链有： newObj -> mrDog -> Dog
print(b.d1)  -- Dog.d1
print(b.m1) -- 3

-- 方法定义，这也可以
function Dog.fnA() 
  print("fnA")
end
b.fnA()