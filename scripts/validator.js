const buttonSubmit = document.querySelector('.users-form-button');
let cck = false;
console.log(buttonSubmit);
buttonSubmit.addEventListener('click', function (e) {
    e.preventDefault();
    cck = false;
    Check({
        form: '.users-form',
        rules: [
            Validator.isRequire('#email'),
            Validator.isRequire('#phone'),
            Validator.isVietnamesePhoneNumber('#phone'),
            Validator.isRequire('#password'),
            Validator.isEmail('#email'),
            Validator.isPasswordStrong('#password'),
        ],
    });
    if (!cck) {
        window.location.href = 'index.html';
    } else {
        alert('Enter all input');
    }
});
function Check(options) {
    const formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach((element) => {
            const inputElement = formElement.querySelector(element.selector);
            if (inputElement) {
                const messageError = element.test(inputElement.value);
                if (messageError) {
                    cck = true;
                }
            }
        });
    }
}
function Validator(options) {
    const formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach((element) => {
            const inputElement = formElement.querySelector(element.selector);
            const formMessage =
                inputElement.parentElement.querySelector('.form-message');
            if (inputElement) {
                inputElement.onblur = function () {
                    const messageError = element.test(inputElement.value);
                    if (messageError) {
                        formMessage.innerText = messageError;
                        inputElement.classList.add('invalid');
                    } else {
                        formMessage.innerText = '';
                        inputElement.classList.remove('invalid');
                    }
                };
            }
        });
    }
}
Validator.isRequire = function (selector) {
    return {
        selector,
        test: function (value) {
            return value.trim() == '' ? 'Field not empty' : undefined;
        },
    };
};
Validator.isEmail = function (selector) {
    return {
        selector,
        test: function (value) {
            const formatEmail =
                /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
            return value.toLowerCase().match(formatEmail)
                ? undefined
                : 'Email incorect';
        },
    };
};
Validator.isPasswordStrong = function (selector) {
    return {
        selector,
        test: function (value) {
            let regex =
                /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

            return regex.test(value)
                ? undefined
                : 'Password is not strong enough';
        },
    };
};
Validator.isVietnamesePhoneNumber = function (selector) {
    return {
        selector,
        test: function (number) {
            return /(03|05|07|08|09|01[2|6|8|9])+([0-9]{8})\b/.test(number)
                ? undefined
                : 'Phone incorect';
        },
    };
};
