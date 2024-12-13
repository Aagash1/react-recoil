import { useSetRecoilState } from 'recoil';
import { taskListState } from '../recoil/atoms';

const TaskItem = ({ task }) => {
  const setTaskList = useSetRecoilState(taskListState);

  const toggleComplete = () => {
    setTaskList((oldTaskList) =>
      oldTaskList.map((t) =>
        t.id === task.id ? { ...t, completed: !t.completed } : t
      )
    );
  };

  const deleteTask = () => {
    setTaskList((oldTaskList) => oldTaskList.filter((t) => t.id !== task.id));
  };

  return (
    <div>
      <input
        type="checkbox"
        checked={task.completed}
        onChange={toggleComplete}
      />
      <span>{task.text}</span>
      <button onClick={deleteTask}>Delete</button>
    </div>
  );
};

export default TaskItem;
