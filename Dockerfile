FROM node:18

# Tạo thư mục chứa app
WORKDIR /app

# Cài đặt dependency
COPY package*.json ./
RUN npm install

# Copy toàn bộ source code
COPY . .

# Mở đúng cổng mà server.js đang lắng nghe (PORT=5000)
EXPOSE 5000

# Chạy app
CMD ["npm", "start"]
