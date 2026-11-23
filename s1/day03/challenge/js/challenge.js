function printLine()
{
    console.log("----------");
}

printLine();
printLine();
//
function welcome(name, major)
{
    console.log(name + major + "환영합니다")
}

welcome("홍길동", "(컴퓨터공학과)");
//
function multiply(a, b)
{
    return a * b;
}

console.log(multiply(4, 5))
console.log(multiply(2, 3) * 4)
//
function average(scores)
{
    let total = 0;
    for (let i = 0; i < scores.length; i++)
    {
        total = total + scores[i];
    }

    return total / scores.length;
}

console.log(average([80, 90, 100]));
console.log(average([70, 85]));
//
function grade(score)
{
    if (score >= 90)
    {
        return "A";
    }
    else if (score >= 80)
    {
        return "B";
    }
    return "C";
}

console.log(grade(95))
console.log(grade(85))
console.log(grade(70))
//
console.log(grade(average([88, 92, 79])));
//
function countPass(scores)
{
    let total = 0;
    for (let i = 0; i < scores.length; i++)
    {
        if (scores[i] >= 60)
        {
            total = total + 1;
        }
    }
    return total;
}

console.log(countPass([55, 60, 72, 40, 90]));
//
function max(a, b)
{
    if (a > b)
    {
        return a;
    }
    return b;
}

console.log(max(3, 7));
console.log(max(10, 2));
//
function isEven(n)
{
    if (n % 2)
    {
        return "false"
    }
    return "true"
}

console.log(isEven(4))
console.log(isEven(7))
//
function makeCell(text)
{
    return "<td>" + text + "</td>";
}

console.log(makeCell("CS101"));
//
function makeRow(list)
{
    let total = "<tr>";
    for (let i = 0; i < list.length; i++)
    {
        total = total + makeCell(list[i]);
    }
    return total + "</tr>";
}
console.log(makeRow(["A", "B"]));
