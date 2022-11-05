const oldPassword = document.getElementById(`oldPassword`);
const newPassword = document.getElementById(`newPassword`);
const newPass2 = document.getElementById(`newPass2`);

// Old Password Section
oldPassword.addEventListener(`blur`, () => {
    let regex = /(.){8,}$/;
    let value = oldPassword.value;

    if (regex.test(value)) {
        document.getElementById(`oldPasswordError`).innerText = ``
        oldPassword.classList.remove(`inputError`)
    }

    else {
        document.getElementById(`oldPasswordError`).innerText = `Password should be 8 or more characters`
        oldPassword.classList.add(`inputError`)
    }
});

// New Password Section
newPassword.addEventListener(`blur`, () => {
    let regex = /(.){8,}$/;
    let value = newPassword.value;

    if (regex.test(value)) {
        document.getElementById(`newPasswordError`).innerText = ``
        newPassword.classList.remove(`inputError`)
    }

    else {
        document.getElementById(`newPasswordError`).innerText = `Password should be 8 or more characters`
        newPassword.classList.add(`inputError`)
    }
});

// Match Password Section
newPass2.addEventListener(`blur`, () => {
    let password = newPassword.value;
    let matchpassword = newPass2.value;

    if (matchpassword == password) {
        document.getElementById(`newPass2Error`).innerText = ``
        newPass2.classList.remove(`inputError`)
    }

    else {
        document.getElementById(`newPass2Error`).innerText = `Password do not match`
        newPass2.classList.add(`inputError`)
    }
});