import plusIc from "@/assets/plus.svg";
import Image from "next/image";

export const Button = () => {
  return (
    <button className="w-[168px] border-2 border-slate-900 bg-slate-100 rounded-3xl px-5 py-2 shadow-md shadow-slate-800 font-bold flex justify-center gap-2 text-slate-900">
      <Image src={plusIc} width={16} height={16} alt="추가 아이콘" /> 추가하기
    </button>
  );
};
