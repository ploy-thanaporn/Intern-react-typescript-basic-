import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { Todo } from "./model";
import "./style.css";
import { AiFillEdit, AiFillDelete, AiOutlineCheckCircle } from "react-icons/ai";

type Props = {
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos }: Props) => {
  return (
    <form className="todos-single">
      <span className="todos-single-text">{todo.todo}</span>
      <div className="group-icon">
        <span className="icon">
          <AiFillEdit />
        </span>
        <span className="icon">
          <AiFillDelete />
        </span>
        <span className="icon">
          <AiOutlineCheckCircle />
        </span>
      </div>
    </form>
  );
};

export default SingleTodo;
