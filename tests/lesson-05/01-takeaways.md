### Function Nâng cao

* **Function Expression**
    - Định nghĩ function bằng cách gán cho nó 1 biến

```javascript
const hello = function (name) {
    return 'Hello' + name;
}
console.log(hello(' Hậu'))
```

* **Lambda function**
    - Còn gọi là Arrow Function, sử dụng dấu =>

```javascript
const helloo = (name) => {
    return `Heloo ${name}`;
}
console.log(helloo('Hậu'));
```
* **Anonymous function**

    - function không có tên, được sử dụng khi function chỉ cần dùng một lần hoặc làm callback


### DOM ###

**Document Object Model (Mô hình Đối tượng Tài liệu)**

**Nói ngắn gọn :**

* **Cấu trúc Cây:** DOM là một cấu trúc cây đại diện cho toàn bộ tài liệu HTML của trang web.

* **Giao diện:** Nó là một giao diện (API) cho phép JavaScript có thể truy cập, đọc, thay đổi và thao tác với các phần tử, nội dung và kiểu dáng trên trang web.

 **Một element**
 - bao gồm thẻ mở và thẻ đóng 
    
```html
 <option value="usa">United States</option>
```
 - thẻ tự đóng
 ```html
 <img src="image.jpg" alt="Image description"/>
<br/>
<hr/>
```
 - thẻ mở và thẻ đóng, thuộc tính, giá trị thuộc tính, text
 ```html
 <option value="usa">United States</option>
 ```

 **Các thẻ tiêu chuẩn thường gặp**
 - **Thẻ Cấu Trúc Cơ Bản:**

    - `<html>`: Thẻ gốc của trang
    - `<head>`: Chứa metadata: tiêu đề website, hiển thị Google
    - `<body>`: Nội dung của cả website hiển thị
    - `<div>`: Khối/container chung
    - `<span>`: Inline container
    - `<header>, <footer>, <nav>, <section>:` Thẻ ngữ nghĩa

 - **Thẻ Nội Dung:**

    - `<h1> đến <h6>`: Tiêu đề
    - `<p>`: Đoạn văn
    - `<a>`: Liên kết
    - `<img>`: Hình ảnh
    - `<ul>, <ol>, <li>`: Danh sách

 - **Các thẻ tiêu chuẩn thường gặp**

    - **Thẻ Form (Quan trọng cho Testing):**
    - `<form>`: Biểu mẫu
    - `<input>`: Ô nhập liệu (text, password, checkbox, radio, etc.)
    - `<button>`: Nút bấm
    - `<select> và <option>`: Dropdown
    - `<textarea>`: Vùng văn bản nhiều dòng

### Selector ###
* Có 3 loại selector thường dùng:
    - `XPath`: có 2 loại 
        - **Tuyệt đối** : đi dọc theo cây DOM bắt đầu bởi 1 /
        - **Tương đối** : tìm dựa vào đặc tính bắt đầu bởi 2 //
        VD: //tenthe[@thuoctinh=”gia tri”]
        //input[@id='username']
    - **Nên dùng XPath tương đối**
    -  `CSS selector`:
        - Ngắn gọn, performance cao
        - Dùng cho các trường hợp dễ tìm.
        - Không linh hoạt bằng XPath
        - VD: .add-to-cart
    - `Playwright selector`: 
        - Chỉ dùng riêng cho Playwright
        - Cú pháp ngắn gọn, không phụ thuộc vào cấu trúc DOM
        - Hướng tới “giống người dùng đang nhìn thấy gì”
        - VD: page.getByText(“Add to cart”);

**Vẫn cần học hiểu cả ba loại để có thể “cân” được mọi loại dự án. Có những dự án “thích” dùng CSS, “thích” dùng XPath, ta buộc phải
tuân theo.**

### Playwright basic syntax Các cú pháp cơ bản ###

* `test`: Đơn vị cơ bản để khai
báo một test
```javascript
import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {
// Code của test
});
```
* `step`: Đơn vị nhỏ hơn test,
để khai báo từng step của
test case
```javascript
import { test } from '@playwright/test';

test('<tên test>', async ({ page }) => {

await test.step('Tên step1', async () => {
// Code here
});

await test.step('Tên step2', async () => {
// Code here
});
});
```
 - `step nên được map 1-1 với test case
để dễ dàng maintain.`

- Navigate 
    - đi đến trang web nào đó
```javascript
import { test } from '@playwright/test';

test('Basic action', async ({ page }) => {
    await test.step("Step 1", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });
})
```
- Locate 
    - tương tác với các phần tử trang web đó
```javascript
import { test } from '@playwright/test';

test('Basic action', async ({ page }) => {
    await test.step("Step 1", async () => {
        await page.goto("https://material.playwrightvn.com/");
    });

    await test.step("click", async () => {
        await page.locator("//a[text()='Bài học 1: Register Page (có đủ các element)']").click();
    });
})
```
 - Input
1.  `Fill`: Giống việc bạn paste content vào một ô input
```javascript
    await page.locator("//input[@id='username']").fill("Hau Vo");
```
2.  `pressSequentially`: Giống việc bạn gõ từng chữ cái vào ô input
```javascript
    await page.locator("//input[@id='email']").pressSequentially("trunghau@gmail.com", { delay: 1_000 })
```
- Radio/checkbox
    - Lấy giá trị hiện tại đang là check hay không
        - const isChecked = page.locator("//input").isChecked();

    - Check/ uncheck
        - page.locator("//input").check(); page.locator("//input").setChecked(false);

- Select

```javascript
        await page.locator("//select[@id='country']").selectOption("United Kingdom");
```

- Upload file

```javascript
        await page.locator("//input[@type='file']").setInputFiles("tests\\data-test\\data-demo.txt");
```









