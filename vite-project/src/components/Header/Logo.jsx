const Logo = () => {
  return (
    <div className="flex items-center">
      <div className="w-10 h-10 overflow-hidden mr-2">
        <img
          src="/src/assets/panda.png"
          alt="판다마켓 로고"
          className="w-full h-full object-cover"
        />
      </div>
      <a href="/">
        <span className="text-2xl font-bold" style={{ color: "#3692FF" }}>
          판다마켓
        </span>
      </a>
    </div>
  );
};

export default Logo;
