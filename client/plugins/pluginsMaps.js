/**
 * class Gmap3Menu
 * display a menu on google maps
 *
 * dependencies:
 * gmap3 5.x
 * jquery 1.3+
 *
 **/
function Gmap3Menu($div){
    var that = this,
        items = [],
        ts = null,
        namespace = "gmap3-menu";

    // create an item using a new closure
    function create(item){
        var $item = $("<div class='item "+item.cl+"'>"+item.label+"</div>");
        $item
            // bind click on item
            .click(function(){
                if (typeof item.fnc === "function"){
                    item.fnc.apply($(this), []);
                }
            })
            // manage mouse over coloration
            .hover(
            function(){$(this).addClass("hover");},
            function(){$(this).removeClass("hover");}
        );
        return $item;
    };

    function clearTs(){
        if (ts){
            clearTimeout(ts);
            ts = null;
        }
    };

    function initTs(t){
        ts = setTimeout(function(){that.close()}, t);
    };

    this.add = function(label, cl, fnc){
        items.push({
            label:label,
            fnc:fnc,
            cl:cl
        });
    }

    // close previous and open a new menu
    this.open = function(event){
        this.close();
        var offset = {x:0, y:0},
            $menu = $("<div id='"+namespace+"'></div>");

        // add items in menu
        $.each(items, function(i, item){
            $menu.append(create(item));
        });

        // manage auto-close menu on mouse hover / out
        $menu.hover(
            function(){clearTs();},
            function(){initTs(3000);}
        );

        // change the offset to get the menu visible (#menu width & height must be defined in CSS to use this simple code)
        if ( event.pixel.y + $menu.height() > $div.height()){
            offset.y = -$menu.height();
        }
        if ( event.pixel.x + $menu.width() > $div.width()){
            offset.x = -$menu.width();
        }

        // use menu as overlay
        $div.gmap3({
            overlay:{
                latLng: event.latLng,
                options:{
                    content: $menu,
                    offset: offset
                },
                tag: namespace
            }
        });

        // start auto-close
        initTs(5000);
    }

    // close the menu
    this.close = function(){
        clearTs();
        $div.gmap3({clear:{name:"overlay", tag:namespace}});
    }
}

