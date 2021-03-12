import {Template} from "meteor/templating";
import './footerSponsorList.html';

Template.footerSponsorList.helpers({
    sponsers() {
        let sponsers = [
            { idx: 1, img: 'https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/sponsors/sponsor_01.png', alt: '㈜일리아스바이오로직스', url: 'http://iliasbio.com' },
            { idx: 2, img: 'https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/sponsors/sponsor_02.png', alt: 'Quantum design Korea', url: 'http://www.qdkorea.com/introduction.html#p-32' },
            { idx: 3, img: 'https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/sponsors/sponsor_03.png', alt: '㈜드림', url: 'http://pmxcmx.co.kr/' },
            { idx: 4, img: 'https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/sponsors/sponsor_04.png', alt: '브렉소젠㈜', url: 'http://brexogen.com' },
            { idx: 5, img: 'https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/sponsors/sponsor_05.png', alt: '엑소코바이오', url: 'http://exocobio.com' },
            { idx: 6, img: 'https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/sponsors/sponsor_06.png', alt: '㈜파나진', url: 'http://panagene.com' },
            { idx: 7, img: 'https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/sponsors/sponsor_07.png', alt: '주식회사 엑소퍼트', url: 'https://www.exopert.com/' },
            { idx: 8, img: 'https://medience.s3.ap-northeast-2.amazonaws.com/ksev.2020/sponsors/sponsor_08.png', alt: '써모 피셔 사이언티픽 코리아', url: 'https://www.thermofisher.com' },
        ];

        return sponsers;
    }
});
