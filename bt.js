console.log("bai 1:");
let number1 = parseInt(prompt("nhap vao so dau tien"));
let number2 = parseInt(prompt("nhap vao so thu hai"));
const squareRoot1 = Math.sqrt(number1);
const squareRoot2 = Math.sqrt(number2);
console.log("can bac hai cua so dau tien la: " + squareRoot1);
console.log("can bac hai cua so thu hai la: " + squareRoot2);
console.log();

console.log("bai 2: ");
let height = prompt("nhap vao chieu cao");
let width = prompt("nhap vao canh day: ");
const acreage = (height * width) / 2
console.log("dien tich hinh tam giac la: " + acreage);
console.log();

console.log("bai 3: ");
let cenciusDegree = prompt("nhap vao do C: ");
const fahrenheitDegree = cenciusDegree * 1.8 + 32;
console.log("Ket qua la: " + fahrenheitDegree + "F");
console.log();

console.log("bai 4: ");
let kilometer = prompt("nhap vao so kilomet");
const meter = kilometer * 1000;
console.log("do dai quang duong la " + meter + "m");