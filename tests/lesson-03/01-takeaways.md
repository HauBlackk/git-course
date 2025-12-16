### Git
1. Câu lệnh thay đổi commit <br>
git commit --amend -m"massage"
2. Câu lệnh để restore lại vùng working directory<br>
git restore --staged < tên file > <br>
3. Câu lệnh để restore từ vùng repository trở về vùng working directory <br>
git reset HEAD~1 (1 = số lượng commit của mình) <br>
4. Câu lệnh để lấy code về máy <br>
git pull origin main
### Git branch <br>
1. Câu lệnh để chuyển qua nhánh <br>
git checkout tên file
2. Câu lệnh để xóa nhánh <br>
git branch -D tên nhánh <br>
3. Câu lệnh xem danh sách nhánh <br>
git branch <br>
4. tạo nhánh mới <br>
git branch tên nhánh mới
5. Vừa tạo vừa chuyển sang nhánh mới <br>
git checkout -b tên nhánh

### Conventions
```javascript
Conventions là quy tắc Code theo 1 format, dễ nhìn
Người khác trong team dễ đọc code
snake_case: chưa dùng
kebab-case: tên file
camelCase: tên biến
PascalCase: tên Class
```
### Object
```javascript
Object = đối tượng, dùng để lưu trữ tập hợp các giá trị vào cùng một biến hoặc hằng số
let/const <ten_object> = {
<thuoc_tinh>: <gia_tri>,
...
}
```
### Array
```javascript
Mảng là một cấu trúc dữ liệu được sử dụng để lưu trữ một tập hợp các giá trị (phần tử) theo một thứ tự xác định.
Độ dài mảng : length
Lấy phần tử theo index:
[0], [1], [2]
```

### Function
```javascript
Function = hàm, là đoạn code được đặt
tên và có thể tái sử dụng, thực hiện
1 nhiệm vụ hoặc 1 tính toán cụ thể.
Khai báo
function <nameFunction>() {
// code
}
```