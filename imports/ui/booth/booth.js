import './booth.html';

Template.booth.helpers({
    booth: function () {
        let booth = {
            "_id" : "6HqRtbGNqaKxkh84B",
            "idx" : 8,
            "userId" : "XcA6umnBkRB6zcfMg",
            "company" : {
            "kor" : "써모 피셔 사이언티픽 코리아㈜",
                "eng" : "Thermo Fisher Scientific",
                "tel" : "02-2023-0600",
                "address" : "서울시 강남구 광평로 281, 수서오피스 빌딩 11층",
                "intro" : "'글로벌 질량분석 기업'",
                "thumb" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/thumb/ksev_thumb_08.png",
                "logo" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/icon/ksev_icon_08.png"
        },
            "manager" : {
            "name" : "서정우",
                "position" : "책임",
                "tel" : "02-3420-8611",
                "email" : "Joungwoo.seo@thermofisher.com"
        },
            "site" : {
            "homepage" : "www.thermofisher.com",
                "facebook" : "",
                "instagram" : "",
                "youtube" : "https://youtube.com/channel/UCTxqceNv1lRHpvZSYnEnCug",
                "twitter" : "",
                "etc" : "https://blog.naver.com/thermofisherkorea"
        },
            "content" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/thermofisher_content.png",
            "brochure" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/thermofisher_brochure.pdf",
            "video" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/thermofisher_video.mp4"
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

