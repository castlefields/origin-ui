/**
 * User: austinrivas
 * Date: 5/2/13
 * Time: 2:24 AM
 * To change this template use File | Settings | File Templates.
 */

Template.serverLoadWidget.rendered = function () {
        function n() {
            e.length > 0 && (e = e.slice(1));
            while (e.length < t) {
                var n = e.length > 0 ? e[e.length - 1] : 50, r = n + Math.random() * 10 - 5;
                r < 0 && (r = 0);
                r > 100 && (r = 100);
                e.push(r)
            }
            var i = [];
            for (var s = 0; s < e.length; ++s)i.push([s, e[s]]);
            return i
        }

        function o() {
            s.setData([
                {label: "CPU at %", data: n(), lines: {show: !0, fill: !0}, points: {show: !1}, color: "#fd6e58"}
            ]);
            s.draw();
            setTimeout(o, r)
        }

        var e = [], t = 20, r = 500, i = {series: {shadowSize: 0}, yaxis: {min: 0, max: 100}, xaxis: {show: !1}}, s = $.plot($(".flot-line"), [
            {label: "CPU at %", data: n(), lines: {show: !1, fill: !0}, points: {show: !1}, color: "#fd6e58"}
        ], i);
        $(window).resize(function () {
            if ($(".flot-line").is(":visible")) {
                s.resize();
                s.setupGrid();
                s.draw()
            }
        });
        o();
};