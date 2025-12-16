//bai1
function multiply(a, b) {
    sum = a * b;
    console.log(sum);
}
multiply(5, 4);
multiply(4, 10);

//bai2
function findMin(a, b, c) {
    return Math.min(a, b, c);
}
console.log(findMin(1, 2, 3));
console.log(findMin(1, 5, 4));

//bai3
function getTopStudents(students, threshold) {
    let topStudents = [];
    for (let i = 0; i < students.length; i++) {
        if (students[i].score >= threshold) {
            topStudents.push(students[i].name)
        }
    }
    return topStudents;

}
let studentList = [
    { name: "Hậu", score: "70" },
    { name: "Huy", score: "90" },
    { name: "Tiến", score: "70" },
    { name: "Mai", score: "95" },
];

let result = getTopStudents(studentList, 90);
console.log(result);

//bai4
function calculateInterest(principal, rate, years){
    const total = principal + principal * rate * years/100;
    return total;
}
console.log(calculateInterest(100,5,10));