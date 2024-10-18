document.addEventListener("DOMContentLoaded", () => {
    console.log("DOM fully loaded and parsed");

    const testimonials = document.querySelectorAll('.testimonial-card');
    const dots = document.querySelectorAll('.dot');
    let currentTestimonial = 0;
    let intervalId;

    console.log(`Found ${testimonials.length} testimonials and ${dots.length} dots`);

    function showTestimonial(index) {
        console.log(`Showing testimonial ${index}`);
        testimonials[currentTestimonial].classList.remove('active');
        dots[currentTestimonial].classList.remove('active');
        currentTestimonial = index;
        testimonials[currentTestimonial].classList.add('active');
        dots[currentTestimonial].classList.add('active');
    }

    function showNextTestimonial() {
        let nextIndex = (currentTestimonial + 1) % testimonials.length;
        showTestimonial(nextIndex);
    }

    function startSlideshow() {
        console.log("Starting slideshow");
        intervalId = setInterval(showNextTestimonial, 3000);
    }

    function stopSlideshow() {
        console.log("Stopping slideshow");
        clearInterval(intervalId);
    }

    dots.forEach((dot, index) => {
        dot.addEventListener('click', () => {
            console.log(`Dot ${index} clicked`);
            stopSlideshow();
            showTestimonial(index);
            startSlideshow();
        });
    });

    startSlideshow();
});