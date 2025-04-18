// controllers/homeController.js
exports.getHomePage = (req, res) => {
    res.render("home", { title: "Trang chủ Admin" });
};
  