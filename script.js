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
   
