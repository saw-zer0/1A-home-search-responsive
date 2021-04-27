function expandHeight(element, finalHeight, speed) {
    var currentHeight = element.offsetHeight;
    var animation = setInterval(() => {

        currentHeight += speed;

        if (currentHeight >= finalHeight) {
            clearInterval(animation);
            if (currentHeight > finalHeight) {
                currentHeight -= currentHeight - finalHeight;
            }
        }
        element.style.height = currentHeight + "px";

    }, 60 / 1000);

}
function collapseHeight(element, finalHeight, speed) {
    var currentHeight = element.offsetHeight;
    var animation = setInterval(() => {

        currentHeight -= speed;

        if (currentHeight <= finalHeight) {
            clearInterval(animation);
            if (currentHeight < finalHeight) {
                currentHeight += currentHeight - finalHeight;
            }
        }

        element.style.height = currentHeight + "px";
    }, 60 / 1000);

}

var hamburger = document.getElementById("hamburger");
var asideLeftHeading = document.getElementById("aside-left-heading");
var asideRightHeading = document.getElementById("aside-right-heading");
var hamburgerCollapse = true;
var asideLeftCollapse = true;
var asideRightCollapse = true;

hamburger.addEventListener("click", () => {
    var target = document.getElementById("nav-wrapper");
    if(target.offsetHeight === 300){
        hamburgerCollapse = false;
    }
    if (hamburgerCollapse) {
        expandHeight(target, 300, 5);
        hamburgerCollapse = false;
    } else {
        collapseHeight(target, 0, 5);
        hamburgerCollapse = true;
    }
})
asideLeftHeading.addEventListener("click", () => {
    if(window.innerWidth>=992){return};
    var target = document.getElementById("aside-left");
    if(target.offsetHeight === 332){
        asideLeftCollapse = false
    }
    if (asideLeftCollapse) {
        expandHeight(target, 332, 5);
        asideLeftCollapse = false;
    } else {
        collapseHeight(target, 0, 5);
        asideLeftCollapse = true;
    }
})
asideRightHeading.addEventListener("click", () => {
    if(window.innerWidth>=768){return};
    var target = document.getElementById("aside-right")
    if(target.offsetHeight === 324){
        asideRightCollapse = false;
    }
    if (asideRightCollapse) {
        expandHeight(target, 324, 5);
        asideRightCollapse = false;
    } else {
        collapseHeight(target, 0, 5);
        asideRightCollapse = true;
    }
})



window.addEventListener('resize', () => {
    console.log("window size changed", window.innerWidth)

    if (window.innerWidth >= 992) {
        var asideLeft = document.getElementById("aside-left")
        var asideRight = document.getElementById("aside-right")
        expandHeight(asideLeft, 700, 10)
        expandHeight(asideRight, 700, 10)

        asideLeft.style.height = "700px";
        asideRight.style.height = "652px";
    }
    else if (window.innerWidth >= 768) {
        collapseHeight(document.getElementById("nav-wrapper"), 0, 5);
        collapseHeight(document.getElementById("aside-left"), 0, 5);
        var asideRight = document.getElementById("aside-right");
        asideRight.style.height = "652px";
    }
    else {
        collapseHeight(document.getElementById("nav-wrapper"), 0, 5);
        collapseHeight(document.getElementById("aside-left"), 0, 5);
        collapseHeight(document.getElementById("aside-right"), 0, 5);
    }
})