console.log("Portfolio Ready");

// แสดงข้อความต้อนรับ
window.addEventListener("load", function () {
    console.log("ยินดีต้อนรับสู่เว็บไซต์ Portfolio");
});

// ไฮไลต์เมนูหน้าปัจจุบัน
const links = document.querySelectorAll("nav a");

links.forEach(link => {
    if (link.href === window.location.href) {
        link.style.color = "#38BDF8";
        link.style.fontWeight = "600";
    }
});
