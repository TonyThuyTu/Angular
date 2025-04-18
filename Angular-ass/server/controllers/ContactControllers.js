const Contact = require('../models/ContactModels');

// Gửi liên hệ (POST từ frontend)
exports.createContact = async (req, res) => {
  try {
    const { name, email, phone, message } = req.body;
    
    if (!name || !email || !phone || !message) {
      return res.status(400).json({ error: "Vui lòng điền đầy đủ thông tin" });
    }

    const newContact = new Contact({ name, email, phone, message });
    await newContact.save();

    res.status(200).json({ message: "Gửi liên hệ thành công!" });
  } catch (error) {
    console.error("Lỗi gửi liên hệ:", error);
    res.status(500).json({ error: "Đã xảy ra lỗi khi gửi liên hệ" });
  }
};


// Trang danh sách liên hệ
exports.getContactsPage = async (req, res) => {
  try {
    const contacts = await Contact.find();  // Lấy tất cả các liên hệ từ DB
    res.render("contacts", {
      title: "Danh sách liên hệ",
      contacts,
      success: req.query.success,
      error: req.query.error
    });
  } catch (error) {
    console.error("Lỗi khi lấy danh sách liên hệ:", error);
    res.status(500).send("Lỗi khi lấy danh sách liên hệ");
  }
};

// API lấy danh sách liên hệ (dành cho mục đích quản lý)
exports.getContacts = async (req, res) => {
  try {
    const contacts = await Contact.find();  // Lấy tất cả các liên hệ từ DB
    res.status(200).json({ contacts });  // Trả về dữ liệu dưới dạng JSON
  } catch (error) {
    console.error("Lỗi khi lấy danh sách liên hệ:", error);
    res.status(500).json({ error: "Đã xảy ra lỗi khi lấy danh sách liên hệ" });
  }
};
