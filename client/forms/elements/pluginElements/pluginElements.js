Template.dualMultiSelectInput.rendered = function () {
    $(".multiselect").each(function () {
        var $el = $(this);
        var selectableHeader = $el.attr('data-selectableheader'),
            selectionHeader = $el.attr('data-selectionheader');
        if (selectableHeader != undefined) {
            selectableHeader = "<div class='multi-custom-header'>" + selectableHeader + "</div>";
        }
        if (selectionHeader != undefined) {
            selectionHeader = "<div class='multi-custom-header'>" + selectionHeader + "</div>";
        }
        $el.multiSelect({
            selectionHeader: selectionHeader,
            selectableHeader: selectableHeader
        });
    });
}

Template.groupedDualMultiSelectInput.rendered = function () {
    $(".multiselect").each(function () {
        var $el = $(this);
        var selectableHeader = $el.attr('data-selectableheader'),
            selectionHeader = $el.attr('data-selectionheader');
        if (selectableHeader != undefined) {
            selectableHeader = "<div class='multi-custom-header'>" + selectableHeader + "</div>";
        }
        if (selectionHeader != undefined) {
            selectionHeader = "<div class='multi-custom-header'>" + selectionHeader + "</div>";
        }
        $el.multiSelect({
            selectionHeader: selectionHeader,
            selectableHeader: selectableHeader
        });
    });
}

Template.spinnerInput.rendered = function () {
    $('.spinner').spinner();
}

Template.tagsInput.rendered = function () {
    $('.tagsinput').tagsInput({width: 'auto', height: 'auto'});
}

Template.sliderInput.rendered = function () {
    $(".slider").each(function () {
        var $el = $(this);
        var min = parseInt($el.attr('data-min')),
            max = parseInt($el.attr('data-max')),
            step = parseInt($el.attr('data-step')),
            range = $el.attr('data-range'),
            rangestart = parseInt($el.attr('data-rangestart')),
            rangestop = parseInt($el.attr('data-rangestop'));

        var opt = {
            min: min,
            max: max,
            step: step,
            slide: function (event, ui) {
                $el.find('.amount').html(ui.value);
            }
        };

        if (range !== undefined) {
            opt.range = true;
            opt.values = [rangestart, rangestop];
            opt.slide = function (event, ui) {
                $el.find('.amount').html(ui.values[0] + " - " + ui.values[1]);
                $el.find(".amount_min").html(ui.values[0] + "$");
                $el.find(".amount_max").html(ui.values[1] + "$");
            };
        }

        $el.slider(opt);
        if (range !== undefined) {
            var val = $el.slider('values');
            $el.find('.amount').html(val[0] + ' - ' + val[1]);
            $el.find(".amount_min").html(val[0] + "$");
            $el.find(".amount_max").html(val[1] + "$");
        } else {
            $el.find('.amount').html($el.slider('value'));
        }
    });
}

Template.styledCheckboxes.rendered = function () {
    var $el = $(this);
    if ($el.hasClass("checkbox-active")) {
        $el.find("i").toggleClass("icon-check-empty").toggleClass("icon-check");
    }
    $el.bind('click', function (e) {
        e.preventDefault();
        $el.find("i").toggleClass("icon-check-empty").toggleClass("icon-check");
        $el.toggleClass("checkbox-active");
    });
}