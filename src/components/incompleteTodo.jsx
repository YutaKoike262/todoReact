import React from "react";

export const IncomoleteTodo = (props) => {
  const { incompTodo, onClickDelete, onClickComplete } = props;
  return (
    <div className="incomplete-area">
      <p className="title">未完了のTodo</p>
      <ul>
        {incompTodo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickComplete(index)}>完了</button>
              <button onClick={() => onClickDelete(index)}>削除</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
