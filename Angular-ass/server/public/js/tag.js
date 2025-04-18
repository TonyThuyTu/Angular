
  const input = document.querySelector('input[name=techstack]');
  new Tagify(input, {
    delimiters: ",", // Phân tách bằng dấu phẩy
    originalInputValueFormat: valuesArr => valuesArr.map(item => item.value).join(",")
  });

