import React from "react";

export const CompleteTodo = (props) => {
  const { compTodo, onClickReturn } = props;
  return (
    <div className="completed-area">
      <p className="title">完了したタスク</p>
      <ul>
        {compTodo.map((todo, index) => {
          return (
            <div key={todo} className="list-row">
              <li>{todo}</li>
              <button onClick={() => onClickReturn(index)}>戻す</button>
            </div>
          );
        })}
      </ul>
    </div>
  );
};
