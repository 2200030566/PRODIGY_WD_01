window.addEventListener('scroll', function() {
    var navigation = document.querySelector('.navigation');
    if (window.scrollY > 0) {
        navigation.classList.add('scrolled');
    } else {
        navigation.classList.remove('scrolled');
    }
});
