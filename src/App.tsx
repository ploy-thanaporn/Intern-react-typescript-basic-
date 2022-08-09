import React, { useState } from "react";
import "./App.css";
import InputFeild from "./components/InputFeild";
import { Todo } from "./components/model";
import TodoList from "./components/TodoList";
import { DragDropContext } from "react-beautiful-dnd";

// type React => React.FunctionComponent
const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("");
  const [todos, setTodos] = useState<Todo[]>([]);
  const [completeTodos, setCompleteTodos] = useState<Todo[]>([]);

  const handleAddTask = (e: React.FormEvent) => {
    e.preventDefault();

    if (todo) {
      setTodos([...todos, { id: Date.now(), todo, isDone: false }]);
      // clear ค่า
      setTodo("");
    }
  };
  console.log(todos);
  return (
    <DragDropContext onDragEnd={() => {}}>
      <div className="App">
        <span className="heading">Taskify</span>
        <InputFeild
          todo={todo}
          setTodo={setTodo}
          handleAddTask={handleAddTask}
        />
        <TodoList
          todos={todos}
          setTodos={setTodos}
          completeTodos={completeTodos}
          setCompleteTodos={setCompleteTodos}
        />
      </div>
    </DragDropContext>
  );
};

export default App;
