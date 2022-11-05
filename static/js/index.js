// Previous and Next section
const prevButton = document.getElementById(`prevButton`);
const nxtButton = document.getElementById(`nxtButton`);
const prContainer = document.getElementById(`productContainer`);

prevButton.addEventListener(`click`, () => {
    // Responive JS
    if (window.matchMedia(`(max-Width: 768px) and (min-width: 641px)`).matches) {
        prContainer.scrollLeft -=505;
    }

    if (window.matchMedia(`(max-Width: 640px)`).matches) {
        prContainer.scrollLeft -=420;
    }

    if (window.matchMedia(`(max-Width: 425px)`).matches) {
        prContainer.scrollLeft -=272;
    }

    if (window.matchMedia(`(max-Width: 375px)`).matches) {
        prContainer.scrollLeft -=245;
    }

    if (window.matchMedia(`(max-Width: 360px)`).matches) {
        prContainer.scrollLeft -=234;
    }

    if (window.matchMedia(`(max-Width: 325px)`).matches) {
        prContainer.scrollLeft -=210;
    }
});

nxtButton.addEventListener(`click`, () => {
    // Responive JS
    if (window.matchMedia(`(max-Width: 768px) and (min-width: 641px)`).matches) {
        prContainer.scrollLeft +=505;
    }

    if (window.matchMedia(`(max-Width: 640px)`).matches) {
        prContainer.scrollLeft +=420;
    }

    if (window.matchMedia(`(max-Width: 425px)`).matches) {
        prContainer.scrollLeft +=272;
    }
    
    if (window.matchMedia(`(max-Width: 375px)`).matches) {
        prContainer.scrollLeft +=245;
    }

    if (window.matchMedia(`(max-Width: 360px)`).matches) {
        prContainer.scrollLeft +=234;
    }

    if (window.matchMedia(`(max-Width: 325px)`).matches) {
        prContainer.scrollLeft +=210;
    }
});