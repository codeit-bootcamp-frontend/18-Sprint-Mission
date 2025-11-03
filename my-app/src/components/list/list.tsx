import todoIc from "@/assets/todo.svg";
import doneIc from "@/assets/done.svg";
import Image from "next/image";
import todocheck from "@/assets/todocheck.svg";
import donecheck from "@/assets/donecheck.svg";
import todoEmpty from "@/assets/todoempty.svg";
import doneEmpty from "@/assets/doneempty.svg";
import { TodoProps } from "@/pages";

interface Props {
  todos: TodoProps[];
  handleComplete: (id: number, updateData: boolean) => void;
}

export const List = ({ todos, handleComplete }: Props) => {
  const todoList = todos.filter((item) => !item.isCompleted);
  const doneList = todos.filter((item) => item.isCompleted);
  return (
    <div className="flex gap-6 mt-8">
      <div className="flex flex-col gap-4 basis-1/2">
        <Image src={todoIc} width={101} height={36} alt="todo 아이콘" />
        {todoList.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {todos
              .filter((item) => !item.isCompleted)
              .map((item) => (
                <li
                  className=" h-12 flex items-center gap-4 border-2 border-slate-900 rounded-[27px] px-3"
                  key={item.id}
                >
                  <button
                    onClick={() => handleComplete(item.id, item.isCompleted)}
                  >
                    <Image
                      src={todocheck}
                      width={32}
                      height={32}
                      alt="todo 체크"
                    />
                  </button>
                  {item.name}
                </li>
              ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center text-slate-400">
            <Image src={todoEmpty} width={240} height={240} alt="todo 없음" />
            <p>할 일이 없어요.</p>
            <p>TODO를 새롭게 추가해주세요!</p>
          </div>
        )}
      </div>
      <div className="flex flex-col gap-4 basis-1/2">
        <Image src={doneIc} width={101} height={36} alt="done 아이콘" />
        {doneList.length > 0 ? (
          <ul className="flex flex-col gap-4">
            {todos
              .filter((item) => item.isCompleted)
              .map((item) => (
                <li
                  className="h-12 flex items-center gap-4 border-2 border-slate-900 rounded-[27px] px-3 bg-accent-violet-100 line-through"
                  key={item.id}
                >
                  <button
                    onClick={() => handleComplete(item.id, item.isCompleted)}
                  >
                    <Image
                      src={donecheck}
                      width={32}
                      height={32}
                      alt="todo 체크"
                    />
                  </button>
                  {item.name}
                </li>
              ))}
          </ul>
        ) : (
          <div className="flex flex-col items-center justify-center text-slate-400">
            <Image src={doneEmpty} width={240} height={240} alt="done 없음" />
            <p>아직 다 한 일이 없어요.</p>
            <p>해야 할 일을 체크해보세요!</p>
          </div>
        )}
      </div>
    </div>
  );
};
