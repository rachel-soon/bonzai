import { useEffect, useRef, useState, memo } from "react";
import { ITask } from "./Board";
import { useKey } from "./hooks/useKey";
interface PropsTask {
  task: ITask;
  onRemoveTask: (id: string) => void;
  onEditTask: (task: ITask, description: string) => void;
}

export default memo(function Task({
  task,
  onRemoveTask,
  onEditTask,
}: PropsTask) {
  const [taskDescription, setTaskDescription] = useState(task.description);
  const [readonly, setReadOnly] = useState(true);
  const input = useRef<HTMLInputElement>(null);

  console.log(task.id)

  useEffect(() => {
    if (!readonly && input.current) {
      input.current.focus();
      input.current.value = task.description;
    }
  }, [input, readonly, task.description]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTaskDescription(e.target.value);
  };

  const handleDelete = (id: string) => {
    setReadOnly(true);
    onRemoveTask(id);
  };

  const handleEdit = () => {
    setReadOnly(true);
    onEditTask(task, taskDescription);
  };

  useKey("Enter", () => {
    if (document.activeElement === input.current) {
      handleEdit();
    }
  });

  useKey("Escape", () => {
    if (document.activeElement === input.current) {
      setReadOnly(true);
    }
  });

  return (
    <>
      {readonly ? (
        <div className="is-flex is-align-items-center">
          <div
            className="task-card is-flex is-align-items-center"
            onClick={() => setReadOnly(false)}
          >
            <i className="fa-solid fa-fire"></i>
            <div className="mx-3">{task.description}</div>
          </div>
          <div className="icon-container" onClick={() => handleDelete(task.id)}>
            <i className="fa-solid fa-xmark"></i>
          </div>
        </div>
      ) : (
        <span className="is-flex is-align-items-center">
          <input
            ref={input}
            className="input my-2 mr-2"
            onChange={(e) => handleChange(e)}
          />
          <div className="icon-container" onClick={() => handleEdit()}>
            <i className="fa-solid fa-check"></i>
          </div>
        </span>
      )}
    </>
  );
});
