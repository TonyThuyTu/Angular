// helpers/dateDiff.js
module.exports = function (startDate, endDate) {
    if (!endDate) return "Đang thực hiện";
    const start = new Date(startDate);
    const end = new Date(endDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays; // Trả về chỉ số ngày, không cần thêm từ "ngày"
};
