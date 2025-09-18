import { INPUT_TYPE_STYLE } from "./InputClasses";

const Input = ({ inputTypeStyle = "basic", as, type, ...props }) => {
  const styleClass = INPUT_TYPE_STYLE[inputTypeStyle] || "";
  const Component = as || "input";
  return (
    <div>
      {type === "file" ? (
        <div className={`${styleClass} bg-gray-100`}>
          <img src={props.src} alt={props.alt} />
          <Component type={type} {...props} hidden />
        </div>
      ) : (
        <Component
          className={`${styleClass} bg-gray-100`}
          type={type}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;
