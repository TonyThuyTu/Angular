const express = require("express");
const router = express.Router();
const projectController = require("../controllers/ProjectControllers");
const uploadImage = require("../middlewares/uploads");

// Hiển thị trang quản lý dự án
router.get("/", projectController.getProjectsPage);

// Hiển thị form thêm dự án
router.get("/add", projectController.addProjectForm);

// Xử lý thêm dự án (có ảnh)
router.post("/add", uploadImage.single("image"), projectController.addProject);

// Hiển thị form sửa dự án
router.get("/edit/:id", projectController.editProjectForm);

// Xử lý sửa dự án (có thể có ảnh mới)
router.post("/edit/:id", uploadImage.single("image"), projectController.editProject);

// ✅ Xử lý xóa dự án
router.post("/delete/:id", projectController.deleteProject);

module.exports = router;
