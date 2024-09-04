$(document).ready(function () {
    loadPageContent("article_01");
});

/** Loads specified HTML content into 'page-content' and sets the corresponding JavaScript file. */
function loadPageContent(targetString) {
    $(".right-content").load("./pages/" + targetString + ".html", function(response, status, xhr) {
        // Display 404 error message if the page could not be found.
        if (status === "error") { $(".right-content").html("<h1><strong>404</strong> | This page could not be found.</h1>"); }
        else {
            console.log("Success");
        }
        //     // Remove any existing script with class 'target-script'.
        //     $("script.target-script").remove();

        //     // Create a new script element to load the script file.
        //     var script = document.createElement("script");
        //     script.className = "target-script";
        //     script.src = "../script/page_content_script/" + targetString + ".js";

        //     // Append the new script to the head.
        //     document.head.appendChild(script);
        // }
    });
}