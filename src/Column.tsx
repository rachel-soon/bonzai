import "./Column.scss";
import Task from "./Task";
import { useDroppable } from "@dnd-kit/core";

function Column({ column, tasks }) {
  const { setNodeRef: setFirstDroppableRef, isOver: isFirstOver } =
    useDroppable({
      id: "droppable-1",
    });
  const { setNodeRef: setSecondDroppableRef, isOver: isSecondOver } =
    useDroppable({
      id: "droppable-2",
    });
  const { setNodeRef: setThirdDroppableRef, isOver: isThirdOver } =
    useDroppable({
      id: "droppable-3",
    });

  const style = {
    border: isFirstOver ? "2px solid red" : undefined,
  };

  return (
    <>
      <div className="columns">
        <div className="column">
          <div className="is-size-6 mb-4">{column.title}</div>

          <div
            className="card column-card"
            ref={setFirstDroppableRef}
            style={style}
          >
            {/* <div>
              {tasks.map((task) => (
                <Task key={task.id} task={task} />
              ))}
            </div> */}

            <Task key="123" />
          </div>
        </div>
        <div className="column">
          <div className="is-size-6 mb-4">SECOND</div>
          <div className="card column-card" ref={setSecondDroppableRef}></div>
        </div>
        <div className="column" ref={setThirdDroppableRef}>
          <div className="is-size-6 mb-4">THIRD</div>

          <div className="card column-card"></div>
        </div>
      </div>
    </>
  );
}

export default Column;
