import {Template} from "meteor/templating";
import {FlowRouter} from "meteor/ostrio:flow-router-extra";

import './boothCard.html';

Template.boothCard.events({
    'click .go_booth': function(event, instance) {
        let data = instance.data;
        FlowRouter.go('/booth/'+data._id);
    },
});

