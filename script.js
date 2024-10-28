function toggleMenu() {
    const menu = document.getElementById('menu'); // สมมติว่าเมนูมี ID เป็น 'menu'
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
    } else {
        menu.style.display = 'block';
    }
}
