Meteor.Router.add({
    '/pages/notFound': { as: 'notFound', to: function() {
        $("body").addClass('error');
        Session.set('pageTitle','Page Not Found');
        Session.set('error',true);
        return 'notFound';
    }},
    '/pages/userProfile': { as: 'userProfile', to: function() {
        Session.set('pageTitle','User Profile');
        return 'userProfile';
    }}
});

Template.pagesNav.isActive = function () {
    switch (Meteor.Router.page()) {
        case 'notFound':
            return 'active';
        case 'opportunityView':
            return 'active';
        case 'opportunityView':
            return 'active';
        default:
            return;
    }
}