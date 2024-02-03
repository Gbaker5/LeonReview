
// Select all elements with the attribute [data-carousel-button] and store them in the 'buttons' constant
const buttons = document.querySelectorAll('[data-carousel-button]')

// Iterate over each button using forEach
buttons.forEach(button => {
    // Add a click event listener to each button
    button.addEventListener('click', () => {
        // Determine the offset based on the value of the 'data-carouselButton' attribute
        const offset = button.dataset.carouselButton === "next" ? 1 : -1;

        // Find the closest ancestor with the attribute [data-carousel]
        const slides = button
            .closest("[data-carousel]")
            .querySelector('[data-slides]');
            //console.log(slides)

        // Find the currently active slide within the 'slides'
        const activeSlide = slides.querySelector('[data-active]');

        // Calculate the index of the new slide using the offset
        let newIndex = [...slides.children].indexOf(activeSlide) + offset;
        let newIndex2 = [...slides.children]
        console.log(newIndex)

        // Ensure the index stays within the bounds of the slides array
        if (newIndex < 0) newIndex = slides.children.length - 1;
        if (newIndex >= slides.children.length) newIndex = 0;

        // Set the 'data-active' attribute on the new slide and remove it from the active slide
        slides.children[newIndex].dataset.active = true;
        delete activeSlide.dataset.active;
    });
});
