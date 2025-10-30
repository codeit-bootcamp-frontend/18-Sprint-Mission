import { getData } from "@/api/api";
import { useEffect, useState } from "react";

export const List = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    async function fetchTodos() {
      try {
        const data = await getData();
        console.log(data);
        setTodos(data);
      } catch (error) {
        console.log("데이터 불러오기 실패", error);
      }
    }
    fetchTodos();
  }, []);
  return (
    <div>
      {todos.length > 0 ? (
        <ul>
          {todos.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      ) : (
        <p>불러오는중</p>
      )}
    </div>
  );
};
