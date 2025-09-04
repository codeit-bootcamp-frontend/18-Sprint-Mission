import facebookIcon from "../../assets/ic-facebook.svg";
import instagramIcon from "../../assets/ic-instagram.svg";
import twitterIcon from "../../assets/ic-twitter.svg";
import youtubeIcon from "../../assets/ic-youtube.svg";

const Social = {
  facebook: {
    icon: facebookIcon,
    link: "https://www.facebook.com",
  },
  twitter: {
    icon: twitterIcon,
    link: "https://www.twitter.com/",
  },
  youtube: {
    icon: youtubeIcon,
    link: "https://www.youtube.com/",
  },
  instagram: {
    icon: instagramIcon,
    link: "https://www.instagram.com/",
  },
} as const;

export type SocialType = (typeof Social)[keyof typeof Social];

export { Social };
