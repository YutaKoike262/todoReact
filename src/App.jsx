import React, { useState } from "react";
import ReactDOM from "react-dom";
import { InputTodo } from "./components/inputTodo";
import { IncomoleteTodo } from "./components/incompleteTodo";
import { CompleteTodo } from "./components/completeTodo";
import "./style.css";

export const App = () => {
  const [todoText, SetTodoText] = useState("");
  const [incompTodo, setIncompTodo] = useState(["あああああ", "いいいい"]);
  const [compTodo, setcompTodo] = useState(["完了"]);

  const onChangeTodoText = (event) => SetTodoText(event.target.value);

  const onClickAdd = () => {
    if (!todoText) return;
    const newTodos = [...incompTodo, todoText];
    setIncompTodo(newTodos);
    SetTodoText("");
  };

  const onClickDelete = (index) => {
    const newTodos = [...incompTodo];
    newTodos.splice(index, 1);
    setIncompTodo(newTodos);
  };

  const onClickComplete = (index) => {
    console.log(index);
    console.log(incompTodo[index]);
    const newTodos = [...incompTodo];
    const newComp = [...compTodo, incompTodo[index]];
    newTodos.splice(index, 1);
    setIncompTodo(newTodos);
    setcompTodo(newComp);
  };

  const onClickReturn = (index) => {
    const newTodos = [...incompTodo, compTodo[index]];
    const newComp = [...compTodo];
    newComp.splice(index, 1);
    setIncompTodo(newTodos);
    setcompTodo(newComp);
  };

  return (
    <>
      <InputTodo
        todoText={todoText}
        onChange={onChangeTodoText}
        onClick={onClickAdd}
        disabled={incompTodo.length >= 5}
      />
      {incompTodo.length >= 5 && <p>登録できるtodo は5個までにしてね</p>}
      <IncomoleteTodo
        incompTodo={incompTodo}
        onClickDelete={onClickDelete}
        onClickComplete={onClickComplete}
      />
      <CompleteTodo compTodo={compTodo} onClickReturn={onClickReturn} />
    </>
  );
};
