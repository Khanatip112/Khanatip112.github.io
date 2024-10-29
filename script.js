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

    // เลื่อนลงไปยังหน้าใหม่
    window.scrollBy({
        top: window.innerHeight, // เลื่อนลงไปยังความสูงของหน้าจอ
        behavior: 'smooth' // การเลื่อนแบบนุ่มนวล
    });
}

// ฟังก์ชันเพื่อซ่อนหน้าใหม่
function removePage() {
    const newPage = document.getElementById("newPage");
    
    // เลื่อนขึ้นไปยังหน้าก่อนหน้า
    window.scrollBy({
        top: -window.innerHeight, // เลื่อนขึ้นไปยังความสูงของหน้าจอ
        behavior: 'smooth' // การเลื่อนแบบนุ่มนวล
    });

    // รอ 400ms (ระยะเวลาอนิเมชั่น) แล้วซ่อนหน้าใหม่
    setTimeout(() => {
        newPage.style.display = "none"; // ซ่อนหน้าใหม่
    }, 400);
}
