// Menu button responsive
const barMenuBtn = document.querySelector('#barmenu-button');
const cancelMenuBtn = document.querySelector('#cancelmenu-button');
const categoryDropdownWithButton = document.querySelector(
    '.category-dropdown__list-with-button'
);

barMenuBtn.addEventListener('click', function (event) {
    categoryDropdownWithButton.classList.add('active'); // Thêm class 'active' để hiển thị menu
    cancelMenuBtn.style.display = 'block';
    event.target.style.display = 'none';
});

cancelMenuBtn.addEventListener('click', function (event) {
    categoryDropdownWithButton.classList.remove('active'); // Xóa class 'active' để ẩn menu
    event.target.style.display = 'none';
    barMenuBtn.style.display = 'block';
});

const buttonsSliderControl = document.querySelectorAll(
    '[class^="button-control-"]'
);
const sliders = document.querySelectorAll('.slider-item');
const screenWidth = window.innerWidth;
console.log(screenWidth);
buttonsSliderControl.forEach((button, index) => {
    button.addEventListener('click', function () {
        buttonsSliderControl.forEach((btn) => {
            btn.classList.remove('active');
        });
        sliders.forEach((slide) => {
            slide.classList.remove('active');
        });
        this.classList.add('active');
        sliders[index].classList.add('active');
        if (screenWidth > 768) {
            switch (index) {
                case 0:
                    sliders.forEach(
                        (s) => (s.style.transform = 'translateX(0px)')
                    );
                    break;
                case 1:
                    sliders.forEach(
                        (s) => (s.style.transform = 'translateX(-1180px)')
                    );
                    break;
                case 2:
                    sliders.forEach(
                        (s) => (s.style.transform = 'translateX(-2360px)')
                    );
                    break;
                default:
                    // No transform for other cases (or handle as needed)
                    break;
            }
        } else {
            switch (index) {
                case 0:
                    sliders.forEach(
                        (s) => (s.style.transform = 'translateX(0px)')
                    );
                    break;
                case 1:
                    sliders.forEach(
                        (s) => (s.style.transform = 'translateX(-350px)')
                    );
                    break;
                case 2:
                    sliders.forEach(
                        (s) => (s.style.transform = 'translateX(-700px)')
                    );
                    break;
                default:
                    // No transform for other cases (or handle as needed)
                    break;
            }
        }
    });
});
