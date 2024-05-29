window.addEventListener('load', loadData);

function createContentHtml(name, imgDefault, imgArray) {
    return `<div class="section">
    <div class="container">
        <div class="row">
            <div class="col-6">
                <div class="product-imgages-slide">
                    <div class="product-images-display">
                        <img
                            src="${imgDefault}"
                            alt=""
                            class="image-display" />
                    </div>
                    <div class="product-imgages-choice">
                        
                            ${imgArray
                                .map(
                                    (src) => `
                                <div class="product-imgages-choice__item">
                                    <img src="${src}" alt="" /> 
                                </div>`
                                )
                                .join('')}
                        
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="product-detail-block">
                    <div class="product-detail-title">
                        ${name}
                    </div>
                    <div class="product-detail-vote">
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                        <i class="fa-solid fa-star"></i>
                    </div>
                    <div class="product-detail-price">
                        <div class="product-detail-price__discount">
                            $ 100.00 USD
                        </div>
                        <div class="_1px-width-divider hide-in-mobile"></div>
                        <div class="product-detail-price__old">
                            $ 120.00 USD
                        </div>
                    </div>
                    <p class="product-detail-description">
                        Effect font move vertical share. Connection
                        frame edit export arrow. Undo device move
                        opacity image layer. List star blur
                        strikethrough arrow.
                    </p>
                    <div class="product-detail-footer">
                        <input
                            type="number"
                            class="product-detail-amount"
                            min="1" />
                        <button class="product-detail-button">
                            Add to Cart
                        </button>
                    </div>
                    <div class="product-detail-meta">
                        <div class="meta-info-title">Share:</div>
                        <div class="social-share-icon-container">
                            <img
                                src="./images/social-icon/icons8-facebook-96.png"
                                alt="Facebook icon"
                                class="social-icon" />
                            <img
                                src="./images/social-icon/icons8-twitter-96.png"
                                alt="Twitter icon"
                                class="social-icon" />
                            <img
                                src="./images/social-icon/icons8-pinterest-96.png"
                                alt="Pinterest icon"
                                class="social-icon" />
                        </div>
                    </div>
                    <div class="product-detail-payment">
                        <div class="_18px-title">
                            Payment Method:
                        </div>
                        <div class="product-detail-payment-method">
                            <img
                                src="https://assets-global.website-files.com/65fd584b6e6336bd0392e213/65fd584b6e6336bd0392e2c4_visa%201.webp"
                                loading="lazy"
                                alt=""
                                class="_30px-image" />
                            <img
                                src="https://assets-global.website-files.com/65fd584b6e6336bd0392e213/65fd584b6e6336bd0392e2c3_discover%201.webp"
                                loading="lazy"
                                alt=""
                                class="_30px-image" />
                            <img
                                src="https://assets-global.website-files.com/65fd584b6e6336bd0392e213/65fd584b6e6336bd0392e2c2_paypal%201.webp"
                                loading="lazy"
                                alt=""
                                class="_30px-image" />
                            <img
                                src="https://assets-global.website-files.com/65fd584b6e6336bd0392e213/65fd584b6e6336bd0392e2c1_american-express%201.webp"
                                loading="lazy"
                                alt=""
                                class="_30px-image" />
                            <img
                                src="https://assets-global.website-files.com/65fd584b6e6336bd0392e213/65fd584b6e6336bd0392e2c0_card%201.webp"
                                loading="lazy"
                                alt=""
                                class="_30px-image" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>`;
}

function updateHtml(data) {
    const navbar = document.querySelector('.navbar');
    const htmlContent = createContentHtml(
        data.name,
        data.imgDefault,
        data.imgArray
    );
    navbar.insertAdjacentHTML('afterend', htmlContent);
    setupEventListeners(); // Call the function to set up event listeners
}
function getQueryParam(name, url = window.location.href) {
    const urlObj = new URL(url);
    const params = new URLSearchParams(urlObj.search);
    return params.get(name);
}
function loadData() {
    const id = getQueryParam('id');
    console.log('Starting to load data...');
    fetch('data/productDetail.json')
        .then((res) => {
            if (!res.ok) {
                throw new Error(
                    'Network response was not ok ' + res.statusText
                );
            }
            return res.json();
        })
        .then((result) => {
            console.log('Data loaded successfully:', result);
            updateHtml(result[id - 1]);
        })
        .catch((error) => {
            console.error(
                'There was a problem with the fetch operation:',
                error
            );
        });
}

function setupEventListeners() {
    document
        .querySelectorAll('.product-imgages-choice__item')
        .forEach((item) => {
            item.addEventListener('click', (event) => {
                const src = item.querySelector('img').getAttribute('src');
                console.log(src);
                document
                    .querySelector('.image-display')
                    .setAttribute('src', src);
                document.querySelector('.image-display').style.opacity = '1';
            });
        });
}
function openCity(evt, cityName) {
    // Declare all variables
    var i, tabcontent, tablinks;

    // Get all elements with class="tabcontent" and hide them
    tabcontent = document.getElementsByClassName('tabcontent');
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = 'none';
    }

    // Get all elements with class="tablinks" and remove the class "active"
    tablinks = document.getElementsByClassName('tablinks');
    for (i = 0; i < tablinks.length; i++) {
        tablinks[i].className = tablinks[i].className.replace(' active', '');
    }

    // Show the current tab, and add an "active" class to the button that opened the tab
    document.getElementById(cityName).style.display = 'block';
    evt.currentTarget.className += ' active';
}
