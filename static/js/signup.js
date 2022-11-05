// Form Validation
const fname = document.getElementById(`fname`);
const lname = document.getElementById(`lname`);
const email = document.getElementById(`email`);
const pass1 = document.getElementById(`pass1`);
const pass2 = document.getElementById(`pass2`);

// First name Section
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

// Last name Section
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

// Email Section
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

// Password Section
pass1.addEventListener(`blur`, () => {
    let regex = /(.){8,}$/;
    let value = pass1.value;

    if (regex.test(value)) {
        document.getElementById(`pass1Error`).innerText = ``
        pass1.classList.remove(`inputError`)
    }

    else {
        document.getElementById(`pass1Error`).innerText = `Password should be 8 or more characters`
        pass1.classList.add(`inputError`)
    }
});

// Match Password Section
pass2.addEventListener(`blur`, () => {
    let password = pass1.value;
    let matchpassword = pass2.value;

    if (matchpassword == password) {
        document.getElementById(`pass2Error`).innerText = ``
        pass2.classList.remove(`inputError`)
    }

    else {
        document.getElementById(`pass2Error`).innerText = `Password do not match`
        pass2.classList.add(`inputError`)
    }
});