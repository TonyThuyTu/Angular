document.addEventListener("DOMContentLoaded", function () {
    const startDateInput = document.getElementById("projectStartDate");
    const endDateInput = document.getElementById("projectEndDate");
    const form = document.getElementById("addProjectForm");
    const nameInput = document.getElementById("projectName");
    const descriptionInput = document.getElementById("projectDescription");
    const techstackInput = document.getElementById("projectTechstack");
    const linkInput = document.getElementById("projectLink");

    if (startDateInput && endDateInput) {
      // Khi người dùng chọn ngày bắt đầu
      startDateInput.addEventListener("change", function () {
        const selectedStartDate = startDateInput.value;
        if (selectedStartDate) {
          // Gán min cho ô endDate
          endDateInput.min = selectedStartDate;

          // Nếu ngày kết thúc hiện tại nhỏ hơn ngày bắt đầu -> reset
          if (endDateInput.value && endDateInput.value < selectedStartDate) {
            endDateInput.value = "";
          }
        }
      });

      // Thêm validate khi submit form
      form.addEventListener("submit", function (event) {
        // Kiểm tra nếu chưa nhập tên dự án
        if (!nameInput.value) {
          event.preventDefault(); // Ngừng submit
          alert("Bạn cần nhập tên dự án.");
          return;
        }

        // Kiểm tra nếu ngày bắt đầu chưa được chọn
        const startDate = new Date(startDateInput.value);
        if (!startDateInput.value) {
          event.preventDefault();
          alert("Bạn cần chọn ngày bắt đầu.");
          return;
        }

        // Kiểm tra nếu ngày kết thúc nhỏ hơn ngày bắt đầu
        const endDate = new Date(endDateInput.value);
        if (endDate && endDate < startDate) {
          event.preventDefault(); // Ngừng submit
          alert("Ngày kết thúc không thể nhỏ hơn ngày bắt đầu.");
          return;
        }

        // Kiểm tra nếu mô tả không được nhập
        const description = descriptionInput.value;
        if (!description) {
          event.preventDefault();
          alert("Mô tả không được để trống.");
          return;
        }

        // Kiểm tra nếu techstack không được nhập
        const techstack = techstackInput.value;
        if (!techstack) {
          event.preventDefault();
          alert("Techstack không được để trống.");
          return;
        }

        // Kiểm tra nếu link không hợp lệ
        const link = linkInput.value;
        if (link && !/^https?:\/\/.+/.test(link)) {
          event.preventDefault();
          alert("Link dự án không hợp lệ.");
          return;
        }
      });
    }
  });
