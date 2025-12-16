//bai1
sum = 0;
for (let i = 1; i <= 100; i++) {
    sum = sum + i;
}
console.log('Tổng từ 1 đến 100 là :', sum);

//bai2
for (let i = 2; i <= 9; i++) {
    console.log("Bảng cửu chương", i);

    for (let x = 1; x <= 9; x++) {
        sum = x * i;
        console.log(x, 'X', i, '=', sum);
    }
}

//bai3 
const array = [];
for (let i = 1; i <= 99; i++) {
    if (i % 2 == 1) {
        array.push(i);
    }
}
console.log("các số lẻ của mảng là", array);

//bai4
for (let i = 1; i <= 10; i++) {
    console.log("user", i, "example.com");
}

//bai5
const arry = [
    { "month": 1, "total": 500 },
    { "month": 2, "total": 600 },
    { "month": 3, "total": 700 },
    { "month": 4, "total": 800 },
    { "month": 5, "total": 900 },
    { "month": 6, "total": 1000 },
    { "month": 7, "total": 1100 },
    { "month": 8, "total": 1200 },
    { "month": 9, "total": 1300 },
    { "month": 10, "total": 1400 },
    { "month": 11, "total": 1500 },
    { "month": 12, "total": 1600 },
]
let start = 0;
for (let i = 0; i < arry.length; i++) {
    start = start + arry[i].total;
}
console.log("Tổng doanh thu năm là", start);
