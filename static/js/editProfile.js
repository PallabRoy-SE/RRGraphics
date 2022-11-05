const fname = document.getElementById(`fname`);
const lname = document.getElementById(`lname`);
const email = document.getElementById(`email`);

// First name validate Section
fname.addEventListener(`blur`, () => {
    let regex = /([a-zA-Z]){3,12}$/;
    let value = fname.value;

    if (regex.test(value)) {
        document.getElementById(`fnameError`).innerText = ``
        fname.classList.remove(`inputError`)
    }

    else {
        document.getElementById(`fnameError`).innerText = `Invalid First Name`
        fname.classList.add(`inputError`)
    }
});

// Last name validate Section
lname.addEventListener(`blur`, () => {
    let regex = /([a-zA-Z]){1,12}$/;
    let value = lname.value;

    if (regex.test(value)) {
        document.getElementById(`lnameError`).innerText = ``
        lname.classList.remove(`inputError`)
    }

    else {
        document.getElementById(`lnameError`).innerText = `Invalid Last Name`
        lname.classList.add(`inputError`)
    }
});

// Email validate Section
email.addEventListener(`blur`, () => {
    let regex = /^([_\.\-0-9a-zA-Z]+)@([_\.\-0-9a-zA-Z]+)\.([a-zA-Z]){2,10}$/;
    let value = email.value;

    if (regex.test(value)) {
        document.getElementById(`emailError`).innerText = ``
        email.classList.remove(`inputError`)
    }

    else {
        document.getElementById(`emailError`).innerText = `Invalid Email ID`
        email.classList.add(`inputError`)
    }
});

// Choose File Section
// profile image section
const profileImageInput = document.getElementById(`profileImage`);
const profileImageText = document.getElementById(`profileImageName`);
const profileImageButton = document.getElementById(`profileImageButton`);

profileImageInput.addEventListener(`change`, () => {
    const profileImagePath = profileImageInput.value.split('\\')
    const profileImageFileName = profileImagePath[profileImagePath.length - 1]

    profileImageText.innerText = profileImageFileName? profileImageFileName : "Choose File"

    if (profileImageFileName) {
        profileImageButton.classList.add(`choosen`)
    } else {
        profileImageButton.classList.remove(`choosen`)
    }
});

// banner image section
const bannerImageInput = document.getElementById(`bannerImage`);
const bannerImageText = document.getElementById(`bannerImageName`);
const bannerImageButton = document.getElementById(`bannerImageButton`);

bannerImageInput.addEventListener(`change`, () => {
    const bannerImagePath = bannerImageInput.value.split('\\')
    const bannerImageFileName = bannerImagePath[bannerImagePath.length - 1]

    bannerImageText.innerText = bannerImageFileName? bannerImageFileName : "Choose File"

    if (bannerImageFileName) {
        bannerImageButton.classList.add(`choosen`)
    } else {
        bannerImageButton.classList.remove(`choosen`)
    }
});