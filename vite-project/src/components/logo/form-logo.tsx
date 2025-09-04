import largeLogo from "../../assets/logo-large.svg";
import mediumLogo from "../../assets/logo-medium.svg";
import { MediaQueryBreakpoint } from "../../utils/breakpoint";

function FormLogo() {
  return (
    <picture>
      <source srcSet={mediumLogo} media={MediaQueryBreakpoint.mobile} />
      <img src={largeLogo} />
    </picture>
  );
}

export default FormLogo;
