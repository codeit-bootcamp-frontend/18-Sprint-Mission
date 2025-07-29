import "./Button.css";

function Button({ title, onClick }) {
  return (
    <button className="Button" onClick={onClick}>
      {title}
    </button>
  );
}

export default Button;
