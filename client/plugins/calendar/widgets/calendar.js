/**
 * User: austinrivas
 * Date: 5/2/13
 * Time: 3:27 AM
 */

Template.calendarWidget.rendered = function () {
    $('.calendar').fullCalendar({
        header: {
            left: '',
            center: 'prev,title,next',
            right: 'month,agendaWeek,agendaDay,today'
        },
        buttonText: {
            today: 'Today'
        },
        editable: true
    });
    $(".fc-button-effect").remove();
    $(".fc-button-next .fc-button-content").html("<i class='icon-chevron-right'></i>");
    $(".fc-button-prev .fc-button-content").html("<i class='icon-chevron-left'></i>");
    $(".fc-button-today").addClass('fc-corner-right');
    $(".fc-button-prev").addClass('fc-corner-left');
    var T = new Date, N = T.getDate(), C = T.getMonth(), k = T.getFullYear();
    $(".calendar").fullCalendar("addEventSource", [
        {title: "All Day Event", start: new Date(k, C, 1)},
        {title: "Long Event", start: new Date(k, C, N - 5), end: new Date(k, C, N - 2)},
        {id: 999, title: "Repeating Event", start: new Date(k, C, N - 3, 16, 0), allDay: !1},
        {id: 999, title: "Repeating Event", start: new Date(k, C, N + 4, 16, 0), allDay: !1},
        {title: "Meeting", start: new Date(k, C, N, 10, 30), allDay: !1},
        {title: "Lunch", start: new Date(k, C, N, 12, 0), end: new Date(k, C, N, 14, 0), allDay: !1},
        {title: "Birthday Party", start: new Date(k, C, N + 1, 19, 0), end: new Date(k, C, N + 1, 22, 30), allDay: !1},
        {title: "Click for Google", start: new Date(k, C, 28), end: new Date(k, C, 29), url: "http://google.com/"}
    ]);
};