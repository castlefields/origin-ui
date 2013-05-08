/**
 * User: austinrivas
 * Date: 5/2/13
 * Time: 3:21 AM
 */
function slimScrollUpdate(elem, toBottom) {
    if(elem.length > 0){
        var height = parseInt(elem.attr('data-height')),
            vis = (elem.attr("data-visible") == "true") ? true : false,
            start = (elem.attr("data-start") == "bottom") ? "bottom" : "top";
        var opt = {
            height: height,
            color: "#666",
            start: start
        };
        if (vis) {
            opt.alwaysVisible = true;
            opt.disabledFadeOut = true;
        }
        if (toBottom !== undefined) opt.scrollTo = toBottom+"px";
        elem.slimScroll(opt);
    }
}

Template.addressBookWidget.rendered = function () {
    $(".table .alpha").click(function (e) {
        e.preventDefault();
        var $el = $(this), str = "ABCDEFGHIJKLMNOPQRSTUVWXYZ", elements = "", available = [];
        $el.parents().find('.alpha .alpha-val span').each(function () {
            available.push($(this).text());
        });
        elements += "<li class='active'><span>All</span></li>";
        for (var i = 0; i < str.length; i++) {
            var active = ($.inArray(str.charAt(i), available) != -1) ? " class='active'" : "";
            elements += "<li" + active + "><span>" + str.charAt(i) + "</span></li>";
        }
        $el.parents(".table").before("<div class='letterbox'><ul class='letter'>" + elements + "</ul></div>");
        $(".letterbox .letter > .active").click(function () {
            var $el = $(this);
            if ($el.text() != "All") {
                slimScrollUpdate($el.parents(".scrollable"), 0);
                var scrollToElement = $el.parents(".box-content").find(".table .alpha:contains('" + $el.text() + "')");
                slimScrollUpdate($el.parents(".scrollable"), scrollToElement.position().top);
            }
            $el.parents(".letterbox").remove();
        });
    });
};