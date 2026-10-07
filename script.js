const slides = document.querySelector(".slides");
const images = document.querySelectorAll(".slides img");

const prevButton = document.querySelector(".prev");
const nextButton = document.querySelector(".next");

const dots = document.querySelectorAll(".dot");

let counter = 0;

function showSlide(index) {
    counter = index;

    slides.style.transform = `translateX(-${counter * 800}px)`;

    dots.forEach(dot => {
        dot.classList.remove("active");
    });

    dots[counter].classList.add("active");
}

nextButton.addEventListener("click", () => {
    counter++;

    if (counter >= images.length) {
        counter = 0;
    }

    showSlide(counter);
});

prevButton.addEventListener("click", () => {
    counter--;

    if (counter < 0) {
        counter = images.length - 1;
    }

    showSlide(counter);
});

dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
        showSlide(index);
    });
});
let autoSlide;

function startAutoSlide() {
    autoSlide = setInterval(() => {
        counter++;

        if (counter >= images.length) {
            counter = 0;
        }

        showSlide(counter);
    }, 3000);
}

function stopAutoSlide() {
    clearInterval(autoSlide);
}

startAutoSlide();

const slider = document.querySelector(".slider");

slider.addEventListener("mouseenter", stopAutoSlide);

slider.addEventListener("mouseleave", startAutoSlide);