Template.formsEditableElements.rendered = function () {
    if ($("#editableElements").length > 0) {
        $.mockjaxSettings.responseTime = 500;
        $.mockjax({url: "/post", response: function (e) {
        }});
        $.mockjax({url: "/error", status: 400, statusText: "Bad Request", response: function (e) {
            this.responseText = "Please input correct value"
        }});
        $.mockjax({url: "/status", status: 500, response: function (e) {
            this.responseText = "Internal Server Error"
        }});
        $.mockjax({url: "/groups", response: function (e) {
            this.responseText = [
                {value: 0, text: "Guest"},
                {value: 1, text: "Service"},
                {value: 2, text: "Customer"},
                {value: 3, text: "Operator"},
                {value: 4, text: "Support"},
                {value: 5, text: "Admin"}
            ]
        }})
    }
};
