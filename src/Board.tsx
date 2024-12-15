// import initialData from "./data";
import Column from "./Column";
import Task from "./Task";
import { DndContext } from "@dnd-kit/core";
import { useState, useRef, useEffect } from "react";
import { useKey } from "./hooks/useKey";

export interface ITask {
  id: string;
  description: string;
  column_id: string;
}

// https://egghead.io/lessons/react-reorder-a-list-with-react-beautiful-dnd
// NOTE: onDragEnd is the only required callback
const columns = [
  {
    title: "To Do",
    id: "to-do",
  },
  {
    title: "In Progress",
    id: "in-progress",
  },
];

function generateId(length: number) {
  let result = "";
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  const charactersLength = characters.length;
  let counter = 0;
  while (counter < length) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
    counter += 1;
  }
  return result;
}

function Board() {
  const [taskList, setTaskList] = useState<Array<ITask>>([]);
  const [currentColumn, setCurrentColumn] = useState("");
  const [newTask, setNewTask] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const taskInput = useRef<HTMLInputElement>(null);

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

  const addTask = () => {
    setIsLoading(true);

    const task: ITask = {
      id: generateId(10),
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

  const removeTask = (id: string) => {
    setTaskList(taskList.filter((task) => task.id !== id));
    setCurrentColumn("");
    setIsLoading(false);
  };

  const editTaskDescription = (targetTask: ITask, newDescription: string) => {
    const taskIndex = taskList.findIndex((task) => task.id === targetTask.id);
    targetTask = { ...targetTask, description: newDescription };

    const removedTask = taskList.splice(taskIndex, 1, targetTask);
    setCurrentColumn("");
    setTaskList(taskList.filter((task) => task.id !== removedTask[0].id));
  };

  return (
    <div className="flex flex-col">
      <DndContext>
        <div className="columns">
          {columns.map((column) => (
            <div className="column" key={column.id}>
              <Column id={column.id} key={column.id}>
                <div className="mb-5">{column.title}</div>

                <div>
                  {taskList.map(
                    (task) =>
                      task.column_id === column.id && (
                        <Task
                          key={task.id}
                          task={task}
                          onRemoveTask={removeTask}
                          onEditTask={editTaskDescription}
                        />
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
                        disabled={newTask === ""}
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
                    className="button is-text btn-task is-fullwidth is-left is-flex is-justify-content-flex-start mt-4"
                    onClick={() => setCurrentColumn(column.id)}
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
