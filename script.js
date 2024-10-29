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
    const expandToggle = document.querySelector('.expand-toggle'); // เครื่องหมายบวก
    const collapseToggle = document.querySelector('.collapse-toggle'); // เครื่องหมายลบ

    // แสดงหน้าใหม่
    newPage.style.display = "block";
    collapseToggle.style.display = "block"; // แสดงปุ่มลบ
    expandToggle.style.display = "none"; // ซ่อนปุ่มบวก

    // เลื่อนลงไปยังหน้าใหม่
    window.scrollTo({
        top: newPage.offsetTop,
        behavior: 'smooth' // การเลื่อนแบบนุ่มนวล
    });
}

// ฟังก์ชันเพื่อซ่อนหน้าใหม่
function removePage() {
    const newPage = document.getElementById("newPage");
    const expandToggle = document.querySelector('.expand-toggle'); // เครื่องหมายบวก
    const collapseToggle = document.querySelector('.collapse-toggle'); // เครื่องหมายลบ

    // ซ่อนหน้าใหม่
    newPage.style.display = "none"; 
    collapseToggle.style.display = "none"; // ซ่อนปุ่มลบ
    expandToggle.style.display = "block"; // แสดงปุ่มบวก
}
