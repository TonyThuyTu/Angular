const express = require("express");
const path = require("path");
const exphbs = require("express-handlebars");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const Handlebars = require("handlebars");
const cors = require("cors"); // <-- THÊM DÒNG NÀY

// Import helper
const dateDiff = require("./helper/date");
const formatDateHelper = require("./helper/formatDate");
const joinHelper = require("./helper/join");

// Khởi tạo dotenv
dotenv.config();

// Kết nối database
connectDB();

const app = express();

// ✅ CẤU HÌNH CORS để cho phép Angular truy cập
app.use(cors({
  origin: "http://localhost:4200", // FE Angular
  methods: ["GET", "POST"],
  allowedHeaders: ["Content-Type"]
}));

// Đăng ký helper cho Handlebars
Handlebars.registerHelper("formatDate", formatDateHelper);
Handlebars.registerHelper("join", joinHelper);

// Cấu hình body parser
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Static folder cho các tệp tin tĩnh
app.use(express.static(path.join(__dirname, "public")));
app.use("/uploads", express.static(path.join(__dirname, "uploads")));

// Cấu hình Handlebars
const hbs = exphbs.create({
  extname: "hbs",
  defaultLayout: "main",
  layoutsDir: path.join(__dirname, "views", "layouts"),
  partialsDir: path.join(__dirname, "views", "partials"),
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
  helpers: {
    dateDiff: dateDiff,
  },
});

app.engine("hbs", hbs.engine);
app.set("view engine", "hbs");
app.set("views", path.join(__dirname, "views"));

// Routes
const adminRoutes = require("./routes/admin");
app.use("/", adminRoutes);

// Khởi động server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`🚀 Server running on http://localhost:${PORT}`);
});
