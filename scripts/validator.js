const sendBtn = document.querySelector('#sendBtn');
const registerBtn = document.querySelector('#registerBtn');
const loginButton = document.querySelector('#loginBtn');
console.log(loginButton);
console.log(registerBtn);
console.log(sendBtn);
let cck = true;
if (registerBtn) {
    registerBtn.addEventListener('click', function (e) {
        e.preventDefault();
        cck = true;
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
        if (cck) {
            window.location.href = 'index.html';
        } else {
            alert('Không được bỏ trống');
        }
    });
}
if (sendBtn) {
    sendBtn.addEventListener('click', function (e) {
        e.preventDefault();
        cck = true;
        Check({
            form: '.contact-form__form',
            rules: [
                Validator.isRequire('#name', 'Tên'),
                Validator.isRequire('#email', 'email'),
                Validator.isRequire('#phone', 'số điện thoại'),
                Validator.isRequire('#subject', 'chủ đề'),
                Validator.isRequire('#message', 'nội dung'),
                Validator.isVietnamesePhoneNumber('#phone'),
                Validator.isEmail('#email'),
            ],
        });
        if (cck) {
            alert('Gửi thư thành công');
        } else {
            alert('Không được bỏ trống');
        }
    });
}
if (loginButton) {
    loginButton.addEventListener('click', function (e) {
        e.preventDefault();
        cck = true;
        Check({
            form: '.users-form',
            rules: [Validator.isEmail('#email', 'Email')],
        });
        if (cck) {
            window.location.href = 'index.html';
        } else {
            alert('Đăng nhập thất bại');
        }
    });
}
function Check(options) {
    const formElement = document.querySelector(options.form);
    if (formElement) {
        options.rules.forEach((element) => {
            const inputElement = formElement.querySelector(element.selector);
            if (inputElement) {
                const formMessage =
                    inputElement.parentElement.querySelector('.form-message');
                const messageError = element.test(inputElement.value);
                if (messageError) {
                    formMessage.innerText = messageError;
                    inputElement.classList.add('invalid');
                    cck = false;
                } else {
                    formMessage.innerText = '';
                    inputElement.classList.remove('invalid');
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
Validator.isRequire = function (selector, name) {
    return {
        selector,
        test: function (value) {
            return value.trim() == ''
                ? name + ' không được để trống'
                : undefined;
        },
    };
};
Validator.isEmail = function (selector) {
    return {
        selector,
        test: function (value) {
            const formatEmail = /\S+@\S+\.\S+/i;
            return value.toLowerCase().match(formatEmail)
                ? undefined
                : 'Email không đúng định dạng';
        },
    };
};
Validator.isPasswordStrong = function (selector) {
    return {
        selector,
        test: function (value) {
            // Định nghĩa các tiêu chí kiểm tra mật khẩu mạnh
            const minLength = 8;
            const hasUpperCase = /[A-Z]/.test(password);
            const hasLowerCase = /[a-z]/.test(password);
            const hasNumbers = /[0-9]/.test(password);
            const hasSpecialChars = /[!@#$%^&*(),.?":{}|<>]/.test(password);

            // Kiểm tra độ dài của mật khẩu
            if (password.length < minLength) {
                return 'Password phải có ít nhất 8 kí tự';
            }
            // Kiểm tra từng tiêu chí
            if (
                !hasUpperCase ||
                !hasLowerCase ||
                !hasNumbers ||
                !hasSpecialChars
            ) {
                return 'Mật khẩu phải chứa kí tự in hoa, in thường, số, đặt biệt';
            }

            // Nếu mật khẩu đáp ứng tất cả các tiêu chí, trả về true
            return undefined;
        },
    };
};
Validator.isVietnamesePhoneNumber = function (selector) {
    return {
        selector,
        test: function (number) {
            return /^(03|05|07|08|09)\d{8}$/.test(number)
                ? undefined
                : 'Số điện thoại không hợp lệ';
        },
    };
};
