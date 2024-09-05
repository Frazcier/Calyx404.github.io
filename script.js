$(document).ready(function () {
    $("article").click(function () {
        let target = this.getAttribute("data-target");
        loadPageContent(target);
    });
});

/** Loads specified HTML content into 'page-content' and sets the corresponding JavaScript file. */
function loadPageContent(targetString) {
    $(".right-content").load("../pages/" + targetString + ".html", function(response, status, xhr) {
        console.log(status);
        // Display 404 error message if the page could not be found.
        if (status === "error") { $(".right-content").html("<h1><strong>404</strong> | This page could not be found.</h1>"); }
    });
}