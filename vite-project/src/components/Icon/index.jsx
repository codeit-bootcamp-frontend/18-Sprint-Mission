import styled from "styled-components";
import IconLike from "@/assets/icons/ic_heart.svg";
import IconProfile from "@/assets/icons/ic_profile.svg";
import IconSearch from "@/assets/icons/ic_search.svg";
import IconDropdown from "@/assets/icons/ic_arrow_down.svg";
import IconEye from "@/assets/icons/ic_eye_open.svg";
import IconEyeOff from "@/assets/icons/ic_eye_closed.svg";
import IconSort from "@/assets/icons/ic_sort.svg";

const ICON_SIZES = {
  xl: "48px",
  lg: "40px",
  md: "32px",
  sm: "24px",
  xs: "20px",
  xxs: "16px",
};

const ICON_MAP = {
  profile: IconProfile,
  like: IconLike,
  search: IconSearch,
  dropdown: IconDropdown,
  eyeOff: IconEyeOff,
  eye: IconEye,
  sort: IconSort,
};

const StyledIcon = styled.img`
  display: inline-block;
  width: ${props => getIconSize(props.size, props.customSize)};
  height: ${props => getIconSize(props.size, props.customSize)};
`;

const getIconSize = (size, customSize) => {
  if (size === "custom" && customSize) return customSize;
  return ICON_SIZES[size];
};

const Icon = ({ size = "sm", customSize, icon, ...rest }) => {
  return <StyledIcon size={size} customSize={customSize} src={ICON_MAP[icon]} {...rest} />;
};

export default Icon;
