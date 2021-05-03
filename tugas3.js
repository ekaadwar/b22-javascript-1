const printSegitiga = "7";

if (typeof printSegitiga == "number") {
  let part = "";
  for (let i = printSegitiga; i > 0; i--) {
    for (let j = 1; j <= i; j++) {
      part += j + "";
    }
    console.log(part);
    part = "";
  }
} else {
  console.log("Data Harus Number");
}
