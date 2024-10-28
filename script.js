// ฟังก์ชันการแสดงโมดอล
const modal = document.getElementById("modal");
const modalButton = document.querySelector(".about-button");
const closeButton = document.querySelector(".close");

modalButton.onclick = () => {
    modal.style.display = "block";
};

closeButton.onclick = () => {
    modal.style.display = "none";
};

window.onclick = (event) => {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};

// เอฟเฟกต์เลือนเมื่อเลื่อนหน้าจอ
const fadeInElements = document.querySelectorAll(".fade-in");

const fadeInOnScroll = () => {
    fadeInElements.forEach((element) => {
        const position = element.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;
        if (position < screenPosition) {
            element.classList.add("active");
        }
    });
};

window.addEventListener("scroll", fadeInOnScroll);
