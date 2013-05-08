// Routes //////////////////////////////////////////////////////////////////////////////////////////////////////////////
Meteor.Router.add({
    '*': { as: '404', to: function() {
        $("body").addClass('error');
        Session.set('pageTitle','Page Not Found');
        Session.set('error',true);
        return 'notFound';
    }}
});