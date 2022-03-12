// bài 1
console.log("bai 1:");
let number1 = parseInt(prompt("nhap vao so thu 1"));
let number2 = parseInt(prompt("nhap vao so thu 2"));
const sqrt1 = Math.sqrt(number1);
const sqrt2 = Math.sqrt(number2);
console.log("can bac hai cua so thu 1 la: " + sqrt1);
console.log("can bac hai cua so thu 2 la: " + sqrt2);
console.log();
// bài 2
console.log("bai 2: ");
let h = prompt("nhap vao chieu cao");
let a = prompt("nhap vao canh day: ");
const S = (a*h*h) / 2
console.log("dien tich hinh tam giac la: " + S);
console.log();
// bài 3
console.log("bai 3: ");
let C = prompt("nhap vao do C: ");
const F = C* 1.8 + 32;
console.log("Ket qua la: " + F + "F");
console.log();
// bài 4
console.log("bai 4: ");
let km = prompt("nhap vao so kilomet");
const m = km * 1000;
console.log("do dai quang duong la " + m + "m");