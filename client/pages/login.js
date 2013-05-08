Template.login.events({
    'click .submit': function () {
        Session.set('login',false);
        $('body').removeClass('login');
    }
});