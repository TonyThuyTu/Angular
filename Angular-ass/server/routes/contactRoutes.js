const express = require('express');
const router = express.Router();
const contactController = require('../controllers/ContactControllers');

// Hiển thị trang danh sách liên hệ
router.get('/', contactController.getContactsPage);

// Xử lý khi người dùng gửi liên hệ
router.post('/', contactController.createContact);

module.exports = router;
