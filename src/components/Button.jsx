const Button = ({ children, className, isDisabled = false, type, onClick }) => (
  <button
    className={className}
    disabled={isDisabled}
    type={type}
    onClick={onClick}
  >
    {children}
  </button>
);

export default Button;
