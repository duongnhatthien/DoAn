// Menu button responsive

// slide
const buttonsSliderControl = document.querySelectorAll(
    '[class^="button-control-"]'
);
const sliders = document.querySelectorAll('.slider-item');
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
        switch (index) {
            case 0:
                sliders.forEach((s) => (s.style.transform = 'translateX(0px)'));
                break;
            case 1:
                sliders.forEach(
                    (s) => (s.style.transform = 'translateX(-100%)')
                );
                break;
            case 2:
                sliders.forEach(
                    (s) => (s.style.transform = 'translateX(-200%)')
                );
                break;
            default:
                // No transform for other cases (or handle as needed)
                break;
        }
    });
});

const productCart = document.querySelectorAll('.product-cart');
productCart.forEach((pc) => {
    pc.addEventListener('click', function (e) {
        window.location.href = 'productDetail.html';
    });
});

const imgDisplay = document.querySelector('.image-display');
const productImageChoiceItem = document.querySelectorAll(
    '.product-imgages-choice__item'
);

productImageChoiceItem.forEach((item) => {
    item.addEventListener('click', (event) => {
        const src = item.getAttribute('src');
        console.log(src);
        imgDisplay.setAttribute('src', src);
        imgDisplay.style.opacity = '1';
    });
});

const preloader = document.querySelector('.loading');
// window.addEventListener('load', () => {
//     // set time để loading
//     setTimeout(() => {
//         preloader.style.display = 'none';
//     }, 1000);
// });
openMenuBtn.addEventListener('click', openNav);
closeMenuBtn.addEventListener('click', closeNav);
function openNav() {
    document.querySelector('.slidebar-collapse').style.width = '200px';
    document.querySelector('.main').style.opacity = '0.8';
    openMenuBtn.style.display = 'none';
    closeMenuBtn.style.display = 'block';
}

function closeNav() {
    document.querySelector('.slidebar-collapse').style.width = '0px';
    document.querySelector('.main').style.opacity = '1';
    openMenuBtn.style.display = 'block';
    closeMenuBtn.style.display = 'none';
}
