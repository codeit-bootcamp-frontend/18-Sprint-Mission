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
    url: alignmentCenter,
    type: "mask",
  },
  alignmentLeft: {
    url: alignmentLeft,
    type: "mask",
  },
  alignmentRight: {
    url: alignmentRight,
    type: "mask",
  },
  arrow_down: {
    url: arrow_down,
    type: "mask",
  },
  back: {
    url: back,
    type: "mask",
  },
  bold: {
    url: bold,
    type: "mask",
  },
  bullet: {
    url: bullet,
    type: "mask",
  },
  check: {
    url: check,
    type: "bg",
  },
  chevronLeft: {
    url: chevronLeft,
    type: "mask",
  },
  chevronRight: {
    url: chevronRight,
    type: "mask",
  },
  close: {
    url: close,
    type: "bg",
  },
  coloring: {
    url: coloring,
    type: "mask",
  },
  facebook: {
    url: facebook,
    type: "mask",
  },
  google: {
    url: google,
    type: "bg",
  },
  hide: {
    url: hide,
    type: "mask",
  },
  instagram: {
    url: instagram,
    type: "mask",
  },
  italic: {
    url: italic,
    type: "mask",
  },
  kakao: {
    url: kakao,
    type: "bg",
  },
  likeFill: {
    url: likeFill,
    type: "bg",
  },
  like: {
    url: like,
    type: "mask",
  },
  medal: {
    url: medal,
    type: "bg",
  },
  numbering: {
    url: numbering,
    type: "mask",
  },
  plus: {
    url: plus,
    type: "mask",
  },
  profile: {
    url: profile,
    type: "bg",
  },
  searchDarker: {
    url: searchDarker,
    type: "mask",
  },
  search: {
    url: search,
    type: "mask",
  },
  show: {
    url: show,
    type: "mask",
  },
  sort: {
    url: sort,
    type: "mask",
  },
  twitter: {
    url: twitter,
    type: "mask",
  },
  underline: {
    url: underline,
    type: "mask",
  },
  youtube: {
    url: youtube,
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
  const icon = ICONS[iconName];
  if (!icon) return;
  return icon.type === "bg" ? backgroundIconStyle(icon.url) : maskIconStyle(icon.url);
};

export default iconStyle;
