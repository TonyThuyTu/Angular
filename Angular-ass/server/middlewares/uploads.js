const multer = require("multer");
const path = require("path");

// Cấu hình lưu trữ
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");  // Thư mục lưu ảnh
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname));  // Đặt tên file là thời gian + phần mở rộng
  },
});

// Bộ lọc file: chỉ chấp nhận ảnh
const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png|gif/;
  const extname = fileTypes.test(path.extname(file.originalname).toLowerCase());
  const mimetype = fileTypes.test(file.mimetype);
  if (extname && mimetype) {
    cb(null, true);  // Chấp nhận file ảnh hợp lệ
  } else {
    cb(new Error("Chỉ chấp nhận ảnh jpeg, jpg, png, gif!"));
  }
};

// Xuất middleware
const uploadImage = multer({ storage, fileFilter });

module.exports = uploadImage;
