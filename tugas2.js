const bhsIndo = 90,
  bhsIngg = 89,
  mtk = 80,
  ipa = 69;

let average = (bhsIndo + bhsIngg + mtk + ipa) / 4;
let grade;

if (average >= 90 && average <= 100) {
  grade = "A";
} else if (average >= 80) {
  grade = "B";
} else if (average >= 70) {
  grade = "C";
} else if (average >= 60) {
  grade = "D";
} else if (average >= 0) {
  grade = "E";
} else {
  grade = "Data Salah";
}

console.log(`
    Rata2 = ${average}
    Grade = ${grade}
`);
