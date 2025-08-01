import { useMediaQuery } from "react-responsive";
import pandaLogo from "../../assets/images/panda_logo.svg";
import "./Logo.css";

export default function Logo() {
  const isMobile = useMediaQuery({ minWidth: 375, maxWidth: 767 });

  return (
    <div className="logo">
      {!isMobile && <img src={pandaLogo} alt="판다마켓 로고" />}
      <h1>판다마켓</h1>
    </div>
  );
}
