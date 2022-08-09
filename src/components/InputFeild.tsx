import React from "react";
import "./InputFeild.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent) => void;
}
// or ({ todo, setTodo }: Props)
const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAddTask }) => {
  return (
    <form className="input" onSubmit={handleAddTask}>
      <input
        type="text"
        placeholder="Enter a task"
        className="input-box"
        value={todo}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="btn-input-submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputFeild;
