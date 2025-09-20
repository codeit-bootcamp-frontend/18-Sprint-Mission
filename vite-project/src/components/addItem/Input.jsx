import { INPUT_TYPE_STYLE } from "./InputClasses";

const Input = ({
  inputTypeStyle = "basic",
  as,
  type,
  id,
  imgUrl,
  onChange,
  onClick,
  onKeyDown,
  ...props
}) => {
  const styleClass = INPUT_TYPE_STYLE[inputTypeStyle] || "";
  const Component = as || "input";

  return (
    <div>
      {type === "file" ? (
        <div className="flex gap-8">
          <div className="flex flex-col gap-4">
            <label className={`${styleClass} bg-gray-100 cursor-pointer`}>
              <img src={props.src} alt={props.alt} />
              <Component
                accept="image/*"
                type={type}
                {...props}
                id={id}
                className="hidden"
                onChange={onChange}
              />
            </label>
            {imgUrl && (
              <p className="text-red-400">
                *이미지 등록은 최대 1개까지 가능합니다
              </p>
            )}
          </div>
          {imgUrl && (
            <div className="relative">
              <img
                src={imgUrl}
                alt="잠시대기"
                className="h-[282px] rounded-xl object-cover aspect-square"
              />
              <img
                src="/ic_X.svg"
                alt="X 아이콘"
                className="absolute cursor-pointer top-3 right-3"
                onClick={() => onClick()}
              />
            </div>
          )}
        </div>
      ) : (
        <Component
          className={`${styleClass} bg-gray-100`}
          type={type}
          onKeyDown={onKeyDown}
          onChange={onChange}
          {...props}
        />
      )}
    </div>
  );
};

export default Input;
