import { getData, patchData, postData } from "@/api/api";
import { Container } from "@/components/layout/container";
import { List } from "@/components/list/list";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ChangeEvent, useState } from "react";

export interface TodoProps {
  id: number;
  name: string;
  isCompleted: boolean;
}

interface HomeProps {
  initialTodos: TodoProps[];
}

export async function getServerSideProps() {
  try {
    const data = await getData();
    return {
      props: {
        initialTodos: data || [],
      },
    };
  } catch (error) {
    console.log("데이터 불러오기 실패", error);
    return {
      props: {
        initialTodos: [],
      },
    };
  }
}

const Home = ({ initialTodos }: HomeProps) => {
  const [todos, setTodos] = useState<TodoProps[]>(initialTodos);
  const [todoData, setTodoData] = useState("");

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTodoData(e.target.value);
  };

  const handleSubmit = async () => {
    if (todoData === "") {
      return alert("할 일을 입력해주세요!");
    }
    try {
      const newTodo = await postData(todoData);
      setTodos((prev) => [newTodo, ...prev]);
      setTodoData("");
    } catch (error) {
      console.log("데이터 등록 실패", error);
    }
  };

  const handleComplete = async (id: number, updateData: boolean) => {
    try {
      const updatedTodo = await patchData(id, {
        isCompleted: !updateData,
      });
      setTodos((prev) =>
        prev.map((todo) => (todo.id === id ? updatedTodo : todo))
      );
    } catch (error) {
      console.log("데이터 변경 실패", error);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLElement>) => {
    if (e.key === "Enter") {
      handleSubmit();
    }
  };

  return (
    <>
      <Container>
        <div className="flex justify-between mt-6 h-14">
          <Input
            value={todoData}
            onChange={handleChange}
            handleKeyDown={handleKeyDown}
          />
          <Button handleSubmit={handleSubmit} />
        </div>
        <List todos={todos} handleComplete={handleComplete} />
      </Container>
    </>
  );
};

export default Home;
