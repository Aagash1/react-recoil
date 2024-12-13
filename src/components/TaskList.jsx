import { useRecoilValue } from 'recoil';
import { filteredTaskListState } from '../recoil/selectors';
import TaskItem from './TaskItem';

const TaskList = () => {
  const filteredTasks = useRecoilValue(filteredTaskListState);

  return (
    <div>
      {filteredTasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
