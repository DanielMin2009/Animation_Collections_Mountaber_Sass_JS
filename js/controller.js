let chamferBox = document.getElementById("chamfer-box");
let rosemaryBox = document.getElementById("rosemary-box");

let chamferImg = document.getElementById("chamfer-ring");
let rosemaryImg = document.getElementById("rosemary-ring");

let chamferH2 = document.getElementById("chamfer-h2");
let rosemaryH2 = document.getElementById("rosemary-h2");

let collections = document.getElementById("the-collections");
let laTecnica = document.getElementById("la-tecnica");

let verticalLine = document.querySelector(".vertical-line");

chamferBox.addEventListener("mouseover", emphasiseChamferImg, false);
chamferBox.addEventListener("mouseout", shrinkChamferImg, false);

rosemaryBox.addEventListener("mouseover", emphasiseRosemaryImg, false);
rosemaryBox.addEventListener("mouseout", shrinkRosemaryImg, false);

function emphasiseChamferImg() {
    chamferImg.classList.add("emphasis");
    chamferImg.classList.add("emphasis-left-img");
    rosemaryImg.classList.add("shrank");
    rosemaryImg.classList.add("shrank-right-img");
    chamferH2.classList.add("left-h2-emphasis");

    collections.classList.add("hide");

    verticalLine.classList.add("hide");

    laTecnica.classList.remove("d-none");
    laTecnica.classList.add("show");
}
function shrinkChamferImg() {
    chamferImg.classList.remove("emphasis");
    chamferImg.classList.remove("emphasis-left-img");
    rosemaryImg.classList.remove("shrank");
    rosemaryImg.classList.remove("shrank-right-img");
    chamferH2.classList.remove("left-h2-emphasis");

    verticalLine.classList.remove("hide");
    verticalLine.classList.add("show");
}
function emphasiseRosemaryImg() {
    rosemaryImg.classList.add("emphasis");
    rosemaryImg.classList.add("emphasis-right-img");
    chamferImg.classList.add("shrank");
    chamferImg.classList.add("shrank-left-img");
    rosemaryH2.classList.add("right-h2-emphasis");

    collections.classList.add("hide");

    verticalLine.classList.add("hide");

    laTecnica.classList.remove("d-none");
    laTecnica.classList.add("show");
}
function shrinkRosemaryImg() {
    rosemaryImg.classList.remove("emphasis");
    rosemaryImg.classList.remove("emphasis-right-img");
    chamferImg.classList.remove("shrank");
    chamferImg.classList.remove("shrank-left-img");
    rosemaryH2.classList.remove("right-h2-emphasis");

    verticalLine.classList.remove("hide");
    verticalLine.classList.add("show");
}





