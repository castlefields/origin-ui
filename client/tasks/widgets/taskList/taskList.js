/**
 * User: austinrivas
 * Date: 5/2/13
 * Time: 2:09 AM
 */

Template.taskListWidget.rendered = function () {
    $(".tasklist").on('click', "li", function (e) {
        var $el = $(this), $checkbox = $(this).find('input[type=checkbox]').first();
        $el.toggleClass('done');
        if (e.target.nodeName == 'LABEL') {
            e.preventDefault();
        }
        if (e.target.nodeName != "INS" && e.target.nodeName != 'INPUT') {
            $checkbox.prop('checked', !($checkbox.prop('checked')));
            $(".tasklist input").iCheck("update");
        }
    });
    $(".tasklist").on("is.Changed", 'input[type=checkbox]', function () {
        $(this).parents("li").toggleClass("done");
    });
    if ($("#new-task .select2-me").length > 0) {
        function formatIcons(option) {
            if (!option.id) return option.text;
            return "<i class='" + option.text + "'></i> ." + option.text;
        }

        $("#new-task .select2-me").select2({formatResult: formatIcons, formatSelection: formatIcons, escapeMarkup: function (m) {
            return m;
        }});
    }
    $(".tasklist").on('click', '.task-bookmark', function (e) {
        var $el = $(this), $lielement = $(this).parents('li'), $ulelement = $(this).parents('ul');
        e.preventDefault();
        e.stopPropagation();
        $lielement.toggleClass('bookmarked');
        if ($lielement.hasClass('bookmarked')) {
            $lielement.fadeOut(200, function () {
                $lielement.prependTo($ulelement).fadeIn();
            });
        } else {
            if ($ulelement.find('.bookmarked').length > 0) {
                $lielement.fadeOut(200, function () {
                    $lielement.insertAfter($ulelement.find('.bookmarked').last()).fadeIn();
                });
            } else {
                $lielement.fadeOut(200, function () {
                    $lielement.prependTo($ulelement).fadeIn();
                });
            }
        }
    });
    $(".tasklist").on('click', '.task-delete', function (e) {
        e.preventDefault();
        e.stopPropagation();
        var $el = $(this);
        $el.parents("li").fadeOut();
    });
    $(".tasklist").sortable({items: "li", opacity: 0.7, placeholder: 'widget-placeholder-2', forcePlaceholderSize: true, tolerance: "pointer"});
};