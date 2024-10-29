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
    const newPage = document.getElementById("newPage");

    if (moreInfo.style.display === "block") {
        moreInfo.style.display = "none"; // ซ่อน
        toggleButton.textContent = "+"; // เปลี่ยนเป็นเครื่องหมายบวก
        newPage.style.display = "none"; // ซ่อนหน้าใหม่เมื่อปิด
    } else {
        moreInfo.style.display = "block"; // แสดง
        toggleButton.textContent = "-"; // เปลี่ยนเป็นเครื่องหมายลบ
        newPage.style.display = "none"; // ซ่อนหน้าใหม่เมื่อเปิด
    }
}

// ฟังก์ชันเพื่อแสดงหรือซ่อนหน้าใหม่
function toggleNewPage() {
    const newPage = document.getElementById("newPage");
    const toggleButton = document.querySelectorAll(".expand-toggle")[1]; // ดึงปุ่มที่สอง

    if (newPage.style.display === "block") {
        newPage.style.display = "none"; // ซ่อนหน้าใหม่
        toggleButton.textContent = "+"; // เปลี่ยนเป็นเครื่องหมายบวก
    } else {
        newPage.style.display = "block"; // แสดงหน้าใหม่
        toggleButton.textContent = "-"; // เปลี่ยนเป็นเครื่องหมายลบ
    }
}
