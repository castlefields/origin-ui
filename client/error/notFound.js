Template.notFound.events({
    'click .back': function () {
        Session.set('error',false);
        $('body').removeClass('error');
    }
});