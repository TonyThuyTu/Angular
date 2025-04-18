const Project = require("../models/ProjectModels");

// GET: Hiển thị trang quản lý dự án
exports.getProjectsPage = async (req, res) => {
  try {
    // Lấy tất cả dự án và sắp xếp theo startDate giảm dần
    const projects = await Project.find().sort({ startDate: -1 }); // -1 để sắp xếp giảm dần

    // Chuyển từng project thành plain object để tránh lỗi Handlebars
    const pureProjects = projects.map(project => project.toObject({ getters: true }));

    // Render trang và truyền dữ liệu đã sắp xếp
    res.render("projects", { projects: pureProjects });
  } catch (error) {
    console.error("Lỗi khi lấy dự án:", error);
    res.status(500).send("Có lỗi xảy ra khi lấy danh sách dự án.");
  }
};

// API: Trả về danh sách dự án dạng JSON
exports.getProjectsAPI = async (req, res) => {
  try {
    const projects = await Project.find().sort({ startDate: -1 });
    res.json(projects); // Trả về JSON
  } catch (error) {
    console.error("Lỗi API dự án:", error);
    res.status(500).json({ error: "Server error" });
  }
};

exports.getProjectById = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) return res.status(404).json({ message: "Project not found" });
    res.json(project);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Server error" });
  }
};



// GET: Hiển thị form thêm dự án
exports.addProjectForm = (req, res) => {
  res.render("addProject", { title: "Thêm Dự Án Mới" });
};

// POST: Xử lý thêm dự án
exports.addProject = async (req, res) => {
  const { name, description, techstack, link } = req.body;
  const startDate = new Date();
  const endDate = req.body.endDate ? new Date(req.body.endDate) : null;
  const image = req.file ? req.file.filename : null;

  if (!name || !description || !techstack || !link) {
    return res.status(400).send("Các trường bắt buộc phải được điền đầy đủ");
  }

  const techArray = techstack.split(',').map(item => item.trim());

  const newProject = new Project({
    name,
    description,
    techstack: techArray,
    link, 
    startDate,
    endDate,
    image,
  });

  try {
    await newProject.save();
    res.redirect("/projects");
  } catch (err) {
    console.error("Lỗi khi thêm dự án:", err);
    res.status(500).send("Có lỗi xảy ra khi thêm dự án");
  }
};

// Controller xử lý lấy dự án để sửa
exports.editProjectForm = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id).lean();
    if (!project) {
      return res.status(404).send("Dự án không tìm thấy");
    }

    // Truyền thông báo lỗi hoặc thành công vào view
    const successMessage = req.query.success || null;
    const errorMessage = req.query.error || null;

    res.render("EditProjects", {
      project,
      success: successMessage,
      error: errorMessage
    });
  } catch (err) {
    res.status(500).send("Không thể tải dữ liệu dự án");
  }
};



// Controller xử lý cập nhật dự án
exports.editProject = async (req, res) => {
  try {
    const { name, startDate, endDate, description, link, techstack } = req.body;

    // Kiểm tra các trường bắt buộc
    if (!name || !description || !techstack || !link) {
      return res.redirect(`/projects/edit/${req.params.id}?error=Các trường bắt buộc phải được điền đầy đủ`);
    }

    // Tạo dữ liệu cập nhật
    const updateData = {
      name,
      startDate,
      endDate,
      description,
      link,
      techstack: techstack.split(',').map(tag => tag.trim())  // Tách stack công nghệ thành danh sách
    };

    // Nếu có ảnh được tải lên, lưu tên file ảnh
    if (req.file) {
      updateData.image = req.file.filename;
    }

    // Cập nhật dự án
    const project = await Project.findByIdAndUpdate(req.params.id, updateData, { new: true });

    // Nếu không tìm thấy dự án
    if (!project) {
      return res.status(404).send("Dự án không tìm thấy");
    }

    // Chuyển hướng về trang danh sách dự án với thông báo thành công
    res.redirect(`/projects?success=Cập nhật thành công!`);
  } catch (err) {
    console.error("Lỗi khi cập nhật dự án:", err);
    // Chuyển hướng về trang sửa dự án và gửi thông báo lỗi
    res.redirect(`/projects/edit/${req.params.id}?error=Có lỗi xảy ra khi cập nhật`);
  }
};


// POST: Xử lý xóa dự án
exports.deleteProject = async (req, res) => {
  try {
    const project = await Project.findById(req.params.id);
    if (!project) {
      return res.status(404).send("Dự án không tìm thấy");
    }

    // Xác nhận xóa
    await Project.findByIdAndDelete(req.params.id);
    res.redirect("/projects");
  } catch (error) {
    console.error("Lỗi khi xóa dự án:", error);
    res.status(500).send("Lỗi khi xóa dự án: " + error.message);
  }
};
