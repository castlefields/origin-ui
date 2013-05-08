function showTooltip(e, t, n) {
    $('<div id="tooltip" class="flot-tooltip tooltip"><div class="tooltip-arrow"></div>' + n + "</div>").css({top: t - 43, left: e - 15}).appendTo("body").fadeIn(200)
}

Template.audienceOverviewWidget.rendered = function () {
    var f = [
        [1262304e6, 1300],
        [12649824e5, 2200],
        [12674016e5, 3600],
        [127008e7, 5200],
        [1272672e6, 4500],
        [12753504e5, 3900],
        [12779424e5, 3600],
        [12806208e5, 4600],
        [12832992e5, 5300],
        [12858912e5, 7100],
        [12885696e5, 7800],
        [12912417e5, 8195]
    ];
    $.plot($("#flot-audience"), [
        {label: "Visits", data: f, color: "#3a8ce5"}
    ], {xaxis: {min: (new Date(2009, 12, 1)).getTime(), max: (new Date(2010, 11, 2)).getTime(), mode: "time", tickSize: [1, "month"], monthNames: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]}, series: {lines: {show: !0, fill: !0}, points: {show: !0}}, grid: {hoverable: !0, clickable: !0}, legend: {show: !1}});
    $("#flot-audience").bind("plothover", function (e, t, n) {
        if (n) {
            if (previousPoint != n.dataIndex) {
                var previousPoint = n.dataIndex;
                $("#tooltip").remove();
                var r = n.datapoint[1].toFixed();
                showTooltip(n.pageX, n.pageY, n.series.label + " = " + r)
            }
        } else {
            $("#tooltip").remove();
            previousPoint = null
        }
    });
};