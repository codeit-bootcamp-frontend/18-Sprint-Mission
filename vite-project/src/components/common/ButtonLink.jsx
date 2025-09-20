import { BTN_STYLE_TYPE } from "./ButtonClasses";

const ButtonLink = ({ btnStyle = "inactive", as, children, ...props }) => {
  const Component = as || "button";
  const btnTypeClass = BTN_STYLE_TYPE[btnStyle] || "";

  return (
    <Component className={`${btnTypeClass}`} {...props}>
      {children}
    </Component>
  );
};

export default ButtonLink;
