import { Template } from "meteor/templating";

import './exhibition_list.html';

Template.boothNotice.helpers({
    firstNotice() {
        let notice = {
            "_id" : "2esrKmggKu4TPT6di",
            "no" : 101,
            "title" : "플랫폼 로그인 오류 대처 방법",
            "subTitle" : "로그인",
            "shortContent" : " 플랫폼 로그인 방법입니다.\n\n1. 플랫폼 첫 화면에 뜨는 ID/PW 두 칸에 동일하게\nKSEV홈페이지에 등록된 개인 이메일을 기입.\n예) ID -> ksev@naver.com / PW -> ksev@naver.com\n\n2. 오류 시,\n인터넷 도구>쿠키삭제 후 재 시도",
            "content" : " 플랫폼 로그인 방법입니다.<br /><br />1. 플랫폼 첫 화면에 뜨는 ID/PW 두 칸에 동일하게<br />KSEV홈페이지에 등록된 개인 이메일을 기입.<br />예) ID -> ksev@naver.com / PW -> ksev@naver.com<br /><br />2. 오류 시,<br />인터넷 도구>쿠키삭제 후 재 시도",
            "writer" : "관리자",
            "files" : [],
            "topFix" : false,
        };

        return notice;
    },
    secondNotice() {
        // let _notices = Notices.find({}, { sort: { createdAt: -1 }, limit:3 }).fetch();
        let notices = [
            {
                "_id" : "2esrKmggKu4TPT6di",
                "no" : 101,
                "title" : "플랫폼 로그인 오류 대처 방법",
                "subTitle" : "로그인",
                "shortContent" : " 플랫폼 로그인 방법입니다.\n\n1. 플랫폼 첫 화면에 뜨는 ID/PW 두 칸에 동일하게\nKSEV홈페이지에 등록된 개인 이메일을 기입.\n예) ID -> ksev@naver.com / PW -> ksev@naver.com\n\n2. 오류 시,\n인터넷 도구>쿠키삭제 후 재 시도",
                "content" : " 플랫폼 로그인 방법입니다.<br /><br />1. 플랫폼 첫 화면에 뜨는 ID/PW 두 칸에 동일하게<br />KSEV홈페이지에 등록된 개인 이메일을 기입.<br />예) ID -> ksev@naver.com / PW -> ksev@naver.com<br /><br />2. 오류 시,<br />인터넷 도구>쿠키삭제 후 재 시도",
                "writer" : "관리자",
                "files" : [],
                "topFix" : false,
            },

            {
                "_id" : "ad3E7codHQxJth69X",
                "no" : 102,
                "title" : "[KSEV2020] 연례학술대회 다시 보기 안내 (기한:1주일)",
                "subTitle" : "",
                "shortContent" : "안녕하십니까 한국세포밖소포체학히 회원 여러분, \n\n금일부터 개최된 KSEV2020 연례학술대회 강연다시보기가 (허락해주신 연자분들에 한하여) 학회 종료 후 1주일 동안\n가능합니다.\n\n추후 자세한 사항을 다시 안내 드리도록 하겠습니다.\n\n한국세포밖소포체학회 사무국 드림 ",
                "content" : "안녕하십니까 한국세포밖소포체학히 회원 여러분, <br /><br />금일부터 개최된 KSEV2020 연례학술대회 강연다시보기가 (허락해주신 연자분들에 한하여) 학회 종료 후 1주일 동안<br />가능합니다.<br /><br />추후 자세한 사항을 다시 안내 드리도록 하겠습니다.<br /><br />한국세포밖소포체학회 사무국 드림 ",
                "writer" : "관리자",
                "files" : [],
                "topFix" : false,
            }
        ]

        return notices;
    }
});

