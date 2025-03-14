Todo List Application với React

link drive: https://drive.google.com/drive/folders/11zwqEtHzlcjsh8-mkVrGCaz9g3iVpA9y

Giới thiệu: Đây là một ứng dụng Todo List đơn giản được xây dựng bằng React. Ứng dụng hỗ trợ các thao tác cơ bản như thêm, sửa, xóa, đánh dấu hoàn thành và cung cấp trải nghiệm tốt với thiết kế hiện đại, responsive. Dự án cũng bao gồm các bài kiểm thử bằng Jest và React Testing Library để đảm bảo tính chính xác và ổn định. CÔNG NGHỆ SỬ DỤNG" React: Xây dựng giao diện người dùng. Jest & React Testing Library: Viết unit test và kiểm thử UI. Tailwind CSS: Tạo giao diện hiện đại, dễ tùy chỉnh. shadcn/ui: Hiển thị alert thông báo. Lucide React: Cung cấp icon cho ứng dụng.

CÀI ĐẶT VÀ CHẠY ỨNG DỤNG: Clone repository git clone repository-https://github.com/CaoNguyenHoaiNam/SE1841_Group3_Lab3.git Cài đặt dependencies npm install Chạy ứng dụng npm run dev CÁC CHỨC NĂNG CHÍNH:

Thêm mới todos

Đánh dấu todos là hoàn thành/chưa hoàn thành

Chỉnh sửa todos

Xóa todos

Kiểm tra dữ liệu đầu vào (Input validation)

Thiết kế responsive, tương thích trên nhiều thiết bị

Hiển thị feedback trực quan cho các hành động

QUẢN LÝ STATE:

Ứng dụng sử dụng React useState để quản lý trạng thái:

Danh sách todos: Mảng chứa danh sách các công việc

Trạng thái nhập todo mới

Chế độ chỉnh sửa todo

KIỂM THỬ (Testing):

Chạy toàn bộ test npm test

Nội dung kiểm thử

Component Rendering

Hiển thị danh sách todo ban đầu

Render từng todo item

Kiểm tra sự xuất hiện của input và các button

User Interactions

Thêm mới todos

Đánh dấu todos là hoàn thành

Chỉnh sửa todos

Xóa todos

Kiểm tra validation input

State Management

Cập nhật danh sách todos khi có thay đổi

Chuyển trạng thái edit mode

Hiển thị alert thông báo

Edge Cases

Kiểm tra input rỗng

Kiểm tra validation khi chỉnh sửa

Xử lý khi có nhiều todos cùng lúc
