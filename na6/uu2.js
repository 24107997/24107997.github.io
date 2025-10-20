// Hàm khi di chuột vào ảnh
function upDate(previewPic) {
    console.log("Sự kiện upDate được kích hoạt"); // kiểm tra xem hàm có chạy không
    console.log("Alt text:", previewPic.alt);
    console.log("Src:", previewPic.src);

    // Cập nhật văn bản hiển thị
    const imageDiv = document.getElementById('image');
    imageDiv.textContent = previewPic.alt;

    // Cập nhật hình nền
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

// Hàm khi rời chuột khỏi ảnh
function unDo() {
    console.log("Sự kiện unDo được kích hoạt");

    const imageDiv = document.getElementById('image');

    // Khôi phục văn bản gốc
    imageDiv.textContent = "Di chuột qua hình ảnh bên dưới để hiển thị tại đây";

    // Xóa hình nền
    imageDiv.style.backgroundImage = "url('')";
}
