// font size change

let buttons = document.querySelector('.buttons');

let btn = buttons.querySelectorAll('.btn');
for (var i=0; i < btn.length; i++) {
    btn[i].addEventListener('click', function(){
        let current = document.getElementsByClassName('active');
        current[0].className = current[0].className.replace("active", "");
        this.className += " active;"
        })
}

// back to top button
const showOnPx = 200;
const backToTopButton = document.querySelector(".back-to-top")

const scrollContainer = () => {
    return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
    if (scrollContainer().scrollTop > showOnPx) {
        backToTopButton.classList.remove("hidden")
    } else {
        backToTopButton.classList.add("hidden")
    }
})

// scrolling to top when button is clicked
const goToTop = () => {
    document.body.scrollIntoView();
};

backToTopButton.addEventListener("click", goToTop)

