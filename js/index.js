function expandHeight(element, finalHeight) {
    var currentHeight = element.offsetHeight;
    var animation = setInterval(() => {

        currentHeight += 5;

        if (currentHeight >= finalHeight) {
            clearInterval(animation);
            if(currentHeight>finalHeight){
                currentHeight -= currentHeight-finalHeight;
            }
        }
        element.style.height = currentHeight + "px";
        
        console.log(element.offsetHeight)
    }, 60 / 1000);

}
function collapseHeight(element, finalHeight) {
    var currentHeight = element.offsetHeight;
    var animation = setInterval(() => {

        currentHeight -= 5;

        if (currentHeight <= finalHeight) {
            clearInterval(animation);
            if(currentHeight<finalHeight){
                currentHeight += currentHeight-finalHeight;
            }
        }

        element.style.height = currentHeight + "px";
        console.log(element.offsetHeight)
    }, 60 / 1000);

}

var hamburger = document.getElementById("hamburger");
var asideLeftHeading = document.getElementById("aside-left-heading");
var asideRight = document.getElementById("aside-right");
var hamburgerCollapse = true;
var asideLeftCollapse = true;
var asideRightCollapse = true;

hamburger.addEventListener("click", () => {
    var target = document.getElementById("nav-wrapper");
    if (hamburgerCollapse) {
        expandHeight(target, 300);
        hamburgerCollapse = false;
    } else {
        collapseHeight(target, 0);
        hamburgerCollapse = true;
    }
})
asideLeftHeading.addEventListener("click", () => {
    var target = document.getElementById("aside-left");
    if (asideLeftCollapse) {
        expandHeight(target, 332);
        asideLeftCollapse = false;
    } else {
        collapseHeight(target, 0);
        asideLeftCollapse = true;
    }
})
asideRight.addEventListener("click", () => {
    if (asideRightCollapse) {
        expandHeight(asideRight, 324);
        asideRightCollapse = false;
    } else {
        collapseHeight(asideRight, 0);
        asideRightCollapse = true;
    }
})