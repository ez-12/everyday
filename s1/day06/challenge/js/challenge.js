const products = 
[
  { name: "노트북", price: 1200000, stock: 3 },
  { name: "마우스", price: 30000, stock: 0 },
  { name: "키보드", price: 80000, stock: 5 },
  { name: "모니터", price: 300000, stock: 0 },
  { name: "USB", price: 15000, stock: 12 },
];

products.forEach
(
    (product) =>
    {
        console.log(`${product.name} : ${product.price}원`);
    }
);
//
const productNames = products.map((product) => product.name);

console.log(productNames.length);
console.log(productNames[4]);
//
const stock0 = products.filter((product) => product.stock === 0);

console.log(stock0.length);
console.log(stock0[0].name);
//
const price8 = products.find((product) => product.price === 80000);

console.log(price8.name);
//
const total = products.reduce((sum, product) => sum + product.stock, 0);

console.log(total);
//
console.log(products.some((product) => product.price >= 1000000));
console.log(products.every((product)=> product.stock >= 0));
//
const totalPrice = products
.filter((product) => product.stock > 0)
.reduce
(
    (sum, productd) =>
        sum = sum + (productd.price * productd.stock), 0
);
//
console.log(`재고 금액 : ${totalPrice}원`);

//
products.sort((a, b) => a.price - b.price);

console.log(products[0].name);
console.log(products[products.length - 1].name);
//
const productds = products
.filter((product) => product.stock > 0)
.map((product) => product.name)
.join(", ");

console.log(productds);
//
const nameTotal = products.reduce
(
    (sum, nt) =>
    {
        if (sum.price < nt.price)
        {
            return sum = nt
        };
        return sum;
    }
    ,products[0]

);

console.log(nameTotal.name);
//
console.log(productNames.includes("마우스"));
console.log(productNames.includes("테블릿"));
//
const raisedPrices = products.map((p) => p.price + p.price / 10);
const raiseTotal = raisedPrices.reduce((sum, rt)=> sum + rt, 0);
//
console.log(raisedPrices[0]);
console.log(raiseTotal);