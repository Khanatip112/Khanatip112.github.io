// ฟังก์ชันเพื่อแสดงหรือซ่อนเมนู
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

function toggleAbout() {
    const moreInfo = document.querySelector(".more-info");
    const button = document.querySelector(".expand-toggle");

    if (moreInfo.style.display === "none") {
        moreInfo.style.display = "block";
        button.textContent = "-"; // เปลี่ยนเป็นเครื่องหมายลบ
    } else {
        moreInfo.style.display = "none";
        button.textContent = "+"; // เปลี่ยนกลับเป็นเครื่องหมายบวก
    }
}


// ฟังก์ชันเพื่อเลื่อนลงไปยังส่วนถัดไป
function scrollToNext() {
    window.scrollBy({
        top: window.innerHeight, // เลื่อนลงไปยังความสูงของหน้าจอ
        behavior: 'smooth' // การเลื่อนแบบนุ่มนวล
    });
}
