import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { removeTodo, updateTodo } from "../fetures/Todo/todoSlice";

function Todos() {
  const todos = useSelector((state) => state.todos);
  const [input, setInput] = useState("");
  const [editTodo, setEditTodo] = useState(null);
  const dispatch = useDispatch();

  const handleTodoUpdate = (e) => {
    e.preventDefault();
    if (input.trim()) {
      dispatch(updateTodo({ id: editTodo, text: input }));
      setEditTodo(null); // exit edit id
      setInput("");
    }
  };

  return (
    <>
      <div>Todos</div>
      <ul className="list-none">
        {todos.map((todo) => (
          <li
            className="mt-4 flex justify-between items-center bg-zinc-800 px-4 py-2 rounded"
            key={todo.id}
          >
            {editTodo === todo.id ? (
              <form
                onSubmit={handleTodoUpdate}
                className="w-full flex flex-col sm:flex-row gap-2"
              >
                <input
                  className="flex-grow p-1 rounded"
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  autoFocus
                />
                <button
                  type="submit"
                  className="bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
                >
                  Save
                </button>
                <button
                  onClick={() => {
                    setEditId(null);
                    setInput("");
                  }}
                  type="button"
                  className="bg-gray-500 text-white px-2 py-1 rounded hover:bg-gray-600"
                >
                  Cancel
                </button>
              </form>
            ) : (
              <>
                <div className="text-white">{todo.text}</div>
                <div className="flex justify-center items-center gap-4 mt-2 sm:mt-0">
                  <button
                    onClick={() => dispatch(removeTodo(todo.id))}
                    className="text-white bg-red-500 py-1 px-4 hover:bg-red-600 rounded"
                  >
                    🗑️
                  </button>
                  <button
                    onClick={() => {
                      setEditTodo(todo.id);
                      setInput(todo.text);
                    }}
                    className="text-white bg-blue-500 py-1 px-4 hover:bg-blue-600 rounded"
                  >
                    ✏️
                  </button>
                </div>
              </>
            )}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Todos;
