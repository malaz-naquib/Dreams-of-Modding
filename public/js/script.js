// Control Image Carousel
function startCarousel() {
    let activeImage = 0;
    const images = document.querySelectorAll("#carousel img");

    function cycleImages() {
        if (!images[activeImage]) {
            clearInterval(intervalId);
            return;
        }

        images[activeImage].classList.remove('active');
        activeImage = (activeImage + 1) % images.length;
        images[activeImage].classList.add('active');
    }

    let intervalId = setInterval(cycleImages, 3000);
}

window.onload = function () {
    startCarousel();
    checkForError();
};