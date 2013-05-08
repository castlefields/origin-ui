/**
 * User: austinrivas
 * Date: 5/2/13
 * Time: 3:04 AM
 * To change this template use File | Settings | File Templates.
 */

Template.newTaskModal.rendered = function () {};

Template.newTaskModal.events({
    'click .submit': function () {
        e.preventDefault();
        $("#new-task").modal("hide");
        var $form = $(this),
            $tasklist = $(".tasklist");
        var $icon = $form.find("select[name=icons]"),
            $name = $form.find("input[name=task-name]"),
            $bookmark = $form.find("input[name=task-bookmarked]");
        if ($name.val() != "") {
            var elementToAdd = "";
            ($bookmark.is(":checked")) ? elementToAdd += "<li class='bookmarked'>" : elementToAdd += "<li>";

            elementToAdd += '<div class="check"><input type="checkbox" class="icheck-me" data-skin="square" data-color="blue"></div><span class="task"><i class="' + $icon.select2("val") + '"></i><span>' + $name.val() + '</span></span><span class="task-actions"><a href="#" class="task-delete" rel="tooltip" title="Delete that task"><i class="icon-remove"></i></a><a href="#" class="task-bookmark" rel="tooltip" title="Mark as important"><i class="icon-bookmark-empty"></i></a></span></li>';

            if ($tasklist.find(".bookmarked").length > 0) {
                if ($bookmark.is(":checked")) {
                    $tasklist.find(".bookmarked").first().before(elementToAdd);
                } else {
                    $tasklist.find(".bookmarked").last().after(elementToAdd);
                }
            } else {
                $tasklist.prepend(elementToAdd);
            }

            icheck();
            $tasklist.find("[rel=tooltip]").tooltip();

            $icon.select2("val", 'icon-adjust');
            $name.val("");
            $bookmark.prop("checked", false);
        }
    }
});