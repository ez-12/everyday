const headers = ["과목코드", "과목명", "학점", "요일", "시간", "정원"];
const codes = ["CS101", "CS102", "DB201", "CS103", "OS301", "GE101"];
const names = ["웹 프로그래밍 기초", "자바 입문", "데이터베이스", "알고리즘 기초", "운영체제", "글쓰기"];
const credits = [3, 3, 2, 2, 3, 2];
const days = ["월", "화", "수", "목", "금", "금"];
const times = ["09:00-12:00", "13:00-15:00", "15:00-17:00"];
const capacities = [30, 30, 25, 25, 40, 20];

let tableHtml = '<table class="course-table">';

tableHtml += "<caption>개설 과목</caption>";

tableHtml += "<thead><tr>";

for (let i = 0; i < headers.length; i++)
{
  tableHtml += "<th>" + headers[i] + "</th>";
}

tableHtml += "</tr></thead>";

tableHtml += "<tbody>";

let totalCredits = 0;

for (let i = 0; i < codes.length; i++)
{
  totalCredits += credits[i];

  tableHtml += "<tr>";

  tableHtml += "<td>" + codes[i] + "</td>";

  tableHtml += "<td>" + names[i] + "</td>";

  
  tableHtml += '<td>' + credits[i] + "</td>";

  tableHtml += "<td>" + days[i] + "</td>";

  if (i % 2 === 0)
  {
    tableHtml += '<td rowspan="2">' + times[i / 2] + "</td>";
  }

  tableHtml += '<td>' + capacities[i] + "</td>";

  tableHtml += "</tr>";
}

tableHtml += "</tbody>";

tableHtml += "<tfoot><tr>";

tableHtml += '<th colspan="2">총 학점</th>';

tableHtml += '<td class="num" colspan="5">' + totalCredits + "</td>";

tableHtml += "</tr></tfoot>";

tableHtml += "</table>";

document.querySelector("#area").innerHTML = tableHtml;