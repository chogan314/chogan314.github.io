$(document).ready(function() {
    $("#index li>ul").parent().find("div:first-child").wrap("<div class='expandable'></div>");
    $(".expandable").prepend("<div class='expand-symbol'>+</div>");
    $(".expandable").click(function() {
        if ($(this).parent().hasClass("show-children")) {
            $(this).parent().removeClass("show-children");
            $(this).parent().find("li").removeClass("show-children");
            $(this).parent().find(".expand-symbol").html("+");
        } else {
            $(this).parent().addClass("show-children");
            $(this).find(".expand-symbol").html("-");
        }
    });
});