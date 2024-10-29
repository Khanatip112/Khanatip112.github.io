function toggleMenu() {
    const menu = document.getElementById('menu');
    const menuIcon = document.querySelector('.menu-icon');
    menu.classList.toggle('show'); // เพิ่มหรือลดคลาส show
    menuIcon.classList.toggle('active'); // เพิ่มหรือลดคลาส active
    document.body.classList.toggle('menu-open'); // เพิ่มหรือลดคลาส menu-open
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
    newPage.style.display = "block";
    window.scrollTo({
        top: newPage.offsetTop,
        behavior: 'smooth'
    });
}

// ฟังก์ชันเพื่อซ่อนหน้าใหม่ใน About Me พร้อมเลื่อนกลับไปยัง About Me
function removeAboutMePage() {
    const aboutMeSection = document.getElementById("about");
    window.scrollTo({
        top: aboutMeSection.offsetTop,
        behavior: 'smooth'
    });
    setTimeout(() => {
        const newPage = document.getElementById("newAboutMePage");
        newPage.style.display = "none";
    }, 500); // รอให้เลื่อนเสร็จก่อนซ่อนหน้า
}

// ฟังก์ชันเพื่อเพิ่มหน้าใหม่ใน Education
function addEducationPage() {
    const newPage = document.getElementById("newEducationPage");
    newPage.style.display = "block";
    window.scrollTo({
        top: newPage.offsetTop,
        behavior: 'smooth'
    });
}

// ฟังก์ชันเพื่อซ่อนหน้าใหม่ใน Education พร้อมเลื่อนกลับไปยัง Education
function removeEducationPage() {
    const educationSection = document.getElementById("education");
    window.scrollTo({
        top: educationSection.offsetTop,
        behavior: 'smooth'
    });
    setTimeout(() => {
        const newPage = document.getElementById("newEducationPage");
        newPage.style.display = "none";
    }, 500);
}

// ฟังก์ชันเพื่อเพิ่มหน้าใหม่ใน Skill
function addSkillPage() {
    const newPage = document.getElementById("newSkillPage");
    newPage.style.display = "block";
    window.scrollTo({
        top: newPage.offsetTop,
        behavior: 'smooth'
    });
}

// ฟังก์ชันเพื่อซ่อนหน้าใหม่ใน Skill พร้อมเลื่อนกลับไปยัง Skill
function removeSkillPage() {
    const skillSection = document.getElementById("skill");
    window.scrollTo({
        top: skillSection.offsetTop,
        behavior: 'smooth'
    });
    setTimeout(() => {
        const newPage = document.getElementById("newSkillPage");
        newPage.style.display = "none";
    }, 500);
}

// ฟังก์ชันเพื่อเพิ่มหน้าใหม่ใน Contact
function addContactPage() {
    const newPage = document.getElementById("newContactPage");
    newPage.style.display = "block";
    window.scrollTo({
        top: newPage.offsetTop,
        behavior: 'smooth'
    });
}

// ฟังก์ชันเพื่อซ่อนหน้าใหม่ใน Contact พร้อมเลื่อนกลับไปยัง Contact
function removeContactPage() {
    const contactSection = document.getElementById("contact");
    window.scrollTo({
        top: contactSection.offsetTop,
        behavior: 'smooth'
    });
    setTimeout(() => {
        const newPage = document.getElementById("newContactPage");
        newPage.style.display = "none";
    }, 500);
}
