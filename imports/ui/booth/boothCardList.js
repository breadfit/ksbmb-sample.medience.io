import { Template } from "meteor/templating";

import './boothCardList.html';

Template.boothCardList.helpers({
    booths() {
        let boothsList = [
            {
                "_id" : "tyoCKzYZTCiECKrM7",
                "idx" : 2,
                "userId" : "goXLZo9r6fwKNgTMZ",
                "grade" : "diamond",
                "company" : {
                    "kor" : "Quantum design Korea",
                    "eng" : "Quantum design Korea",
                    "tel" : "02-2057-2710",
                    "address" : "서울시 강남구 도곡로 204 동신빌딩 303호",
                    "thumb" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/thumb/ksev_thumb_02.png",
                    "logo" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/icon/ksev_icon_02.png",
                    "intro" : "Quantum design Korea는 코어 테크놀로지를 기반으로 하는 세계 최첨단의 과학장비를 제공하는 기업입니다. 특히, 현재 각광을 받고 있는 EV 분야의 발전에 이바지하기 위해서, Nanoview Bioscience사의 Exoview 시스템을 기반으로 하는 효과적인 EV 측정 및 분석 솔루션을 제공함으로써, 여러분의 연구 및 산업 분야의 문제해결과 그 성공을 높은 기술력으로 지원하는 역할을 하고 있습니다."
                },
                "manager" : {
                    "name" : "이재욱",
                    "position" : "과장",
                    "tel" : "010-3542-9666",
                    "email" : "jwlee@qdkorea.com"
                },
                "site" : {
                    "homepage" : "http://www.qdkorea.com/introduction.html#p-32",
                    "facebook" : "",
                    "instagram" : "",
                    "youtube" : "https://www.youtube.com/channel/UCqPmSro4igapU7zmwYq8NaA",
                    "twitter" : "",
                    "etc" : "https://www.nanoviewbio.com/"
                },
                "content" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/qdkorea_content.png",
                "brochure" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/qdkorea_brochure.pdf",
                "video" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/qdkorea_video.m4v"
            },

            {
                "_id" : "AuAE7mXoPpQopqDzt",
                "idx" : 4,
                "userId" : "XcA6umnBkRB6zcfMg",
                "grade" : "gold",
                "company" : {
                    "kor" : "브렉소젠㈜",
                    "eng" : "BREXOGEN",
                    "tel" : "02–430-0401",
                    "address" : "서울특별시 송파구 중대로109, 601호",
                    "intro" : "당사는 자체 개발한 ‘엑소좀 생산 특화 고효율∙고기능 세포주 확립, 타깃 질환별 엑소좀 내 유효성분 조절, 고순도 엑소좀 분리∙정제’ 기술(BG-Platform)을 통해 기존 세포치료제가 가지는 한계를 극복하고자 노력하고 있으며, 아토피성 피부 염 및 비알콜성 지방간염 치료제 등의 파이프라인을 보유하고 있습니다.",
                    "thumb" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/thumb/ksev_thumb_04.png",
                    "logo" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/icon/ksev_icon_04.png"
                },
                "manager" : {
                    "name" : "임수환",
                    "position" : "과장",
                    "tel" : "070–4445-0253",
                    "email" : "suhwan.lim@brexogen.com"
                },
                "site" : {
                    "homepage" : "brexogen.com",
                    "facebook" : "",
                    "instagram" : "",
                    "youtube" : "",
                    "twitter" : "",
                    "etc" : ""
                },
                "content" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/brexogen_content.png",
                "brochure" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/brexogen_brochure.pdf"
            },

            {
                "_id" : "B5TYLs9mHwb8x7G6B",
                "idx" : 5,
                "userId" : "XcA6umnBkRB6zcfMg",
                "grade" : "gold",
                "company" : {
                    "kor" : "엑소코바이오",
                    "eng" : "EXOCOBIO",
                    "tel" : "02-2038-3915",
                    "address" : "서울특별시 금천구 가산디지털1로 19 대륭테크노타운18차 306호",
                    "intro" : "엑소코바이오는 엑소좀 기반의 바이오 신약 및 재생 에스테틱 분야의 글로벌 리딩 기업입니다. 끊임없는 연구 개발을 통한 인류의 건강한 삶을 위해 더 나은 가치를 만들어 갑니다.",
                    "thumb" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/thumb/ksev_thumb_05.png",
                    "logo" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/icon/ksev_icon_05.png"
                },
                "manager" : {
                    "name" : "곽현신",
                    "position" : "주임",
                    "tel" : "02-2138-2705",
                    "email" : "hyunshin.kwak@exocobio.com"
                },
                "site" : {
                    "homepage" : "http://exocobio.com/",
                    "facebook" : "https://www.facebook.com/ExoCoBio",
                    "instagram" : "https://www.instagram.com/exocobio.official/",
                    "youtube" : "https://www.youtube.com/channel/UClG4SKBlyZOMxbhNsfXIt8w",
                    "twitter" : "",
                    "etc" : "https://blog.naver.com/exocobio"
                },
                "content" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/exocobio_content.png",
                "brochure" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/exocobio_brochure.pdf",
                "video" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/exocobio_video.mp4",
                "link" : [
                    {
                        "label" : "채용공고 이벤트 참여하기",
                        "url" : "https://forms.gle/i3A8wBkkAxmD2T6s6"
                    }
                ]
            },

            {
                "_id" : "eYoKDrBsR5xcZkGF3",
                "idx" : 7,
                "userId" : "XcA6umnBkRB6zcfMg",
                "grade" : "gold",
                "company" : {
                    "kor" : "주식회사 엑소퍼트",
                    "eng" : "EXOPERT",
                    "tel" : "02-923-8833",
                    "address" : "서울시 동대문구 왕산로15 남서울빌딩 4층",
                    "intro" : "엑소퍼트는 혈액 내 엑소좀을 손상없이 분리하는 기술을 개발하고, 분리된 엑소좀의 신호를 딥러닝을 통해 분석하여 진단에 활용하여 간편하고 반복가능한 진단 기술을 개발하고 있습니다.",
                    "thumb" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/thumb/ksev_thumb_07.png",
                    "logo" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/icon/ksev_icon_07.png"
                },
                "manager" : {
                    "name" : "최연호",
                    "position" : "대표이사",
                    "tel" : "010-2872-0570",
                    "email" : "contact@exopert.com"
                },
                "site" : {
                    "homepage" : "www.exopert.com",
                    "facebook" : "",
                    "instagram" : "",
                    "youtube" : "",
                    "twitter" : "",
                    "etc" : ""
                },
                "content" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/exopert_content.png",
                "brochure" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/exopert_brochure.pdf",
                "video" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/exopert_video.mp4"
            },

            {
                "_id" : "cKjFMmLDag8KorZY8",
                "idx" : 1,
                "userId" : "XcA6umnBkRB6zcfMg",
                "grade" : "diamond",
                "company" : {
                    "kor" : "㈜일리아스바이오로직스",
                    "eng" : "ILIASBIO",
                    "tel" : "042-863-4450",
                    "address" : "대전광역시 유성구 테크노6로 40-20 ㈜일리아스바이오로직스",
                    "intro" : "고분자량의 약리단백질을 엑소좀 내에 탑재 가능한 독창적인 플랫폼기술 EXPLOR®(한·미 특허등록 완료)을 기반으로 2015년 KAIST 교원창업 되었습니다.\n대표 파이프라인은 염증성질환 치료제이며, 현재 비임상 단계로써 동물모델에서의 치료효과를 검증한 논문을 Science Advances지에 게재하였습니다. 또한 2020년 Series B 라운드를 완료해 5년간 약 500억원의 투자를 유치하였습니다.",
                    "thumb" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/thumb/ksev_thumb_01.png",
                    "logo" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/icon/ksev_icon_01.png"
                },
                "manager" : {
                    "name" : "김세명",
                    "position" : "주임연구원",
                    "tel" : "070-4060-0876",
                    "email" : "smkim@iliasbio.com"
                },
                "site" : {
                    "homepage" : "www.iliasbio.com",
                    "facebook" : "https://facebook.com/ILIAS.group",
                    "instagram" : "",
                    "youtube" : "",
                    "twitter" : "",
                    "etc" : "linkedin.com/company/ilias-biologics-inc"
                },
                "content" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/iliasbio_content.png",
                "brochure" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/iliasbio_brochure.pdf",
                "video" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/iliasbio_video.mp4"
            },

            {
                "_id" : "xSNERGK97zm4RQsrD",
                "idx" : 3,
                "userId" : "XcA6umnBkRB6zcfMg",
                "grade" : "diamond",
                "company" : {
                    "kor" : "㈜드림",
                    "eng" : "DREAM",
                    "tel" : "031-695-6023",
                    "address" : "경기도 수원시 영통구 신원로 88, 103-610 (신동, 디지털엠파이어2)",
                    "intro" : "(주)드림은 입자 물성 분석부터 성분 분석, 액적 분석 등의 다양한 연구 실험을 위한 분석/측정 시스템을 제공하고 있습니다. 특히 세계 최초 NTA 나노입자추적분석기 개발사인 Particle Metrix, Colloid Metrix사의 국내 대리점으로서, 입자 특성화에 대한 분석 솔루션을 개발, 판매 하고 있습니다.",
                    "thumb" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/thumb/ksev_thumb_03.png",
                    "logo" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/icon/ksev_icon_03.png"
                },
                "manager" : {
                    "name" : "최예은",
                    "position" : "선임",
                    "tel" : "031-695-6023",
                    "email" : "Yechoi@dreamcorp.co.kr"
                },
                "site" : {
                    "homepage" : "www.pmxcmx.co.kr",
                    "facebook" : "",
                    "instagram" : "",
                    "youtube" : "www.youtube.com/user/ParticleMetrix",
                    "twitter" : "",
                    "etc" : ""
                },
                "content" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/dream_content.png",
                "brochure" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/dream_brochure.pdf"
            },

            {
                "_id" : "yzLJdTBg5rhN2fcC3",
                "idx" : 6,
                "userId" : "XcA6umnBkRB6zcfMg",
                "grade" : "gold",
                "company" : {
                    "kor" : "(주)파나진",
                    "eng" : "PANAGENE",
                    "tel" : "042-861-9295",
                    "address" : "대전시 유성구 테크노 10로 54",
                    "intro" : "파나진은 우수한 원천 소재인 PNA와 그 응용기술을 바탕으로 지속적인 개발 노력을 통해 다중진단이 가능하고 단일 염기 다형성이나 극소량 발생한 돌연변이까지도 정확하게 검출할 수 있는 독창적인 유전자진단 원천기술들을 확보한 진단회사입니다.",
                    "thumb" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/thumb/ksev_thumb_06.png",
                    "logo" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/icon/ksev_icon_06.png"
                },
                "manager" : {
                    "name" : "홍연수",
                    "position" : "선임",
                    "tel" : "010-5510-1327",
                    "email" : "yeonsu.hong@panagene.com"
                },
                "site" : {
                    "homepage" : "www.panagene.com",
                    "facebook" : "",
                    "instagram" : "",
                    "youtube" : "",
                    "twitter" : "",
                    "etc" : ""
                },
                "content" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/panagene_content.png",
                "brochure" : "https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/booth/content/panagene_brochure.pdf"
            },

            {
                "_id" : "6HqRtbGNqaKxkh84B",
                "idx" : 8,
                "userId" : "XcA6umnBkRB6zcfMg",
                "grade" : "diamond",
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
        ];

        return boothsList;
    }
});


