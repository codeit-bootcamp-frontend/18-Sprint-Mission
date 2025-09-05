import googleImage from "../../assets/ic-google.svg";
import kakaoTalkImage from "../../assets/ic-kakaotalk.svg";

const SocialLogin = {
  kakaotalk: {
    name: "kakaotalk",
    image: kakaoTalkImage,
  },
  google: {
    name: "google",
    image: googleImage,
  },
} as const;

export type SocialLoginType = (typeof SocialLogin)[keyof typeof SocialLogin];

export { SocialLogin };
