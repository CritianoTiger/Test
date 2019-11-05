console.log("Hello World!");

// 定义变量语句
// 每个语句都要加上;
// 定一个了一个变量，解释器在执行的时候，会为这个变量分配内存;
// 内存就能存放数据，变量的名字，就代表这个内存;
// 变量内存: 1:基本数据类型;   2复杂数据类型的引用();
var num;
num = 7; // 整数
// 使用变量的名字，得到的是变量里面的数据, 
console.log(num);

num = 8.5; // 存的是小数;
// 使用变量的名字，得到的是变量里面的数据, 
console.log(num);

num = true; // 存的是逻辑值: true/false
// 使用变量的名字，得到的是变量里面的数据, 
console.log(num);

// 变量要自己合法定义，如果你没有定义，直接使用;
// console.log(xxxxx);

// 定义一个变量，并且存放初始的数据;
var test = 2;
// 定义变量，变量里面存放的值是要有逻辑意义;
var a = null;
console.log(a);

// 变量，知道你存的是什么;

// 变量的类型
var b = false
console.log(typeof b)

b = 7
console.log(typeof b)

// 变量定义在哪里，作用范围就在那里;
var test_value;



test_value = 1.0;
console.log(test_value);
console.log(typeof test_value);

test_value = 1;
console.log(test_value);

console.log(typeof test_value);


// = 给变量赋值;
test_value = 6;
var lhs = 4;
var rhs = 5;

// ret 变量存放了 lhs + rhs的值;
var ret = lhs + rhs;
console.log(ret);

ret = ret + 7
console.log(ret);

console.log(ret, ret + 4)

// 取余数
var temp = 10.5;
console.log(temp % 8); // 2


temp = ((lhs + rhs) * 3 + (lhs / 4)) * 7;
temp = (lhs + rhs);


console.log(3 < 4);
console.log(3 >= lhs)

// +, - * / 我们是用number类型来做处理和运算;
// <, <, >=, == !=  number, 逻辑
// 字符连接, 后面再讲

console.log(lhs == 4)


console.log(rhs == 4)
console.log(rhs + lhs < 7)


// 简化表达式
 // a = a + b a += b
lhs += rhs; // lhs = lhs + rhs;
lhs ++ // lhs = lhs + 1;
console.log(lhs)
++ lhs // lhs = lhs + 1;
console.log(lhs)

// 符合使用;
lhs = (rhs ++) + 4; // lhs = rhs + 4; rhs = rhs + 1;
lhs = (++ rhs) + 4; // rhs = rhs + 1; lhs = rhs + 4;
// 坚决反对，使用发杂的 ++, --等放到我们的表达式里面去;

// 混合使用与++一样
lhs--; // a = a - 1
--rhs; // a = a - 1;
