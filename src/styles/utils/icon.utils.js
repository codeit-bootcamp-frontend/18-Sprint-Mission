import alignmentCenter from "@/assets/icon/ic_alignment_center.svg?url";
import alignmentLeft from "@/assets/icon/ic_alignment_left.svg?url";
import alignmentRight from "@/assets/icon/ic_alignment_right.svg?url";
import arrow_down from "@/assets/icon/ic_arrow_down.svg?url";
import back from "@/assets/icon/ic_back.svg?url";
import bold from "@/assets/icon/ic_bold.svg?url";
import bullet from "@/assets/icon/ic_Bullet.svg?url";
import check from "@/assets/icon/ic_check.svg?url";
import chevronLeft from "@/assets/icon/ic_chevron_left.svg?url";
import chevronRight from "@/assets/icon/ic_chevron_right.svg?url";
import close from "@/assets/icon/ic_X.svg?url";
import coloring from "@/assets/icon/ic_coloring.svg?url";
import facebook from "@/assets/icon/ic_facebook.svg?url";
import google from "@/assets/icon/ic_google.svg?url";
import hide from "@/assets/icon/ic_hide.svg?url";
import instagram from "@/assets/icon/ic_instagram.svg?url";
import italic from "@/assets/icon/ic_italic.svg?url";
import kakao from "@/assets/icon/ic_kakao.svg?url";
import likeFill from "@/assets/icon/ic_like_fill.svg?url";
import like from "@/assets/icon/ic_like.svg?url";
import medal from "@/assets/icon/ic_medal.svg?url";
import numbering from "@/assets/icon/ic_numbering.svg?url";
import plus from "@/assets/icon/ic_plus.svg?url";
import profile from "@/assets/icon/ic_profile.svg?url";
import searchDarker from "@/assets/icon/ic_search_darker.svg?url";
import search from "@/assets/icon/ic_search.svg?url";
import show from "@/assets/icon/ic_show.svg?url";
import sort from "@/assets/icon/ic_sort.svg?url";
import twitter from "@/assets/icon/ic_twitter.svg?url";
import underline from "@/assets/icon/ic_underline.svg?url";
import youtube from "@/assets/icon/ic_youtube.svg?url";
import { css } from "styled-components";

// 아이콘 변수
const ICONS = {
  alignmentCenter: {
    name: alignmentCenter,
    type: "mask",
  },
  alignmentLeft: {
    name: alignmentLeft,
    type: "mask",
  },
  alignmentRight: {
    name: alignmentRight,
    type: "mask",
  },
  arrow_down: {
    name: arrow_down,
    type: "mask",
  },
  back: {
    name: back,
    type: "mask",
  },
  bold: {
    name: bold,
    type: "mask",
  },
  bullet: {
    name: bullet,
    type: "mask",
  },
  check: {
    name: check,
    type: "bg",
  },
  chevronLeft: {
    name: chevronLeft,
    type: "mask",
  },
  chevronRight: {
    name: chevronRight,
    type: "mask",
  },
  close: {
    name: close,
    type: "bg",
  },
  coloring: {
    name: coloring,
    type: "mask",
  },
  facebook: {
    name: facebook,
    type: "mask",
  },
  google: {
    name: google,
    type: "bg",
  },
  hide: {
    name: hide,
    type: "mask",
  },
  instagram: {
    name: instagram,
    type: "mask",
  },
  italic: {
    name: italic,
    type: "mask",
  },
  kakao: {
    name: kakao,
    type: "bg",
  },
  likeFill: {
    name: likeFill,
    type: "bg",
  },
  like: {
    name: like,
    type: "mask",
  },
  medal: {
    name: medal,
    type: "bg",
  },
  numbering: {
    name: numbering,
    type: "mask",
  },
  plus: {
    name: plus,
    type: "mask",
  },
  profile: {
    name: profile,
    type: "bg",
  },
  searchDarker: {
    name: searchDarker,
    type: "mask",
  },
  search: {
    name: search,
    type: "mask",
  },
  show: {
    name: show,
    type: "mask",
  },
  sort: {
    name: sort,
    type: "mask",
  },
  twitter: {
    name: twitter,
    type: "mask",
  },
  underline: {
    name: underline,
    type: "mask",
  },
  youtube: {
    name: youtube,
    type: "mask",
  },
};
// 단일 색상은 컬러 변경을 위해 mask로 작성
const maskIconStyle = (url) => css`
  mask-image: url(${url});
  -webkit-mask-image: url(${url});
  mask-repeat: no-repeat;
  mask-position: center;
  mask-size: contain;
  -webkit-mask-repeat: no-repeat;
  -webkit-mask-position: center;
  -webkit-mask-size: contain;
`;
const backgroundIconStyle = (url) => css`
  background: url(${url}) no-repeat center;
  background-size: contain;
`;
// 아이콘의 타입별 함수실행
const iconStyle = (iconName) => {
  if (ICONS[iconName].type === "bg") {
    return backgroundIconStyle(ICONS[iconName].name);
  } else {
    return maskIconStyle(ICONS[iconName].name);
  }
};
export default iconStyle;
