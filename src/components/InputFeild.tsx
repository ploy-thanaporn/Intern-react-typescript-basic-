import React, { useRef } from "react";
import "./style.css";

interface Props {
  todo: string;
  setTodo: React.Dispatch<React.SetStateAction<string>>;
  handleAddTask: (e: React.FormEvent) => void;
}
// or ({ todo, setTodo }: Props)
const InputFeild: React.FC<Props> = ({ todo, setTodo, handleAddTask }) => {
  const inputRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className="input"
      onSubmit={(e) => {
        handleAddTask(e);
        inputRef.current?.blur();
      }}
    >
      <input
        type="text"
        placeholder="Enter a task"
        className="input-box"
        value={todo}
        ref={inputRef}
        onChange={(e) => setTodo(e.target.value)}
      />
      <button className="btn-input-submit" type="submit">
        Go
      </button>
    </form>
  );
};

export default InputFeild;
