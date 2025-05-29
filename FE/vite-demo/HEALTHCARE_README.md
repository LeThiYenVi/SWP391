# GenderCare - Phần mềm quản lý dịch vụ chăm sóc sức khỏe giới tính

## Mô tả
Hệ thống quản lý dịch vụ chăm sóc sức khỏe giới tính chuyên nghiệp, được thiết kế để hỗ trợ các cơ sở y tế và bệnh viện trong việc quản lý dịch vụ chăm sóc sức khỏe chuyên biệt.

## Tính năng chính

### 🔐 Xác thực & Bảo mật
- Đăng nhập an toàn với email/mật khẩu
- Đăng ký tài khoản với xác thực đầy đủ
- Bảo mật thông tin theo tiêu chuẩn y tế quốc tế
- Mã hóa dữ liệu cá nhân

### 🏥 Giao diện y tế chuyên nghiệp
- Thiết kế phù hợp với môi trường y tế
- Màu sắc trang nhã, dễ nhìn
- Responsive design cho mọi thiết bị
- Icons và hình ảnh y tế chuyên nghiệp

### 🩺 Quản lý dịch vụ chăm sóc
- Quản lý thông tin bệnh nhân
- Theo dõi lịch hẹn và điều trị
- Quản lý hồ sơ y khoa
- Báo cáo và thống kê

## Công nghệ sử dụng
- **Frontend**: React 18 + Vite
- **Routing**: React Router DOM
- **Styling**: CSS3 với CSS Variables
- **Icons**: Unicode Medical Symbols
- **Build Tool**: Vite

## Cài đặt và chạy

### Yêu cầu hệ thống
- Node.js 16+ 
- npm hoặc yarn

### Cài đặt
```bash
cd vite-demo
npm install
```

### Chạy development server
```bash
npm run dev
```

### Build production
```bash
npm run build
```

## Cấu trúc thư mục
```
src/
├── components/
│   └── authen-template/     # Template xác thực với theme y tế
├── pages/
│   ├── login/              # Trang đăng nhập
│   └── register/           # Trang đăng ký
└── assets/                 # Tài nguyên tĩnh
```

## Thiết kế giao diện

### Màu sắc chủ đạo
- **Primary**: #667eea (Xanh y tế)
- **Secondary**: #764ba2 (Tím nhạt)
- **Background**: #f8fafe (Xám nhạt)
- **Text**: #1a365d (Xanh đậm)

### Đặc điểm thiết kế
- Layout 2 cột: Branding + Form
- Gradient background chuyên nghiệp
- Animation floating cho medical icons
- Glass morphism effects
- Mobile-first responsive design

## Tính năng bảo mật
- Form validation thời gian thực
- Error handling chi tiết
- Loading states cho UX tốt hơn
- Privacy notice rõ ràng
- Terms & conditions integration

## Phát triển tiếp theo
- [ ] Tích hợp backend API
- [ ] Dashboard quản lý bệnh nhân
- [ ] Hệ thống appointment booking
- [ ] Medical records management
- [ ] Reports và analytics
- [ ] Multi-language support
- [ ] Dark mode theme

## Liên hệ
Dự án được phát triển cho hệ thống quản lý dịch vụ chăm sóc sức khỏe giới tính chuyên nghiệp.
