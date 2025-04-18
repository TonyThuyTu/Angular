function updateEndDate() {
    const startDate = document.getElementById('startDate').value;
    const endDate = document.getElementById('endDate');
    
    // Cập nhật min của endDate sao cho không thể chọn ngày trước startDate
    endDate.setAttribute('min', startDate);
  }