import alignmentCenter from "/src/assets/icon/ic_alignment_center.svg";
import alignmentLeft from "/src/assets/icon/ic_alignment_left.svg";
import alignmentRight from "/src/assets/icon/ic_alignment_right.svg";
import arrow_down from "/src/assets/icon/ic_arrow_down.svg";
import back from "/src/assets/icon/ic_back.svg";
import bold from "/src/assets/icon/ic_bold.svg";
import bullet from "/src/assets/icon/ic_Bullet.svg";
import check from "/src/assets/icon/ic_check.svg";
import chevronLeft from "/src/assets/icon/ic_chevron_left.svg";
import chevronRight from "/src/assets/icon/ic_chevron_right.svg";
import close from "/src/assets/icon/ic_X.svg";
import coloring from "/src/assets/icon/ic_coloring.svg";
import facebook from "/src/assets/icon/ic_facebook.svg";
import google from "/src/assets/icon/ic_google.svg";
import hide from "/src/assets/icon/ic_hide.svg";
import instagram from "/src/assets/icon/ic_instagram.svg";
import italic from "/src/assets/icon/ic_italic.svg";
import kakao from "/src/assets/icon/ic_kakao.svg";
import likeFill from "/src/assets/icon/ic_like_fill.svg";
import like from "/src/assets/icon/ic_like.svg";
import medal from "/src/assets/icon/ic_medal.svg";
import numbering from "/src/assets/icon/ic_numbering.svg";
import plus from "/src/assets/icon/ic_plus.svg";
import profile from "/src/assets/icon/ic_profile.svg";
import searchDarker from "/src/assets/icon/ic_search_darker.svg";
import search from "/src/assets/icon/ic_search.svg";
import show from "/src/assets/icon/ic_show.svg";
import sort from "/src/assets/icon/ic_sort.svg";
import twitter from "/src/assets/icon/ic_twitter.svg";
import underline from "/src/assets/icon/ic_underline.svg";
import youtube from "/src/assets/icon/ic_youtube.svg";
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
