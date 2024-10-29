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

// ฟังก์ชันเพื่อเพิ่มหน้าใหม่ใน About Me
function addAboutMePage() {
    const newPage = document.getElementById("newAboutMePage");
    newPage.style.display = "block"; // แสดงหน้าใหม่
    window.scrollTo({
        top: newPage.offsetTop,
        behavior: 'smooth' // การเลื่อนแบบนุ่มนวล
    });
}

// ฟังก์ชันเพื่อซ่อนหน้าใหม่ใน About Me
function removeAboutMePage() {
    const newPage = document.getElementById("newAboutMePage");
    newPage.style.display = "none"; // ซ่อนหน้าใหม่
}

// ฟังก์ชันเพื่อเพิ่มหน้าใหม่ใน Education
function addEducationPage() {
    const newPage = document.getElementById("newEducationPage");
    newPage.style.display = "block"; // แสดงหน้าใหม่
    window.scrollTo({
        top: newPage.offsetTop,
        behavior: 'smooth' // การเลื่อนแบบนุ่มนวล
    });
}

// ฟังก์ชันเพื่อซ่อนหน้าใหม่ใน Education
function removeEducationPage() {
    const newPage = document.getElementById("newEducationPage");
    newPage.style.display = "none"; // ซ่อนหน้าใหม่
}



// ฟังก์ชันเพื่อเพิ่มหน้าใหม่ใน Skill
function addSkillPage() {
    const newPage = document.getElementById("newSkillPage");
    newPage.style.display = "block"; // แสดงหน้าใหม่
    window.scrollTo({
        top: newPage.offsetTop,
        behavior: 'smooth' // การเลื่อนแบบนุ่มนวล
    });
}

// ฟังก์ชันเพื่อซ่อนหน้าใหม่ใน About Me
function removeSkillPage() {
    const newPage = document.getElementById("newSkillPage");
    newPage.style.display = "none"; // ซ่อนหน้าใหม่
}

// ฟังก์ชันเพื่อเพิ่มหน้าใหม่ใน Contact
function addContactPage() {
    const newPage = document.getElementById("newContactPage");
    newPage.style.display = "block"; // แสดงหน้าใหม่
    window.scrollTo({
        top: newPage.offsetTop,
        behavior: 'smooth' // การเลื่อนแบบนุ่มนวล
    });
}

// ฟังก์ชันเพื่อซ่อนหน้าใหม่ใน Education
function removeContactPage() {
    const newPage = document.getElementById("newContactPage");
    newPage.style.display = "none"; // ซ่อนหน้าใหม่
}
