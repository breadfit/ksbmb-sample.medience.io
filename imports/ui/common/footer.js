import './footer.html';

Template.footer.events({
    'click .btn_open_terms1': function (event) {
        console.log('show');
        const popName = event.currentTarget.name;
        $('.termsPopupWrap').show();
        $('.termsPop01').show();
    },
    'click .btn_open_terms2': function (event) {
        console.log('show');
        const popName = event.currentTarget.name;
        $('.termsPopupWrap').show();
        $('.termsPop02').show();
    },
    'click .btn_close_terms': function (event) {
        const popName = event.currentTarget.name;
        $('.termsPopupWrap').hide();
        $('.termsPop01').hide();
        $('.termsPop02').hide();
    }
});
