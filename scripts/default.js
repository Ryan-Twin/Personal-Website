// Default Javascript for all pages.
// Version: 9/17/2020

function openNav() {
    document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
    document.getElementById("myNav").style.height = "0%";
}

function resize() {
    if ($(window).width() < 600) {
        $("#menu-button").removeClass("btn-lg");
        $(".navbar-brand").html("Ryan Towle");
    }
    else {
        $("#menu-button").addClass("btn-lg");
        $(".navbar-brand").html("Ryan Towle—<small>Designer, Programmer, Competitor</small>");
    }
}

/**
 * UNUSED - Generates and sets a random color for the stripes in the background.
 */
//function recolorStripes() {

//}

$(document).ready(function() {
    $(window).on("resize", resize);
    resize();
    recolorStripes();
});
