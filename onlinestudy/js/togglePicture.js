const slides = [...document.querySelectorAll("#pic li")];
const carousel = document.querySelector(".pic");
const rotation = carousel.querySelector(".rotation");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
let currentSlide = 0;
let rotating = !reducedMotion.matches;
let timer;

function showSlide(step) {
    slides[currentSlide].className = "ic";
    currentSlide = (currentSlide + step + slides.length) % slides.length;
    slides[currentSlide].className = "sp";
}

function scheduleRotation() {
    window.clearInterval(timer);
    if (rotating && !document.hidden) {
        timer = window.setInterval(() => showSlide(1), 3000);
    }
    rotation.textContent = rotating ? "暂停轮播" : "开始轮播";
}

for (const [selector, step] of [[".back", -1], [".next", 1]]) {
    carousel.querySelector(selector).addEventListener("click", () => {
        showSlide(step);
        scheduleRotation();
    });
}

rotation.addEventListener("click", () => {
    rotating = !rotating;
    scheduleRotation();
});
reducedMotion.addEventListener("change", (event) => {
    rotating = !event.matches;
    scheduleRotation();
});
document.addEventListener("visibilitychange", scheduleRotation);
scheduleRotation();
