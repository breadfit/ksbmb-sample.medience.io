import {FlowRouter} from "meteor/ostrio:flow-router-extra";

import './exhibition.html';

Template.exhibition.events({
    'click .go_boothList': function () {
        FlowRouter.go('/exhibition/list');
    },
    'click .btn_noticeView': function () {
        FlowRouter.go();
    }
});
