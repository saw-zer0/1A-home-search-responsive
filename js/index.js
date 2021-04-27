function expandHeight(element, finalHeight) {
    var currentHeight = element.offsetHeight;
    var animation = setInterval(() => {

        currentHeight += 5;

        if (currentHeight >= finalHeight) {
            clearInterval(animation);
            if (currentHeight > finalHeight) {
                currentHeight -= currentHeight - finalHeight;
            }
        }
        element.style.height = currentHeight + "px";

    }, 60 / 1000);

}
function collapseHeight(element, finalHeight) {
    var currentHeight = element.offsetHeight;
    var animation = setInterval(() => {

        currentHeight -= 5;

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
        expandHeight(target, 300);
        hamburgerCollapse = false;
    } else {
        collapseHeight(target, 0);
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
        expandHeight(target, 332);
        asideLeftCollapse = false;
    } else {
        collapseHeight(target, 0);
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
        expandHeight(target, 324);
        asideRightCollapse = false;
    } else {
        collapseHeight(target, 0);
        asideRightCollapse = true;
    }
})



window.addEventListener('resize', () => {

    console.log(window.innerWidth)

    if (window.innerWidth >= 992) {
        var asideLeft = document.getElementById("aside-left")
        var asideRight = document.getElementById("aside-right")
        asideLeft.style.height = "652px";
        asideRight.style.height = "652px";
    }
    else if (window.innerWidth >= 768) {
        collapseHeight(document.getElementById("nav-wrapper"), 0);
        collapseHeight(document.getElementById("aside-left"), 0);
        var asideRight = document.getElementById("aside-right");
        asideRight.style.height = "652px";
    }
    else {
        collapseHeight(document.getElementById("nav-wrapper"), 0);
        collapseHeight(document.getElementById("aside-left"), 0);
        collapseHeight(document.getElementById("aside-right"), 0);
    }
})