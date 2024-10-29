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

// ฟังก์ชันเพื่อเพิ่มหน้าใหม่
function addPage() {
    const newPage = document.getElementById("newPage");
    newPage.style.display = "block"; // แสดงหน้าใหม่

    // เพิ่มอนิเมชั่นการเลื่อนลง
    newPage.style.transform = "translateY(-100%)"; // เริ่มที่ตำแหน่งเหนือหน้า
    setTimeout(() => {
        newPage.style.transition = "transform 0.5s ease-in-out"; // ตั้งเวลาสำหรับการเปลี่ยนแปลง
        newPage.style.transform = "translateY(0)"; // เลื่อนลงมาที่ตำแหน่งปกติ
    }, 10); // รอสักครู่เพื่อให้การแสดงผลทำงาน
}

// ฟังก์ชันเพื่อซ่อนหน้าใหม่
function removePage() {
    const newPage = document.getElementById("newPage");
    
    // เพิ่มอนิเมชั่นการเลื่อนขึ้น
    newPage.style.transition = "transform 0.5s ease-in-out"; // ตั้งเวลาสำหรับการเปลี่ยนแปลง
    newPage.style.transform = "translateY(-100%)"; // เลื่อนขึ้นไปเหนือหน้า

    setTimeout(() => {
        newPage.style.display = "none"; // ซ่อนหน้าใหม่หลังจากเลื่อนขึ้น
    }, 500); // รอให้การเลื่อนเสร็จสิ้นก่อนซ่อน
}
