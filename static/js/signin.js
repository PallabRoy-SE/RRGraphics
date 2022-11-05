// Form Validation
const email = document.getElementById(`email`);
const passowrd = document.getElementById(`password`);

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
passowrd.addEventListener(`blur`, () => {
    let regex = /(.){8,}$/;
    let value = passowrd.value;

    if (regex.test(value)) {
        document.getElementById(`passError`).innerText = ``
        passowrd.classList.remove(`inputError`)
    }

    else {
        document.getElementById(`passError`).innerText = `Invalid Password`
        passowrd.classList.add(`inputError`)
    }
});