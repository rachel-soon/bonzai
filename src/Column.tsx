// import { useDroppable } from "@dnd-kit/core";
import React from "react";

interface PropsColumn {
  children: React.ReactNode;
  id: string;
}

export default function Column({ children, id }: PropsColumn) {
  // const { setNodeRef, isOver } = useDroppable({
  //   id: id,
  // });

  // const style = {
  //   border: isOver ? "2px solid red" : undefined,
  // };

  return (
    <>
      {/* ref={setNodeRef} style={style} */}
      <div className="card column-card">{children}</div>
    </>
  );
}
