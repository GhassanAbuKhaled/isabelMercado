// Optimized Intersection Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
            observer.unobserve(entry.target); // Stop observing once shown
        }
    });
}, observerOptions);

// Observe elements
const showElements = document.querySelectorAll(".showLeft, .showImg, .showUp");
showElements.forEach((el) => observer.observe(el));

// Optimized image loading
const images = document.querySelectorAll('img[loading="lazy"]');
const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.classList.add('fade-in-up');
            imageObserver.unobserve(img);
        }
    });
});

images.forEach(img => imageObserver.observe(img));