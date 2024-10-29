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

function addAboutMePage() {
    document.getElementById('newAboutMePage').style.display = 'block';
    document.getElementById('about').style.display = 'none'; // ซ่อนหน้า About Me
    // เพิ่มแอนิเมชันที่ต้องการ
}

function removeAboutMePage() {
    document.getElementById('newAboutMePage').style.display = 'none';
    document.getElementById('about').style.display = 'block'; // แสดงหน้า About Me
    // เพิ่มแอนิเมชันที่ต้องการ
}

function addEducationPage() {
    document.getElementById('newEducationPage').style.display = 'block';
    document.getElementById('education').style.display = 'none'; // ซ่อนหน้า Education
    // เพิ่มแอนิเมชันที่ต้องการ
}

function removeEducationPage() {
    document.getElementById('newEducationPage').style.display = 'none';
    document.getElementById('education').style.display = 'block'; // แสดงหน้า Education
    // เพิ่มแอนิเมชันที่ต้องการ
}
