// ฟังก์ชันเพื่อแสดงหรือซ่อนเมนู
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

// ฟังก์ชันเพื่อเลื่อนลงไปยังส่วนถัดไป
function scrollToNext() {
    window.scrollBy({
        top: window.innerHeight, // เลื่อนลงไปยังความสูงของหน้าจอ
        behavior: 'smooth' // การเลื่อนแบบนุ่มนวล
    });
}

// ฟังก์ชันเพื่อแสดงหรือซ่อนข้อมูลเพิ่มเติมใน About Me
function toggleAbout() {
    const moreInfo = document.querySelector(".more-info");
    const toggleButton = document.querySelector(".expand-toggle");

    if (moreInfo.style.display === "block") {
        moreInfo.style.display = "none"; // ซ่อน
        toggleButton.textContent = "+"; // เปลี่ยนเป็นเครื่องหมายบวก
    } else {
        moreInfo.style.display = "block"; // แสดง
        toggleButton.textContent = "-"; // เปลี่ยนเป็นเครื่องหมายลบ
    }
}
