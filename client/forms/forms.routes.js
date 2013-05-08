Meteor.Router.add({
    '/forms/basic': {as: 'formsBasic', to: function () {
        Session.set('pageTitle','Basic Forms');
        return 'formsBasic';
    }},
    '/forms/extended': {as: 'formsExtended', to: function () {
        Session.set('pageTitle','Extended Forms');
        return 'formsExtended';
    }},
    '/forms/layouts': {as: 'formsLayouts', to: function () {
        Session.set('pageTitle','Form Layouts');
        return 'formsLayouts';
    }},
    '/forms/validation': {as: 'formsValidation', to: function () {
        Session.set('pageTitle','Input Validation');
        return 'formsValidation';
    }},
    '/forms/wizards': {as: 'formsWizards', to: function () {
        Session.set('pageTitle','Wizards');
        return 'formsWizards';
    }}

});

Template.formsNav.isActive = function () {
    switch (Meteor.Router.page()) {
        case 'formsBasic':
            return 'active';
        case 'formsExtended':
            return 'active';
        case 'formsLayouts':
            return 'active';
        case 'formsValidation':
            return 'active';
        case 'formsWizards':
            return 'active';
        default:
            return;
    }
}