// helpers/formatDate.js
module.exports = function(date) {
    const d = new Date(date);
    const day = ("0" + d.getDate()).slice(-2); // Lấy ngày (2 chữ số)
    const month = ("0" + (d.getMonth() + 1)).slice(-2); // Lấy tháng (2 chữ số)
    const year = d.getFullYear(); // Lấy năm
  
    return `${day}/${month}/${year}`; // Trả về định dạng ngày/tháng/năm
  };
  