Template.datepickerInput.rendered = function () {
    $('.datepick').datepicker();
}

Template.timepickerInput.rendered = function () {
    $('.timepick').timepicker({
        defaultTime: 'current',
        minuteStep: 1,
        disableFocus: true,
        template: 'dropdown'
    });
};

Template.colorpickerInput.rendered = function () {
    $('.colorpick').colorpicker();
};