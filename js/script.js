

let image = Array.from(document.querySelectorAll(".portfolio-image img"));
let overlay = document.getElementById("overlay");
let imgPrev = document.getElementById("imgPrev");
let currentIndex = 0
let nextBtn = document.getElementById("next");
let prevBtn = document.getElementById("prev");
let closeBtn = document.getElementById("close");

for (let index = 0; index < image.length; index++) {


    image[index].addEventListener("click", function (e) {

        currentIndex = image.indexOf(e.target);
        overlay.style.display = "block";
        imgPrev.setAttribute("src", e.target.getAttribute("src"));
        // console.log(e.target.getAttribute("src"));

    });

}

function next() {

    currentIndex++;

    if (currentIndex > image.length - 1) {
        currentIndex = 0;
    }

    let img = image[currentIndex].getAttribute("src");
    imgPrev.setAttribute("src", img);



}
function prevv() {

    currentIndex--;

    if (currentIndex < 0) {
        currentIndex = image.length - 1;
    }
    //console.log(currentIndex);

    let img = image[currentIndex].getAttribute("src");
    imgPrev.setAttribute("src", img);



}
function close() {
    overlay.style.display = "none";

}
function arrowRight() {


}
document.addEventListener("keydown", function (e) {

     console.log(e);
    if (e.key == "ArrowRight") {
        currentIndex++;

        if (currentIndex > image.length - 1) {
            currentIndex = 0;
        }

        let img = image[currentIndex].getAttribute("src");
        imgPrev.setAttribute("src", img);
    }

    if (e.key == "ArrowLeft") {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = image.length - 1;
        }
        console.log(currentIndex);

        let img = image[currentIndex].getAttribute("src");
        imgPrev.setAttribute("src", img);
    }
    if(e.key == "Escape")
    {
        overlay.style.display = "none";
    }


});
nextBtn.addEventListener("click", next);
prevBtn.addEventListener("click", prevv);
closeBtn.addEventListener("click", close);