# 🔗 URL Shortener - Node.js + Express

Một ứng dụng rút gọn link đơn giản, dễ dùng, có thống kê lượt click và giao diện thân thiện.  
Dự án triển khai bằng Node.js, Express, MongoDB và Bootstrap.  
Hỗ trợ Docker và có thể deploy miễn phí lên Render.com.

---

## 🚀 Tính năng

- ✅ Nhập link gốc để tạo link rút gọn.
- 🔁 Chuyển hướng khi truy cập link rút gọn.
- 📊 Thống kê số lần click, ngày tạo.
- ⏳ Tự động hết hạn sau số ngày cấu hình.
- 🎨 Giao diện đẹp, dễ sử dụng với Bootstrap.

---

## 🛠️ Công nghệ sử dụng

- **Backend**: Node.js + Express
- **Database**: MongoDB
- **View Engine**: EJS
- **UI**: Bootstrap 5
- **Triển khai**: Docker + Render.com (Free)

---

## 📦 Cài đặt cục bộ

```bash
git clone https://github.com/ahryxx0602/url-shortener-project.git
cd url-shortener-project
npm install
npm start
```

## 🐳 Chạy bằng Docker

Nếu bạn đã cài đặt Docker, bạn có thể build và chạy ứng dụng dễ dàng:

```bash
docker build -t url-shortener .
docker run -p 3000:3000 --env-file .env url-shortener
```

## ⚙️ Cấu hình môi trường (.env)

Tạo một file `.env` tại thư mục gốc và điền các thông số sau:

```

PORT=3000
MONGO_URI=mongodb://localhost:27017/urlshortener
BASE_URL=http://localhost:3000
EXPIRATION_DAYS=30
```
