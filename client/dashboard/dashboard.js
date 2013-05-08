Template.dashboard.rendered = function () {
    var L = {id: "jQuery.PageGuide", title: "Take a quick tour of all the possibilities", steps: [
        {target: ".ui-resizable-handle", content: "You can resize this navigation. It will also snap to the original width if you are near it!", direction: "right"},
        {target: ".content-remove", content: "You can remove widgets, previous/next widgets will automatically resize!", direction: "right"},
        {target: ".messages", content: "Check out this fully working chat (with automated answer)!", direction: "left"},
        {target: ".alpha .alpha-val", content: "You can click on this elements to get an alphabetical overview.", direction: "left"},
        {target: ".colo", content: "Here you can choose between 9 different colors for this theme!", direction: "bottom"},
        {target: ".sett", content: "Here you can choose between fixed and fluid layout!", direction: "bottom"}
    ]};
    if (( location.pathname == "/" || location.pathname == "" ) && location.host == "localhost:3000" && $(window).width() > 767) {
        if(Session.equals('seenGuide', false)) {
            Session.set('seenGuide', true);
            bootbox.animate(!1);
            bootbox.confirm("Would you like to start the page guide? It will show you functions you could miss!", "No", "Yes", function (e) {
                e && $.pageguide(L, {events: {close: function () {
                    $.pageguide("unload")
                }}}).open();
            })
        }
    }
}