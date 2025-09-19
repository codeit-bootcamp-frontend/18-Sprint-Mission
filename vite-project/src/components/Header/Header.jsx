import Logo from "./Logo";
import Navigation from "./Navigation";
import Profile from "./Profile";

export default function Header() {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-10">
      <div className="px-4 sm:px-8 md:px-16 lg:px-24 xl:px-36 py-4 flex items-center justify-between">
        {/* 왼쪽 그룹: 로고 + 네비게이션 버튼들 */}
        <div className="flex items-center gap-6">
          <Logo />
          <Navigation />
        </div>

        {/* 오른쪽: 프로필 버튼 */}
        <Profile />
      </div>
    </header>
  );
}
