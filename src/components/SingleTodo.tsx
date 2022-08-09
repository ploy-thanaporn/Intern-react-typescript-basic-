import React, { useEffect, useRef, useState } from "react";
import { Todo } from "./model";
import "./style.css";
import { AiFillEdit, AiFillDelete, AiOutlineCheckCircle } from "react-icons/ai";
import { Draggable } from "react-beautiful-dnd";

type Props = {
  index: number;
  todo: Todo;
  todos: Todo[];
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
};

const SingleTodo = ({ todo, todos, setTodos, index }: Props) => {
  // edit ถูกใช้อยู่รึป่าว
  const [edit, setEdit] = useState<boolean>(false);
  // เก็บค่า edit ไว้เพื่อให้ระบุรายการที่จะการแก้ไข
  const [editTodo, setEditTodo] = useState<string>(todo.todo);

  const handleDone = (id: number) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, isDone: !todo.isDone } : todo
      )
    );
  };

  const handleDelete = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleEdit = (e: React.FormEvent, id: number) => {
    e.preventDefault();

    setTodos(
      todos.map((todo) => (todo.id === id ? { ...todo, todo: editTodo } : todo))
    );
    setEdit(false);
  };

  // when click edit จะเข้าถึง input
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, [edit]);

  return (
    <Draggable draggableId={todo.id.toString()} index={index}>
      {(provided) => (
        <form
          className="todos-single"
          onSubmit={(e) => handleEdit(e, todo.id)}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          ref={provided.innerRef}
        >
          {edit ? (
            <input
              ref={inputRef}
              value={editTodo}
              className="todos-single-text"
              onChange={(e) => setEditTodo(e.target.value)}
            />
          ) : todo.isDone ? (
            <span className="todos-single-text">{todo.todo}</span>
          ) : (
            <span className="todos-single-text">{todo.todo}</span>
          )}

          <div className="group-icon">
            <span
              className="icon"
              onClick={() => {
                if (!edit && !todo.isDone) {
                  setEdit(!edit);
                }
              }}
            >
              <AiFillEdit />
            </span>
            <span className="icon" onClick={() => handleDelete(todo.id)}>
              <AiFillDelete />
            </span>
            <span className="icon" onClick={() => handleDone(todo.id)}>
              <AiOutlineCheckCircle />
            </span>
          </div>
        </form>
      )}
    </Draggable>
  );
};

export default SingleTodo;
