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
    const newPage = document.getElementById('newAboutMePage');
    newPage.style.display = 'block';
    newPage.style.animation = 'slideDown 0.5s ease forwards'; // เพิ่มการเคลื่อนไหวเลื่อนลง
}

function removeAboutMePage() {
    const newPage = document.getElementById('newAboutMePage');
    newPage.style.animation = 'slideUp 0.5s ease forwards'; // เพิ่มการเคลื่อนไหวเลื่อนขึ้น
    newPage.addEventListener('animationend', function() {
        newPage.style.display = 'none'; // ซ่อนหน้าหลังจากแอนิเมชันเสร็จสิ้น
    });
}

function addEducationPage() {
    const newPage = document.getElementById('newEducationPage');
    newPage.style.display = 'block';
    newPage.style.animation = 'slideDown 0.5s ease forwards'; // เพิ่มการเคลื่อนไหวเลื่อนลง
}

function removeEducationPage() {
    const newPage = document.getElementById('newEducationPage');
    newPage.style.animation = 'slideUp 0.5s ease forwards'; // เพิ่มการเคลื่อนไหวเลื่อนขึ้น
    newPage.addEventListener('animationend', function() {
        newPage.style.display = 'none'; // ซ่อนหน้าหลังจากแอนิเมชันเสร็จสิ้น
    });
}
