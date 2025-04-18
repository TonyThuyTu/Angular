// helpers/join.js
module.exports = function(array, separator) {
    if (!Array.isArray(array)) {
      return array; // Trả về nguyên giá trị nếu không phải là mảng
    }
    return array.join(separator || ', '); // Dùng dấu phẩy làm mặc định nếu không có separator
  };
  