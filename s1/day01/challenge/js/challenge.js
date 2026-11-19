const libraryName = "중앙 도서관";
console.log(libraryName)

let borrowed = 2;
console.log(borrowed)

borrowed = 3;
console.log(borrowed)
//
console.log(typeof libraryName)
console.log(typeof borrowed)
console.log(typeof true)
//
const price1 = 12000;
const price2 = 15000;
const price3 = 18000;
console.log(price1 + price2 +price3);
const price = price1 + price2 + price3;
const totalPrice = "합계 : ";
console.log(totalPrice + price)
console.log(price / 3)
//
console.log(borrowed < 5)
console.log(borrowed === 3)
console.log("3" === 3)
//
const maxBorrow = 5;

if (maxBorrow > borrowed)
{console.log("더 빌릴 수 있음");}
else
{console.log("대출 한도");}
//
const daysLate = 4;

if (daysLate === 0)
{console.log("연체 없음");}
else if (daysLate <= 7)
{console.log("연체" + daysLate + "일 : 경고");}
else
{console.log("대출 정지");}
//
console.log("더 빌릴 수 있는 책 : " + (maxBorrow - borrowed) +"권")

