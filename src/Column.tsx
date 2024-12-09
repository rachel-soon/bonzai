import "./Column.scss";
import { useDroppable } from "@dnd-kit/core";

function Column({ children, id }) {
  const { setNodeRef, isOver } = useDroppable({
    id: id,
  });

  const style = {
    border: isOver ? "2px solid red" : undefined,
  };

  return (
    <>
      <div className="card column-card" ref={setNodeRef} style={style}>
        {children}
      </div>
    </>
  );
}

export default Column;
