const toWon = (n) => (n + "원");
console.log(toWon(1500));
//
const discount = (price, percent) => (price - price * percent / 100);
console.log(discount(10000, 10));
//
const shipping = 3000;
const withShipping = (price) => (price + shipping);
console.log(withShipping(9000));
//
const isFree = (price) => (price >= 50000);

console.log(isFree(30000));
console.log(isFree(50000));
//
function finalPrice(price)
{
    let i = discount(price, 10)
    if (isFree(i))
    {
        return i;
    }
    return withShipping(i);
}

console.log(finalPrice(20000));
console.log(finalPrice(60000));
//
const myPrices = [12000, 8000, 30000];

const sumPrices = (prices) =>
{
    let total = 0;
    for (let i = 0; i < prices.length; i++)
    {
        total = total + prices[i];
    }
    return total;
}

console.log(sumPrices(myPrices));
//
formatOrder = (prices) => (prices.length) + "개 / " + toWon(sumPrices(prices));

console.log(formatOrder(myPrices));
//
addTax = (price) => (price + price / 10)

console.log(addTax(20000));
//
let count = 0;

const addCount = () =>
{
    count = count + 1;
    return count;
}

console.log(addCount());
console.log(addCount());
console.log(addCount());
//
maxPrice = (prices) =>
{
    let i = prices[0];
    for (let j = 0; j < prices.length; j++)
    {
        if (prices[j] > i)
        {
            i = prices[j];
        }
    }
    return i;
}

console.log(maxPrice(myPrices));
//
applyTwice = (fn, n) => fn(fn(n));

console.log(applyTwice(addTax, 10000))