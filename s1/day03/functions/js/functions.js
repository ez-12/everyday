function sayHello()
{
  console.log("안녕하세요");
}
 
sayHello();
sayHello();
//
function greet(name)
{
  console.log(name + "님, 환영합니다");
}
 
greet("홍길동");
greet("김철수");
//
function printCourse(title, credit)
{
  console.log(title + " (" + credit + "학점)");
}
 
printCourse("자료구조", 3);
printCourse("데이터베이스", 2);
//
function add(a, b)
{
  return a + b;
}
 
const result = add(3, 2);
console.log(result);
console.log(add(10, 5));
//
function printSum(a, b)
{
  console.log(a + b);
}

function getSum(a, b)
{
  return a + b;
}
 
const x = printSum(1, 2);
const y = getSum(1, 2);
console.log(x);
console.log(y);
//
