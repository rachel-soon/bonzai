// import initialData from "./data";
import Column from "./Column";
import { DndContext } from "@dnd-kit/core";
import Task from "./Task";

// https://egghead.io/lessons/react-reorder-a-list-with-react-beautiful-dnd
// NOTE: onDragEnd is the only required callback
function Board() {
  const columns = [
    {
      title: "To Do",
      id: "to-do",
      taskList: [
        {
          id: "1",
          description: "task 1",
        },
        {
          id: "2",
          description: "task 2",
        },
      ],
    },
    {
      title: "In Progress",
      id: "in-progress",
      taskList: [],
    },
    {
      title: "QA/QC",
      id: "qa-qc",
      taskList: [],
    },
  ];

  const task = {
    id: "",
    description: "",
  };

  // TODO: what is this type??
  const handleDragEnd = (event: unknown) => {
    console.log(event.over.id);
  };

  return (
    <div className="flex flex-col">
      <DndContext onDragEnd={handleDragEnd}>
        <div className="columns">
          {columns.map((column) => (
            <div className="column">
              <Column id={column.id} key={column.id}>
                <div className="mb-5">{column.title}</div>

                {column.taskList.map((task) => (
                  <Task id={task.id} key={task.id}>
                    {task.description}
                  </Task>
                ))}
              </Column>
            </div>
          ))}
        </div>
      </DndContext>
    </div>
  );
}

export default Board;
