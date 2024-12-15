import { useEffect, useRef, useState } from "react";
import PropTypes, { InferProps } from "prop-types";

Task.propTypes = {
  task: {
    id: PropTypes.string,
    description: PropTypes.string,
    column_id: PropTypes.string,
  },
  onRemoveTask: PropTypes.func.isRequired,
  onEditTask: PropTypes.func.isRequired,
};

function Task({
  task,
  onRemoveTask,
  onEditTask,
}: InferProps<typeof Task.propTypes>) {
  const [taskDescription, setTaskDescription] = useState(task.description);
  const [readonly, setReadOnly] = useState(true);
  const input = useRef<HTMLInputElement>(null);

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

  return (
    <>
      {readonly ? (
        <div className="is-flex is-align-items-center">
          <div
            className="task-card is-flex is-align-items-center"
            onClick={() => setReadOnly(false)}
          >
            <i className="fa-solid fa-fire"></i>
            <div className="ml-3">{task.description}</div>
          </div>{" "}
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
}

export default Task;
