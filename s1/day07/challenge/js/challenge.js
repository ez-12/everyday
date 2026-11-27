const book =
{
    title: "자바스크립트 입문",
    price: 25000,
    author: "김코딩",
};

const {title, price} = book;

console.log(title);
console.log(price);
//
console.log("");
//
const arr = [3, 7, 1];

const [a, b, c] = arr;

console.log(a + b + c);
//
console.log("");
//
const label = ({ title, price }) => `${title} - ${price}원`;

console.log(label(book));
//
console.log("");
//
const discounted = {...book, price: 20000};

console.log(book.price);
console.log(discounted.price);
//
console.log("");
//
const fruit = ["사과", "배"];
const orange = ["귤"];

const fruits = [...fruit, ...orange];

console.log(fruits.length);
console.log(fruits[fruits.length - 1]);
//
console.log("");
//
const bookText = JSON.stringify(book);

console.log(typeof bookText);

const undo = JSON.parse(bookText);

console.log(undo.author);
//
console.log("");
//
const memos =
[
    {memo: "장보기"},
    {memo: "운동"},
];

localStorage.setItem("memos", JSON.stringify(memos));

const memoGet = JSON.parse(localStorage.getItem("memos"));

console.log(memoGet.length);
console.log(memoGet[0].memo);
//
console.log("");
//
const challengeCount = localStorage.getItem("counts");

const count = Number(challengeCount) + 1;

localStorage.setItem("counts", count);

console.log(`도전 페이지 ${count}번째 방문`);
//
console.log("");
//
const books = [{...book}, {title: "리액트 기초", price: 30000, author: "이리액"}];

const bookMap = books
.map
((titles) => titles.title)
.sort
((a, b) => a - b)
.join
(", ");

console.log(bookMap);
//
console.log("");
//
console.log(books.length);

const addBook = (list, newBook) => [...list, newBook];

console.log(addBook(books, {title: "뷰 입문", price: 22000}).length);
//
console.log("");
//
localStorage.setItem("books", JSON.stringify(books));

const bookUndo = JSON.parse(localStorage.getItem("books"));

const total = bookUndo.reduce((sum, c) => sum + c.price, 0);

console.log(total);
//
console.log("");
//
const favBook = {...book, fav: true};

console.log(book.fav);
console.log(favBook.fav);
//