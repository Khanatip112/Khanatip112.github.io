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
    const moreInfo = document.querySelector('.more-info');
    const toggleButton = document.querySelector('.expand-toggle');

    if (moreInfo.style.display === 'none' || moreInfo.style.display === '') {
        moreInfo.style.display = 'block'; // แสดงข้อมูลเพิ่มเติม
        toggleButton.textContent = '-'; // เปลี่ยนเครื่องหมายเป็นลบ
    } else {
        moreInfo.style.display = 'none'; // ซ่อนข้อมูลเพิ่มเติม
        toggleButton.textContent = '+'; // เปลี่ยนเครื่องหมายเป็นบวก
    }
}
