import { Template } from "meteor/templating";
import { FlowRouter } from 'meteor/ostrio:flow-router-extra';

import './header.html';

Template.header.events({
    'click .go_home': function () {
        FlowRouter.go('/home');
    },


    'click .go_conference': function () {
        // FlowRouter.go('/conference');
    },
    'click .go_exhibition': function () {
        FlowRouter.go('/exhibition/list');
    },
    'click .go_poster': function () {
        // FlowRouter.go('/poster/list');
    },


    'click .go_logout': function () {
        Meteor.logout(function(error) {

            if(error) {
                console.log("ERROR: " + error.reason);
            }
            Meteor.logout(function (error) {
                console.log(error);
            });
            // FlowRouter.go('/login');
        });
    },
    'click .go_mypage': function () {
        // FlowRouter.go('/myPage');
    },
    'click .go_mypage_modify': function () {
        // FlowRouter.go('/myPage/modify');
    },
});

