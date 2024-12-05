import initialData from "./data";
import Column from "./Column";
import { DndContext } from "@dnd-kit/core";

// https://egghead.io/lessons/react-reorder-a-list-with-react-beautiful-dnd
// NOTE: onDragEnd is the only required callback
function Board() {
  const state = initialData;

  return (
    <>
      <DndContext>
        {state.columnOrder.map((columnId: string) => {
          const column = state.columns[columnId];
          const tasks = column.taskIds.map(
            (taskId: string) => state.tasks[taskId]
          );

          return (
            <Column key={column.id} column={column} tasks={tasks}></Column>
          );
        })}
      </DndContext>
    </>
  );
}

export default Board;
