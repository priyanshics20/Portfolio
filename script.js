const header = document.querySelector("header");
window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 0);
});

let flag = 0;

function controller(x) {
    flag = flag + x; 
    slideshow(flag);
}

slideshow(flag);

function slideshow(num) {
    let slides = document.getElementsByClassName('slide');

    if (num == slides.length) {
        flag = 0;
        num = 0;
    } else if (num < 0) {
        num = slides.length-1;
        flag = slides.length - 1;
    }
    // console.log(slides);
    for (let y of slides) {
        y.style.display = "none";
    }
    slides[num].style.display = "block";
     
}