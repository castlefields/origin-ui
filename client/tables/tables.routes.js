Meteor.Router.add({
    '/tables/basic': {as: 'tablesBasic', to: function () {
        Session.set('pageTitle','Basic Tables');
        return 'tablesBasic';
    }},
    '/tables/dynamic': {as: 'tablesDynamic', to: function () {
        Session.set('pageTitle', 'Dynamic Tables');
        return 'tablesDynamic';
    }},
    '/tables/large': {as: 'tablesLarge', to: function () {
        Session.set('pageTitle', 'Large Tables');
        return 'tablesLarge';
    }}
});


Template.tablesNav.isActive = function () {
    switch (Meteor.Router.page()) {
        case 'tablesBasic':
            return 'active';
        case 'tablesDynamic':
            return 'active';
        case 'tablesLarge':
            return 'active';
        default:
            return;
    }
}