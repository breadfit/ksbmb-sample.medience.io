import './booth.html';

Template.booth.helpers({
    booth: function () {
        let booth = {
            "_id" : "6HqRtbGNqaKxkh84B",
            "idx" : 8,
            "userId" : "XcA6umnBkRB6zcfMg",
            "company" : {
            "kor" : "김해강소연구개발특구 빅드림웰바이오사업단",
                "eng" : "INNOPOLIS",
                "tel" : "055-320-3921",
                "address" : "경남 김해시 인제로 197 본관 9층 빅드림웰바이오사업단",
                "intro" : "",
                "thumb" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/thumb/ksev_thumb_08.png",
                "logo" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/icon/ksev_icon_08.png"
        },
            "manager" : {
            "name" : "조아형",
                "position" : "책임",
                "tel" : "010-8713-3921",
                "email" : "ahforyou@inje.ac.kr"
        },
            "site" : {
            "homepage" : "http://innopolis.inje.ac.kr",
                "facebook" : "",
                "instagram" : "",
                "youtube" : "https://youtube.com/channel/UCTxqceNv1lRHpvZSYnEnCug",
                "twitter" : "",
                "etc" : "https://blog.naver.com/thermofisherkorea"
        },
            "content" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/thermofisher_content.png",
            "brochure" : "/booth/innopolis_brochure.pdf",
            "video" : [
                {title: "소개 동영상 1", src: "https://medience.s3.ap-northeast-2.amazonaws.com/ksbmb.sample/video/1.mp4"},
                {title: "소개 동영상 2", src: "https://medience.s3.ap-northeast-2.amazonaws.com/ksbmb.sample/video/2.mp4"},
                {title: "소개 동영상 3", src: "https://medience.s3.ap-northeast-2.amazonaws.com/ksbmb.sample/video/3.mp4"},
            ]
        }

        // console.log(booth);

        // 파일명 추출하기
        let brochure = booth.brochure;
        var splitUrl = brochure.split("/");    //   "/" 로 전체 url 을 나눈다
        var urlLength = splitUrl.length;
        var fileName = splitUrl[urlLength-1];   // 나누어진 배열의 맨 끝이 파일명이다

        booth.brochure_filename = fileName;

        // console.log(booth);

        return booth;
    }
});

