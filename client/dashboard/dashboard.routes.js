Meteor.Router.add({
    '/': { as: 'dashboard', to: function() {
        Session.set('pageTitle','Dashboard');
        return 'dashboard';
    }}
});

Template.dashboardNav.isActive = function () {
    switch (Meteor.Router.page()) {
        case 'dashboard':
            return 'active';
        default:
            return;
    }
}