document.addEventListener('DOMContentLoaded', function () {
    // Initialiser Swiper pour le carrousel de peintures
    var swiper = new Swiper('.swiper-container', {
        slidesPerView: 1,
        spaceBetween: 10,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false,
        },
    });

    // Validation du formulaire de contact
    const form = document.querySelector('form');
    if (form) {
        form.addEventListener('submit', function (event) {
            const captchaInput = document.getElementById('captcha');
            if (captchaInput.value.trim() !== '7') { // Vérification de la réponse au captcha
                event.preventDefault();
                alert('Veuillez vérifier la réponse au captcha.');
            }
        });
    }

    // Bouton de retour en haut de la page
    const topBtn = document.getElementById('topBtn');
    if (topBtn) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 300) {
                topBtn.style.display = 'block';
            } else {
                topBtn.style.display = 'none';
            }
        });
    }
});
