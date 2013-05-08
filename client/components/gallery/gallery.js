Template.simpleGallery.rendered = function () {
    $(".del-gallery-pic").click(function (e) {
        e.preventDefault();
        var $el = $(this);
        var $parent = $el.parents("li");
        $parent.fadeOut(400, function () {
            $parent.remove();
        });
    });
};
