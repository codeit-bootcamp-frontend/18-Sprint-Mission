interface InputProps {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  handleKeyDown: (e: React.KeyboardEvent<HTMLElement>) => void;
}

export const Input = ({ value, onChange, handleKeyDown }: InputProps) => {
  return (
    <input
      type="text"
      value={value}
      onChange={onChange}
      onKeyDown={handleKeyDown}
      placeholder="할 일을 입력해주세요"
      className="focus:outline-none w-[1011px] border-2 border-slate-900 bg-slate-100 rounded-3xl px-5 py-2 shadow-md shadow-slate-800"
    />
  );
};
