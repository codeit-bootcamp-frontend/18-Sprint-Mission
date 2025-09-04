import type { JSX } from "react";
import { type SocialType } from "../social/social";

function SocialLink({ social }: { social: SocialType }): JSX.Element {
  return (
    <a href={social.link} target="_blank">
      <img src={social.icon} alt={social.link} />
    </a>
  );
}

export default SocialLink;
