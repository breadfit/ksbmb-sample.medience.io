import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import './common/header';
import './common/footer';
import './common/footerSponsorList';

import './exhibition/exhibition';
import './exhibition/exhibition_list';

import './booth/booth';
import './booth/boothCardList';
import './booth/boothCard';

import './notFound.html';



FlowRouter.route('/', {
    name:'exhibition',
    action() { this.render('exhibition'); }
});

FlowRouter.route('/home', {
    name:'exhibition',
    action() { this.render('exhibition'); }
});

FlowRouter.route('/exhibition', {
    name:'exhibition',
    action() { this.render('exhibition'); }
});

FlowRouter.route('/exhibition/list', {
    name:'exhibition_list',
    action() {
        this.render('exhibition_list');
    }
});


FlowRouter.route('/booth/:_id', {
    name:'booth',
    action() {
        this.render('booth');
    }
});



FlowRouter.route('*', {
    name:'notFound',
    action() { this.render('notFound');
    }
});
