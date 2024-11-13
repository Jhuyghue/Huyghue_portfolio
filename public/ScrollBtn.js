//Finding the scrolling function in the HTML file
const scrollBtn = document.getElementById('scroll-top-btn');

//Show the button when the user scrolls down 100px from the top
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollBtn.style.display = 'block';
    } else {
        scrollBtn.style.display = 'none';
    }
};

//Scrolling smoothly to the top when the button is clicked
scrollBtn.addEventListener('click', function () {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
