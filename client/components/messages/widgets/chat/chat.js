/**
 * User: austinrivas
 * Date: 5/2/13
 * Template: chatWidget
 */

Template.chatWidget.rendered = function () {
    $("#message-form .text input").on("focus", function (e) {
        var $el = $(this);
        $el.parents(".messages").find(".typing").addClass("active").find(".name").html("John Doe");
        slimScrollUpdate($el.parents(".scrollable"), 100000);
    });

    $("#message-form .text input").on("blur", function (e) {
        var $el = $(this);
        $el.parents(".messages").find(".typing").removeClass("active");
        slimScrollUpdate($el.parents(".scrollable"), 100000);
    });
};