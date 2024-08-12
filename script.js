function openNav() {
    document.getElementById("Navigation").style.width = "200px";
}

function closeNav() {
    document.getElementById("Navigation").style.width = "0";
}

function openAction(evt, name) {
    var i, acontent, alink;
    acontent = document.getElementsByClassName("acontent");
    for (i = 0; i < acontent.length; i++) {
        acontent[i].style.display = "none";
    }
    if (evt) {
        alink = document.getElementsByClassName("alink");
        for (i = 0; i < alink.length; i++) {
            alink[i].className = alink[i].className.replace(" active", "");
        }
        evt.currentTarget.className += " active";
    }
    document.getElementById(name).style.display = "block";
}

window.onload = function () {
    openAction(null, 'Home');
}

$(document).ready(function () {
    $('[data-toggle="popover"]').popover();
});
