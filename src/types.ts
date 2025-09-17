export interface TodoData {
  id: number;
  name: string;
  isCompleted: boolean;
}

export interface SeparatedTodos {
  completed: TodoData[];
  incomplete: TodoData[];
}
