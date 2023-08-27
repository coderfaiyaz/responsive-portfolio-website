var tagsubHeading = document.getElementsByClassName('tag-subHeading');
var tagcontent = document.getElementsByClassName("tag-content");

function opentag(tagname) {
    for (tagsub of tagsubHeading) {
        tagsub.classList.remove("active-subHeading");
    }
    for (tagcont of tagcontent) {
        tagcont.classList.remove("active-content");
    }
    event.currentTarget.classList.add("active-subHeading");
    document.getElementById(tagname).classList.add("active-content");
}

var sidemenu = document.getElementById("sidebar");

function openmenu() {
    sidemenu.style.right = "0";
}

function closemenu() {
    sidemenu.style.right = "-200px";
}