// ฟังก์ชันเพื่อแสดงหรือซ่อนเมนู
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.classList.toggle("show");
}

// ฟังก์ชันเพื่อเลื่อนลงไปยังส่วนถัดไป
function scrollToNext() {
    window.scrollBy({
        top: window.innerHeight,
        behavior: 'smooth'
    });
}

// ฟังก์ชันเพื่อแสดงหรือซ่อนข้อมูลเพิ่มเติมในส่วน About Me
function toggleAbout() {
    const newPage = document.getElementById("newPage");

    // ตรวจสอบว่าใหม่แสดงอยู่หรือไม่
    if (newPage.style.display === "none" || newPage.style.display === "") {
        newPage.style.display = "block"; // แสดงหน้าใหม่
    } else {
        newPage.style.display = "none"; // ซ่อนหน้าใหม่
    }
}
