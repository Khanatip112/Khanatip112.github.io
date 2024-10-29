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

// ฟังก์ชันเพื่อแสดงหรือซ่อนข้อมูลเพิ่มเติมในส่วน About Me
function toggleAbout() {
    const moreInfo = document.querySelector(".more-info");
    const newPage = document.getElementById("newPage");
    if (moreInfo.style.display === "none" || moreInfo.style.display === "") {
        moreInfo.style.display = "block";
        newPage.style.display = "block"; // แสดงหน้าใหม่
    } else {
        moreInfo.style.display = "none";
        newPage.style.display = "none"; // ซ่อนหน้าใหม่
    }
}

// ฟังก์ชันเพื่อแสดงหรือซ่อนหน้าใหม่
function toggleNewPage() {
    const newPage = document.getElementById("newPage");
    if (newPage.style.display === "none" || newPage.style.display === "") {
        newPage.style.display = "block"; // แสดงหน้าใหม่
    } else {
        newPage.style.display = "none"; // ซ่อนหน้าใหม่
    }
}
