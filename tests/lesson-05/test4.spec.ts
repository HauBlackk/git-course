import { test } from '@playwright/test';
import { title } from 'process';
test('Ex4', async ({ page }) => {
    const Arry = [
        { title: 'Bắt cá sấu hỏa tiễn 136 kg trên sông Mississippi', Content: 'Đó là con cá sấu hỏa tiễn dài nhất mà tôi từng gặp, đồng thời lớn nhất về chu vi và trọng lượng. Con cá này có bề ngang đặc biệt rộng với phần đầu và thân khổng lồ. Hình thái hàm và vây hé lộ nhiều khả năng nó rất già.' },
        { title: 'Lý do Thủ tướng Thái Lan giải tán quốc hội sớm', Content: 'Thủ tướng Thái Lan Anutin Charnvirakul tối 11/12 tuyên bố ông "trả lại quyền lực cho nhân dân", tiến hành giải tán quốc hội và mở đường cho cuộc bầu cử sớm hơn so với kế hoạch trước đó. Ban đầu ông Anutin dự kiến giải tán quốc hội vào cuối tháng 1 và bầu cử vào tháng 3 hoặc đầu tháng 4 năm sau.' },
        { title: 'Mở rộng nhóm mua nhà xã hội không cần bốc thăm ở Hà Nội', Content: 'Nội dung trên nằm trong Nghị quyết sửa đổi quy định về chính sách bồi thường, tái định cư làm dự án cải tạo, chỉnh trang đô thị được HĐND TP Hà Nội khóa XVI thông qua tại kỳ họp 29.' },
        { title: 'Bác sĩ Trung Quốc gợi ý ba thực phẩm màu đen bổ thận', Content: 'Trước mâu thuẫn Đông Tây y về việc dùng thực phẩm đen bổ thận, bác sĩ Hùng Vĩnh Tường chọn lọc ba món ăn gồm mộc nhĩ, việt quất và nho đen đáp ứng tiêu chuẩn ít phốt pho, ít kali an toàn cho thận' },
        { title: 'Kình ngư Mỹ Tiên giúp Việt Nam tạo kỳ tích sau sự cố ở SEA Games 33', Content: 'Mỹ Tiên bước vào chung kết bơi tiếp sức 4x200m tự do, một ngày sau sự cố ở lễ trao HC bạc bơi hỗn hợp 400m nữ. Cô bật khóc khi nhận góp ý từ Phó chủ tịch kiêm Tổng thư ký Hiệp hội thể thao dưới nước Việt Nam (VASA) Đinh Việt Hùng (áo trắng).' },
        { title: 'Bóng chuyền nữ Việt Nam vào chung kết SEA Games 33', Content: 'Tại nhà thi đấu Huamark, Thanh Thúy và đồng đội tự tin bước vào trận đấu với Philiipines. Đây là lần thứ tư hai đội tuyển gặp nhau trong năm 2025. Ở ba lần trước, phần thắng đều thuộc về Việt Nam.' },
        { title: 'Kẻ quấy rối thân quen', Content: 'Đầu dây bên kia, con gái tôi - 18 tuổi, đang học trung học tại Mỹ - nghẹn giọng kể về người bạn cùng trường vừa bị chính bạn trai xâm hại.' },
        { title: 'Văn - Sử - Địa thất thế', Content: 'Tôi đặc biệt tâm đắc với lời giới thiệu của tiến sĩ Nguyễn Xuân Xanh, trong đó có đoạn: "Muốn tinh thần của một dân tộc trở nên mạnh mẽ, hãy dạy khoa học, và cả giáo dục nhân văn' },
        { title: 'Chuyên gia gợi ý hướng phát triển kinh tế dữ liệu tại Việt Nam', Content: 'Để phát triển kinh tế dữ liệu, các chuyên gia cho rằng cần có phương pháp đo lường, học hỏi một số thị trường đi trước như Mỹ, Trung Quốc, EU.' },
        { title: 'Loạt smartphone 2025 đắt nhất bán tại Việt Nam', Content: 'Smartphone gập cao cấp của Samsung cải tiến mạnh về thiết kế, vẫn giữ nét vuông vắn của thế hệ trước nhưng được làm mỏng và nhẹ hơn, cho cảm giác sử dụng tương tự điện thoại dạng thanh khi gập.' },
        { title: 'Honor X9d - smartphone siêu bền pin 8.300 mAh', Content: 'Honor X9d có khả năng chống nước nóng IP69K, giảm hư hại khi thả rơi 2,5 m, xe cán qua, đi kèm viên pin 8.300 mAh lớn nhất phân khúc.' }

    ]
    await test.step('click Bai4', async () => {
        await page.goto("https://material.playwrightvn.com/");
        await page.locator("//a[text()='Bài học 4: Personal notes']").click();
    })

    await test.step("them 10 note", async () => {
        for (const note of Arry) {
            await page.locator("//input[@id='note-title']").fill(note.title);
            await page.locator("//textarea[@id='note-content']").fill(note.Content);
            await page.locator("//button[@id='add-note']").click();

        }
    })

    await test.step("tim kiem theo tên", async () => {
        await page.locator("//input[@id='search']").fill("AI");
    })
})