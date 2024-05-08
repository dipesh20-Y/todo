import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { editTodo, removeTodo } from "./store/todoSlice";
import { Modal, Button } from "rsuite";

function ListTodo() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todo.todos);
  const [completedTodo, setCompletedTodo] = useState([]);
  const [editingTodo, setEditingTodo] = useState("");
  const [updatedTodo, setUpdatedTodo] = useState("");

  const [open, setOpen] = React.useState(false);
  const [backdrop, setBackdrop] = React.useState("static");

  const handleOpen = (todo) => {
    setEditingTodo(todo.text);
    console.log(todo);
    setOpen(true);
  };

  const handleClose = (todoId) => {
    dispatch(editTodo({id: todoId, editedText: editingTodo}));

    setOpen(false);
  };

  const cancelEdit = () => setOpen(false);

  const handleCompletedTodo = (todoId) => {
    if (completedTodo.includes(todoId)) {
      setCompletedTodo(completedTodo.filter((id) => id !== todoId));
    } else {
      setCompletedTodo([...completedTodo, todoId]);
    }
  };

  return (
    <>
      <div className="mt-16 font-bold text-center text-xl">TODOS:</div>
      <ul className="List-none  ">
        {list?.map((todo) => (
          <li
            className=" flex items-center justify-center px-4 py-2 bg-slate-100 mt-4 max-w-2xl mx-auto"
            key={todo.id}
          >
            <div className="flex items-center mr-auto">
              <input
                type="checkbox"
                className="mr-2"
                onChange={() => handleCompletedTodo(todo.id)}
              />
              <div
                className={
                  completedTodo.includes(todo.id) ? "line-through" : ""
                }
              >
                {todo.text}
              </div>
            </div>

            <button
              className="inline-flex items-center px-2 py-1 text-sm rounded-lg  hover:bg-teal-100 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:rounded-full transition-all duration-300"
              onClick={() => {
                handleOpen(todo);
              }}
            >
              <svg
                className="w-6 h-6 text-gray-800 dark:text-white mr-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="#333333"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="m14.304 4.844 2.852 2.852M7 7H4a1 1 0 0 0-1 1v10a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-4.5m2.409-9.91a2.017 2.017 0 0 1 0 2.853l-6.844 6.844L8 14l.713-3.565 6.844-6.844a2.015 2.015 0 0 1 2.852 0Z"
                />
              </svg>
            </button>

            <Modal
              backdrop={backdrop}
              keyboard={false}
              open={open}
              onClose={cancelEdit}
            >
              <Modal.Header>
                <Modal.Title>Edit Todo</Modal.Title>
              </Modal.Header>

              <Modal.Body>
                <div>
                  <input
                    className="h-10 flex p-2 justify-start  min-w-12rem rounded-lg border-gray-400  mr-4 indent-4 text-emerald-900 shadow-lg  "
                    type="text"
                    value={editingTodo}
                    onChange={(e) => {
                      e.preventDefault();
                      setEditingTodo(e.target.value);
                    }}
                    required
                  />
                </div>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={() => {
                    handleClose(todo.id);
                  }}
                  appearance="primary"
                >
                  Update
                </Button>
                <Button onClick={cancelEdit} appearance="subtle">
                  Cancel
                </Button>
              </Modal.Footer>
            </Modal>

            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="inline-flex items-center px-2 py-1 text-sm text-red-500 hover:bg-red-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
            >
              <svg
                className="w-4 h-4 mr-1"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M4.76197 9.23803L7.79771 12.274L0.834737 19.1103C0.324711 19.6197 0 19.973 0 20.3846V24C0 24.4183 0.418278 24.7726 1.00271 24.9973L12 24.9973L12 20.3846V11.2896L15.2023 14.3259C15.6913 14.8352 16 15.1906 16 15.5992V24C16 24.4183 15.5817 24.7726 15.0027 24.9973L8 24.9973L8 20.3846V4.61538L4.76197 9.23803Z"
                  clipRule="evenodd"
                />
              </svg>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}

export default ListTodo;
