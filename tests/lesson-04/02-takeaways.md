### JS Phạm vi của Biến (Scope)

* **Toàn cục (global)**
  - Không nằm trong bất kỳ khối (block) hay hàm (function) nào.
* **Function scope (Hàm)**
  - Biến được khai báo bên trong một hàm cụ thể.
* **Block scope (Khối)**
  - Biến được khai báo bên trong một khối cụ thể (ví dụ: `if`, `for`, `while`, hoặc dấu ngoặc nhọn `{}`).

* **Hoisting**: JavaScript di chuyển các khai báo biến lên đầu phạm vi của chúng trước khi thực thi code.

---


### Câu Điều kiện Nâng cao

* **Break**
  - Dùng để thoát hoàn toàn khỏi vòng lặp ngay lập tức khi điều kiện được thỏa mãn.

```javascript
// Thoát khi tìm thấy giá trị
for (let i = 0; i < 10; i++) {
if (i === 5) {
break; // Thoát vòng lặp khi i = 5
}
console.log(i);
}
// Output: 0, 1, 2, 3, 4
```
* **Continue**
    - continue dùng để bỏ qua phần còn lại  của vòng lặp hiện tại và chuyển sang lần lặp tiếp theo.
```javascript
// Bỏ qua số chẵn
for (let i = 0; i < 10; i++) {
if (i % 2 === 0) {
continue; // Bỏ qua số chẵn
}
console.log(i);
}
// Output: 1, 3, 5, 7, 9
```
* **Else**
    - Thực thi code khác nhau cho trường hợp true và false
```javascript 
let score = 75;

if (score >= 60) {
console.log("Bạn đã qua môn");
} else {
console.log("Bạn cần học lại");
}
```
* **Ternary operator**
    - Cách viết ngắn gọn cho if...else đơn giản
```javascript
const age = 75;
let status = (age >= 65) ? "Nghỉ hưu" : "Lao động";
console.log(status);
```
* **for...in Loop**
    - Dùng để duyệt qua các thuộc tính (properties) có thể đếm được của một object, bao gồm cả thuộc tính kế thừa.
```javascript
const person = {
    name: "Hau",
    age: 20,
    city: "HCM",
}
for (let property in person) {
    console.log(`property: ${property}`);
    console.log(`property: ${person[property]}`);
}
// Output:
// name: Hau
// age: 30
// city: HCM
```

---
### Utils = tiện ích ###

* **trim()**
    - cắt đi khoảng trắng ở đầu và ở cuối của mỗi chuỗi 
```javascript
let classNam = "  Hậu đen";
console.log(classNam);
console.log(classNam.trim());
```
* **toLowerCase()**
    - viết in thường tất cả các chuỗi 

* **toUpperCase()**
    - viết in hoa tất cả các chuỗi

* **includes()**
    - trả về Boolean, kiểm tra chuỗi có bao gồm chuỗi con nào hay không

* **replace()**
    - thay thế 1 chuỗi bằng 1 chuỗi khác
```javascript
let className = "Hậu Black";
console.log(className.replace("Hậu", "Goku"));
```
* **split()** 
    - chia chuỗi thành mảng

```javascript
let emalis = "votrunghau@gmail.com, hieuvo@gmail.com, son@gmail.com";
const arrEmails = emalis.split("@");
console.log(arrEmails);
```
* **substring()** 
    - chia chuỗi cha thành 1 chuỗi con

```javascript
let className = "Hậu Black";
console.log(className.substring(0,3));
```
* **indexOf()**
    - xác định vị trí của 1 cái chuỗi hoặc là 1 kí tự nào đó trong chuỗi
    - nếu đối số truyền vào không nằm trong chuỗi sẽ ra -1 
```javascript
let className = "Hậu Black";
console.log(className.indexOf("l"));
// in ra số 5 
```

