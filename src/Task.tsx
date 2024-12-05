import "./Task.scss";
import { useDraggable } from "@dnd-kit/core";
// import { CSS } from "@dnd-kit/utilities";

function Task({ task }) {
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id: "unique-id",
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;
  // Within your component that receives `transform` from `useDraggable`:
  //   const style = {
  //     transform: CSS.Translate.toString(transform),
  //   };

  return (
    <div
      className="card task-card"
      ref={setNodeRef}
      {...listeners}
      {...attributes}
      style={style}
    >
      {/* {task.content} */}
      Hello
    </div>
  );
}

export default Task;
