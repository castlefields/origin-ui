Template.imageSelectInputS2.rendered = function () {
    function O(e) {
        return e.id ? "<img style='padding-right:10px;' src='/img/demo/flags/" + e.id.toLowerCase() + ".gif'/>" + e.text : e.text
    }

    $("#simg").select2({formatResult: O, formatSelection: O, escapeMarkup: function (e) {
        return e
    }})
}

Template.icoSelectInputS2.rendered = function () {
    function A(e) {
        return"<i class='" + e.text + "'></i> ." + e.text
    }

    $("#sico").select2({formatResult: A, formatSelection: A, escapeMarkup: function (e) {
        return e
    }})
}

Template.dropdownSearchInputS2.rendered = function () {
    $(".select2-me").select2();
}

Template.multiSelectInputS2.rendered = function () {
};
