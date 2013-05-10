// Routes //////////////////////////////////////////////////////////////////////////////////////////////////////////////
Meteor.Router.add({
    '/': { as: 'login', to: function() {
        $("body").addClass('login');
        Session.set('pageTitle','Login');
        Session.set('error',true);
        return 'login';
    }},
    '/signout': { as: 'signout', to: function() {
        $("body").addClass('login');
        Session.set('pageTitle','Login');
        Session.set('error',true);
        return 'login';
    }},
    '*': { as: '404', to: function() {
        $("body").addClass('error');
        Session.set('pageTitle','Page Not Found');
        Session.set('error',true);
        return 'notFound';
    }}
});