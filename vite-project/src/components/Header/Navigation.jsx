const Navigation = () => {
  return (
    <nav className="flex gap-8">
      <a
        href="/board"
        className="text-gray-600 hover:text-blue-600 transition-colors"
      >
        자유게시판
      </a>
      <a
        href="/market"
        className="text-gray-600 hover:text-blue-600 transition-colors"
      >
        중고마켓
      </a>
    </nav>
  );
};

export default Navigation;
