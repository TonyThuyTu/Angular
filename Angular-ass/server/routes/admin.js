const express = require("express");
const router = express.Router();

// Import Controllers
const homeController = require("../controllers/HomeControllers");
const contactController = require("../controllers/ContactControllers");
const projectController = require("../controllers/ProjectControllers");

// Import Project Routes
const projectRoutes = require("./projectRoutes");  // Liên kết đến file project.js

// Home page route
router.get("/", homeController.getHomePage);

// Projects page route
router.use("/projects", projectRoutes);  // Sử dụng projectRoutes

// API route cho Angular (Dành cho frontend ứng dụng Angular)
router.get("/api/projects", projectController.getProjectsAPI);  // Lấy tất cả các dự án
router.get('/api/projects/:id', projectController.getProjectById);  // Lấy chi tiết một dự án qua ID

// Contact page route (Frontend)
router.get("/contacts", contactController.getContactsPage);

// API route để tạo liên hệ
router.post("/api/contacts", contactController.createContact);  // Tạo liên hệ (POST)

// Nếu bạn có thêm các API khác, cũng cần phải định rõ các route tương tự
// Ví dụ: router.get('/api/contact', ...);

// Export router
module.exports = router;
