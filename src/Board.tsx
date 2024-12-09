// import initialData from "./data";
import Column from "./Column";
import { DndContext } from "@dnd-kit/core";
import { useState, useRef, useEffect } from "react";

interface Task {
  description: string;
  column_id: string;
  status: string;
}

// https://egghead.io/lessons/react-reorder-a-list-with-react-beautiful-dnd
// NOTE: onDragEnd is the only required callback
function Board() {
  const columns = [
    {
      title: "To Do",
      id: "to-do",
    },
    {
      title: "In Progress",
      id: "in-progress",
    },
    {
      title: "QA/QC",
      id: "qa-qc",
    },
  ];

  const [taskList, setTaskList] = useState([]);
  const [columnIsAdding, setColumnIsAdding] = useState("");
  const taskInput = useRef<HTMLInputElement>(null);
  // TODO: what is this type??
  const handleDragEnd = (event: unknown) => {
    console.log(event.over.id);
  };

  useEffect(() => {
    if (columnIsAdding) {
      taskInput.current?.focus();
    }
  }, [columnIsAdding]);

  const onAddTask = (columnId: string) => {
    setColumnIsAdding(columnId);
  };

  return (
    <div className="flex flex-col">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="columns">
          {columns.map((column) => (
            <div className="column">
              <Column id={column.id} key={column.id}>
                <div className="mb-5">{column.title}</div>

                {columnIsAdding === column.id ? (
                  <div>
                    <input
                      ref={taskInput}
                      className="input"
                      placeholder="What needs to be done?"
                    />

                    <div className="is-flex is-justify-content-flex-start mt-4">
                      <button className="button is-link mr-2">Add</button>
                      <button
                        className="button is-text btn-task"
                        onClick={() => setColumnIsAdding("")}
                      >
                        Cancel
                      </button>
                    </div>
                  </div>
                ) : (
                  <button
                    type="button"
                    className="button is-text btn-task is-fullwidth is-left is-flex is-justify-content-flex-start"
                    onClick={() => onAddTask(column.id)}
                  >
                    <i className="fa-solid fa-plus"></i>
                    <div className="ml-3 border">Add task</div>
                  </button>
                )}
              </Column>
            </div>
          ))}
        </div>
      </DndContext>
    </div>
  );
}

export default Board;
