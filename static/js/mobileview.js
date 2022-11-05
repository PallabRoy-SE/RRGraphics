// Hamburger section
const hamburger = document.getElementById(`hamburger`);
const hamburgerClose = document.getElementById(`hamburgerClose`);
const homeLinks = document.querySelectorAll('.homeLinks');
const navLinks = document.querySelector('#navItems ul');
const links = document.querySelectorAll('.navItemsLi');

// Search Section
const searchOpen = document.getElementById(`searchOpen`);
const searchClose = document.getElementById(`searchClose`);
const searchItems = document.getElementById(`searchItems`);
const logo = document.getElementById(`logo`);

// User Section
const userIcon = document.getElementById(`userIcon`);
const userContainer = document.querySelector(`.userContainer`);
const userClose = document.querySelector(`.userClose`);

// hamburger section
hamburger.addEventListener(`click`, () => {
    navLinks.classList.toggle(`open`)
    links.forEach(link => {
        link.classList.toggle(`fade`)
    })
    hamburgerClose.style.pointerEvents = `auto`
    hamburger.style.display = `none`
    hamburgerClose.style.display = `block`
});

hamburgerClose.addEventListener(`click`, () => {
    navLinks.classList.toggle(`open`)
    links.forEach(link => {
        link.classList.toggle(`fade`)
    })
    hamburgerClose.style.pointerEvents = `none`
    setTimeout(() => {
        hamburger.style.display = `block`
        hamburgerClose.style.display = `none`
    }, 800)
});

homeLinks.forEach(homeLink => {
    homeLink.addEventListener(`click`, () => {
        navLinks.classList.toggle(`open`)
        links.forEach(link => {
            link.classList.toggle(`fade`)
        })
        hamburgerClose.style.pointerEvents = `none`
        setTimeout(() => {
            hamburger.style.display = `block`
            hamburgerClose.style.display = `none`
        }, 800)
    })
});

// Search Section
searchOpen.addEventListener(`click`, () => {
    logo.style.display = `none`
    searchItems.classList.toggle(`searchOpen`)
    searchOpen.style.visibility = `hidden`
    searchClose.style.visibility = `visible`
});

searchClose.addEventListener(`click`, () => {
    logo.style.display = `block`
    searchItems.classList.toggle(`searchOpen`)
    searchClose.style.visibility = `hidden`
    searchOpen.style.visibility = `visible`
});

// User Section
userIcon.addEventListener(`click`, () => {
    userContainer.classList.toggle(`userOpen`)
});

userClose.addEventListener(`click`, () => {
    userContainer.classList.toggle(`userOpen`)
})