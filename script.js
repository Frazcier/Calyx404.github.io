$(document).ready(function () {
    $("article").click(function () {
        loadPageContent(this.getAttribute("data-target"));
    });

    triggerSearch();
    scrollReveal();

});

function dropdownToggle (content) {
    $("." + content).toggle();
}

function scrollReveal () {
    ScrollReveal({
        reset: true,
        distance: '100px',
        duration: 2000,
        // delay: 500
    });
    
    ScrollReveal().reveal('.top', { origin: 'top'});
    ScrollReveal().reveal('.left', { origin: 'left'});
    ScrollReveal().reveal('.right', { origin: 'right'});

    $.each($(".bottom"), function () {
        ScrollReveal().reveal(this, $(this).data(), {origin:'bottom'});
    });
}
 
function triggerSearch () {

    $(".search-close").click(function () {
        $(".search-close").css("visibility", "hidden");
    });
    
    $(".search-input").on("input", function () {
        if ($(".search-input").val().length > 0) {
            $(".search-close").css("visibility", "visible");
        } else {
            $(".search-close").css("visibility", "hidden");
        }
    });
    
    $(".search-input").keypress(function (event) {
        $(".search-close").css("visibility", "visible");
        if (event.key === "Enter") {
            event.preventDefault();
            $(".search-icon").click();
        }
    });
}

function loadPageContent(targetString) {
    $(".right-content").load("../pages/" + targetString + ".html", function(response, status, xhr) {
        console.log(status);
        if (status === "error") { $(".right-content").html("<h1><strong>404</strong> | This page could not be found.</h1>"); } // Display 404 error message if the page could not be found.
    });
}