Template.pluginsMaps.rendered = function () {

    $("#map1").length > 0 && $("#map1").gmap3({map: {options: {center: [22.49156846196823, 89.75802349999992], zoom: 7}}});
    $("#map4").length > 0 && $("#map4").gmap3({map: {options: {center: [46.578498, 2.457275], zoom: 5}}, marker: {values: [
        {latLng: [48.8620722, 2.352047], data: "Paris !"},
        {address: "86000 Poitiers, France", data: "Poitiers : great city !"},
        {address: "66000 Perpignan, France", data: "Perpignan ! GO USAP !", options: {icon: "http://maps.google.com/mapfiles/marker_green.png"}}
    ], events: {click: function (e, t, n) {
        var r = $(this).gmap3("get"), i = $(this).gmap3({get: {name: "infowindow"}});
        if (i) {
            i.open(r, e);
            i.setContent(n.data)
        } else $(this).gmap3({infowindow: {anchor: e, options: {content: n.data}}})
    }}}});
    if ($("#map2").length > 0) {
        console.log('map2');
        var M = new Gmap3Menu($("#map2")), _, D, P;

        function H(e, t) {
            t ? D = e : P = e;
            j()
        }

        function B(e) {
            var t = {name: "marker"};
            if (e && D) {
                t.tag = "from";
                $("#map2").gmap3({clear: t})
            } else if (!e && P) {
                t.tag = "to";
                $("#map2").gmap3({clear: t})
            }
            $("#map2").gmap3({marker: {latLng: _.latLng, options: {draggable: !0, icon: new google.maps.MarkerImage("http://maps.gstatic.com/mapfiles/icon_green" + (e ? "A" : "B") + ".png")}, tag: e ? "from" : "to", events: {dragend: function (t) {
                H(t, e)
            }}, callback: function (t) {
                H(t, e)
            }}})
        }

        function j() {
            if (!D || !P)return;
            $("#map2").gmap3({getroute: {options: {origin: D.getPosition(), destination: P.getPosition(), travelMode: google.maps.DirectionsTravelMode.DRIVING}, callback: function (e) {
                if (!e)return;
                $("#map2").gmap3({get: "directionrenderer"}).setDirections(e)
            }}})
        }

        M.add("Direction to here", "itemB", function () {
            M.close();
            B(!1)
        });
        M.add("Direction from here", "itemA separator", function () {
            M.close();
            B(!0)
        });
        M.add("Zoom in", "zoomIn", function () {
            var e = $("#map2").gmap3("get");
            e.setZoom(e.getZoom() + 1);
            M.close()
        });
        M.add("Zoom out", "zoomOut", function () {
            var e = $("#map2").gmap3("get");
            e.setZoom(e.getZoom() - 1);
            M.close()
        });
        M.add("Center here", "centerHere", function () {
            $("#map2").gmap3("get").setCenter(_.latLng);
            M.close()
        });
        $("#map2").gmap3({map: {options: {center: [48.85861640881589, 2.3459243774414062], zoom: 5}, events: {rightclick: function (e, t) {
            _ = t;
            M.open(_)
        }, click: function () {
            M.close()
        }, dragstart: function () {
            M.close()
        }, zoom_changed: function () {
            M.close()
        }}}, directionsrenderer: {divId: "directions", options: {preserveViewport: !0, markerOptions: {visible: !1}}}})
    }
    if ($("#map3").length > 0)var F = [
        [47.398349200359256, .791015625],
        [47.249406957888446, 1.8896484375],
        [47.517200697839414, 2.9443359375],
        [47.010225655683485, 3.2958984375],
        [46.800059446787316, 2.5927734375],
        [46.46813299215554, 1.8017578125],
        [45.98169518512228, 1.7578125],
        [46.6795944656402, 3.9111328125],
        [48.40003249610685, 1.6259765625],
        [48.719961222646276, 2.8125],
        [48.48748647988415, 3.603515625],
        [48.22467264956519, 4.21875],
        [47.754097979680026, 4.74609375],
        [48.07807894349862, 3.3837890625],
        [48.48748647988415, 1.8896484375],
        [47.45780853075031, 1.23046875],
        [46.830133640447386, .703125],
        [46.13417004624326, 2.8564453125],
        [46.37725420510028, 3.427734375],
        [48.37084770238363, 2.0654296875],
        [48.3416461723746, 2.4609375],
        [48.1367666796927, 2.2412109375],
        [48.54570549184746, .4833984375],
        [47.30903424774781, 6.2841796875],
        [45.85941212790755, 4.658203125],
        [44.276671273775186, 3.3837890625],
        [44.24519901522129, 5.185546875],
        [43.48481212891603, -0.3076171875],
        [48.1367666796927, 11.513671875],
        [49.468124067331644, 11.07421875],
        [50.90303283111257, 8.9208984375],
        [51.01375465718821, 9.66796875],
        [50.98609893339354, 10.546875],
        [51.01375465718821, 10.9423828125],
        [50.764259357116465, 11.07421875],
        [50.42951794712287, 10.37109375],
        [49.781264058178365, 9.31640625],
        [48.429200555568386, 9.755859375],
        [47.96050238891509, 10.634765625],
        [47.754097979680026, 8.2177734375],
        [48.893615361480194, 7.822265625],
        [50.819818262156545, 6.4599609375],
        [51.09662294502995, 7.119140625],
        [51.12421275782688, 7.7783203125],
        [50.65294336725708, 7.470703125],
        [50.12057809796007, 6.8994140625],
        [49.49667452747044, 6.4599609375],
        [49.866316729538674, 5.712890625],
        [50.2612538275847, 5.09765625],
        [50.064191736659104, 4.3505859375],
        [49.696061819115634, 5.3173828125],
        [49.32512199104001, 5.9326171875],
        [48.893615361480194, 6.240234375],
        [49.439556958940855, 4.833984375],
        [51.890053935216926, 5.6689453125],
        [52.05249047600099, 7.119140625],
        [52.13348804077147, 7.998046875],
        [52.16045455774706, 8.3935546875],
        [52.29504228453735, 9.0966796875],
        [52.40241887397331, 10.0634765625],
        [52.562995039558004, 11.0302734375],
        [52.562995039558004, 11.42578125],
        [52.07950600379697, 12.2607421875],
        [51.69979984974196, 13.447265625],
        [51.39920565355378, 12.83203125],
        [52.10650519075632, 10.986328125],
        [52.10650519075632, 9.580078125],
        [51.26191485308451, 12.919921875],
        [50.65294336725708, 13.4912109375],
        [50.12057809796007, 12.7880859375],
        [49.52520834197441, 12.65625],
        [49.26780455063753, 13.4033203125],
        [49.09545216253482, 14.1064453125],
        [48.25394114463431, 12.9638671875],
        [47.754097979680026, 12.0849609375],
        [47.487513008956554, 11.865234375],
        [47.05515408550348, 16.19384765625],
        [46.965259400349275, 11.57958984375],
        [47.17477833929903, 11.2939453125],
        [47.18971246448421, 10.56884765625],
        [47.040182144806664, 10.1513671875],
        [46.73986059969267, 10.26123046875],
        [46.40756396630067, 10.72265625],
        [46.58906908309182, 11.689453125],
        [47.05515408550348, 10.96435546875],
        [46.70973594407157, 11.35986328125],
        [46.55886030311719, 9.82177734375],
        [47.279229002570816, 9.140625],
        [46.6795944656402, 9.140625],
        [46.37725420510028, 9.1845703125],
        [46.13417004624326, 9.7119140625],
        [46.01222384063236, 10.8544921875],
        [45.24395342262324, 7.3388671875],
        [44.74673324024678, 7.6025390625]
    ], I = $("#map3").gmap3({map: {options: {maxZoom: 14, zoom: 5}}, marker: {values: F, cluster: {radius: 100, events: {click: function (e) {
        $("#map3").gmap3({map: {options: {center: e.main.getPosition(), zoom: e.main.map.zoom + 1}}})
    }}, 0: {content: "<div class='cluster cluster-1'>CLUSTER_COUNT</div>", width: 53, height: 52}, 20: {content: "<div class='cluster cluster-2'>CLUSTER_COUNT</div>", width: 56, height: 55}, 50: {content: "<div class='cluster cluster-5'>CLUSTER_COUNT</div>", width: 66, height: 65}}}})

};