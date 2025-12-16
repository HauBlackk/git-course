// bài 1
const car = {
    make: "Toyota",
    model: "Corolla",
    years: 2021
}
console.log(car.years);

//bai2
const person = {
    name: "Hau",
    address: {
        street: "416 đào sư tích",
        city: "HCM",
        country: "Viet Nam"
    }
}
console.log(person.address.street);

//bai3
const student = {
    name: "Hau",
    address: {
        math: 9,
        english: 5
    }
}
console.log(student["address"]["math"]);

//bai4
const settings = {
    volume: 100,
    brightness: 50
}
student.volume = 90;
console.log(student.volume);

//bai5
const bike = {
}
bike.color="RED";
console.log(bike);

//bai6
const employee = {
    name: "Hau",
    age: "20"
}
delete employee.age;
console.log(employee);

//bai7

var school = {
    classA: ["An", "Bình", "Châu"],
    classB: ["Đào", "Hương", "Giang"]
}
console.log(school);
