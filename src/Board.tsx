// import initialData from "./data";
import Column from "./Column";
import { DndContext } from "@dnd-kit/core";
import { useState, useRef, useEffect } from "react";
import { useKey } from "./hooks/useKey";

interface Task {
  description: string;
  column_id: string;
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

  const [taskList, setTaskList] = useState<Array<Task>>([]);
  const [currentColumn, setCurrentColumn] = useState("");
  const [newTask, setNewTask] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const taskInput = useRef<HTMLInputElement>(null);
  // TODO: what is this type??
  const handleDragEnd = (event: unknown) => {
    console.log(event.over.id);
  };

  useKey("Enter", function () {
    if (document.activeElement === taskInput.current) {
      addTask();
    }
  });
  useKey("Escape", function () {
    if (document.activeElement === taskInput.current) {
      setNewTask("");
      setCurrentColumn("");
      setIsLoading(false);
    }
  });

  useEffect(() => {
    if (currentColumn) {
      taskInput.current?.focus();
    }
  }, [currentColumn]);

  const onAddTask = (columnId: string) => {
    setCurrentColumn(columnId);
  };

  const addTask = () => {
    setIsLoading(true);

    const task: Task = {
      description: newTask,
      column_id: currentColumn,
    };

    setTimeout(() => {
      setTaskList([...taskList, task]);
      setNewTask("");
      setCurrentColumn("");
      setIsLoading(false);
    }, 450);
  };

  return (
    <div className="flex flex-col">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="columns">
          {columns.map((column) => (
            <div className="column">
              <Column id={column.id} key={column.id}>
                <div className="mb-5">{column.title}</div>

                <div>
                  {taskList.map(
                    (task) =>
                      task.column_id === column.id && (
                        <div className="my-3 is-flex is-align-items-center">
                          <i className="fa-solid fa-fire"></i>
                          <div className="ml-3">{task.description}</div>
                        </div>
                      )
                  )}
                </div>

                {currentColumn === column.id ? (
                  <div>
                    <input
                      ref={taskInput}
                      className="input"
                      placeholder="What needs to be done?"
                      onChange={(e) => setNewTask(e.target.value)}
                    />

                    <div className="is-flex is-justify-content-flex-start mt-4">
                      <button
                        className={`button is-link mr-2 ${
                          isLoading && "is-loading"
                        }`}
                        onClick={() => addTask()}
                      >
                        Add
                      </button>
                      <button
                        className="button is-text btn-task"
                        onClick={() => setCurrentColumn("")}
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
