Template.login.events({
    'click .submit': function () {
        Session.set('error',false);
        $('body').removeClass('login');
    }
});