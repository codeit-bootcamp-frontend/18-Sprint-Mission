import LogoIcon from "../../assets/logoIcon.svg";
import Logo from "../../assets/logo.svg";
import profile from "../../assets/profile.svg";

const Header = () => {
  return (
    <div className="px-6 py-2 md:px-52 flex justify-between">
      <div className="flex gap-4 items-center">
        <img src={LogoIcon} alt="판다마켓 판다 아이콘" />
        <img src={Logo} alt="판다마켓 로고" />
        <span>자유게시판</span>
        <span>중고마켓</span>
      </div>
      <div>
        <img src={profile} alt="판다마켓 프로필" />
      </div>
    </div>
  );
};

export default Header;
