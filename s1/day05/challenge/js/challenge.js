const student =
{
    name: "홍길동",
    year: 2,
    major: "컴퓨터공학",
}

console.log(student.name);
console.log(student.year);
//
student.year = 3;
student.email = "hong@test.com";

console.log(student.year);
console.log(student.email);
//
console.log(`${student.name} ( ${student.major} ${student.year}학년 )`);
//
const scores =
[
    {subject: "국어", score: 80},
    {subject: "영어", score: 95},
    {subject: "수학", score: 70},
]

for (let i = 0; i < scores.length; i++)
{
    console.log(scores[i].subject + " : " + scores[i].score + "점");
}

const bestSubject = (list) =>
{
    let best = list[0];
    for (let i = 0; i < list.length; i++)
    {
        if (best.score < list[i].score)
        {
            best = list[i];
        }
    }
    return best.subject;
}

console.log(bestSubject(scores));
//
student.email = "  hong@Test.COM  ";

console.log(student.email.trim().toLowerCase());
//
const arr = "80, 95, 70".split(",");

let total = 0;

for (let i = 0; i < arr.length; i++)
{
    total = total + Number(arr[i]);
}

console.log(total);
console.log((total / arr.length).toFixed(1));
//
scores[3] = {subject: "과학", score: 88}

const sizes = scores.length

console.log(scores.length);
console.log(scores[sizes - 1].subject);
//
const averageScore = (list) =>
{
    let size = 0;
    for (let i = 0; i < list.length; i++)
    {    
        size = size + list[i].score;
    }
    return size / sizes;
}

console.log(averageScore(scores));
//
const arrs = "cs101, db201, cs103";

console.log(arrs.toUpperCase().split(",").join(" / "));
//
const makeEmail = (names, domain) =>(`${names.trim().toLowerCase()}@${domain.trim().toLowerCase()}`);

console.log(makeEmail(" Kim ", "TEST.com"));