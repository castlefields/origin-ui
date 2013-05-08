Meteor.Router.add({
    '/components/timeline': {as: 'componentsTimeline', to: function () {
        Session.set('pageTitle','Timeline');
        return 'componentsTimeline';
    }},
    '/components/statistics': {as: 'componentsStatistics', to: function () {
        Session.set('pageTitle','Statistics Widgets');
        return 'componentsStatistics';
    }},
    '/components/messages': {as: 'componentsMessages', to: function () {
        Session.set('pageTitle','Statistics Messages');
        return 'componentsMessages';
    }},
    '/components/gallery': {as: 'componentsGallery', to: function () {
        Session.set('pageTitle','Galleries');
        return 'componentsGallery';
    }},
    '/components/tiles': {as: 'componentsTiles', to: function () {
        Session.set('pageTitle', 'Tiles');
        return 'componentsTiles';
    }},
    '/components/buttons': {as: 'componentsButtons', to: function () {
        Session.set('pageTitle', 'Buttons & Icons');
        return 'componentsButtons';
    }},
    '/components/uielements': {as: 'componentsUIElements', to: function () {
        Session.set('pageTitle', 'User Interface Elements');
        return 'componentsUIElements';
    }},
    '/components/typography': {as: 'componentsTypography', to: function () {
        Session.set('pageTitle', 'Typography');
        return 'componentsTypography';
    }}
});


Template.componentsNav.isActive = function () {
    switch (Meteor.Router.page()) {
        case 'componentsTimeline':
            return 'active';
        case 'componentsStatistics':
            return 'active';
        case 'componentsMessages':
            return 'active';
        case 'componentsGallery':
            return 'active';
        case 'componentsTiles':
            return 'active';
        case 'componentsButtons':
            return 'active';
        case 'componentsUIElements':
            return 'active';
        case 'componentsTypography':
            return 'active';
        default:
            return;
    }
}